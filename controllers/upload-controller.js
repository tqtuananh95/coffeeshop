const multer = require("multer");
const sharp = require("sharp");
var imageModel = require('../models/image-model');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

const uploadFiles = upload.array("images", 10);

const uploadImages = (req, res, next) => {
  uploadFiles(req, res, err => {
    var msg = "";
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_UNEXPECTED_FILE") {

        msg = "Qúa số lượng 10 ảnh upload.";
        return res.render('./_layouts/upload-image', { alertMsg: msg });
      }
    } else if (err) {
      return res.render('./_layouts/upload-image', { alertMsg: err });
    }

    next();
  });
};

const resizeImages = async (req, res, next) => {
  if (!req.files) return next();

  req.body.images = [];
  await Promise.all(
    req.files.map(async file => {
      const filename = file.originalname.replace(/\..+$/, "");
      const newFilename = `${filename}.jpeg`;

      await sharp(file.buffer)
        .resize(640, 320)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/uploads/${newFilename}`);

      // store image in database
      var imageName = file.originalname;
      var imagePath = `public/uploads/${newFilename}`;
      var inputValues = {
        image_name: imageName,
        image_path: imagePath
      }
      // call model
      imageModel.storeImage(inputValues);
      req.body.images.push(newFilename);
    })
  );

  next();
};

const getResult = async (req, res) => {
  var msg = "";
  if (req.body.images.length <= 0) {
    msg = `You must select at least 1 image.`;
    return res.render('./_layouts/upload-image', { alertMsg: msg });
  }

  const images = req.body.images
    .map(image => "" + image + "")
    .join(" and ");

  msg = `Images were uploaded: ${images}`;

  return res.render('./_layouts/upload-image', { alertMsg: msg });
};

const imageUploadForm = async (req, res) => {
  res.render('./_layouts/upload-image');
};

module.exports = {
  imageUploadForm: imageUploadForm,
  uploadImages: uploadImages,
  resizeImages: resizeImages,
  getResult: getResult
};