const express = require("express");
const router = express.Router();
//const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload-controller");

//router.get("/", homeController.getHome);
router.get('/store-image', uploadController.imageUploadForm);
router.post(
    "/store-image",
    uploadController.uploadImages,
    uploadController.resizeImages,
    uploadController.getResult
);

module.exports = router;