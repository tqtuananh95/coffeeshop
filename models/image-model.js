var db = require('../config/database');
module.exports = {
    storeImage: function (inputValues) {
        // check unique email address
        var sql = 'SELECT * FROM images WHERE image_name =?';
        db.query(sql, inputValues.image_name, function (err, data, fields) {
            if (err) throw err
            if (data.length >= 1) {
                console.log(inputValues.image_name + " is already exist");
            } else {
                // save users data into database
                var sql = 'INSERT INTO images( image_name, image_path, create_date, create_user) VALUES ( ?, ?, ?, ?)';
                var param = [];
                param.push(inputValues.image_name);
                param.push(inputValues.image_path);
                param.push(new Date());
                param.push('1');
                db.query(sql, param, function (err, data) {
                    if (err) throw err;
                });
            }
        })
    }
}