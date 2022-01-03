const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

// for single file upload
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");
const uploadSingleFile = util.promisify(uploadFile);

// for multiple file upload
let uploadFiles = multer({ storage: storage }).array("multi-files", 10);
const uploadMultipleFiles = util.promisify(uploadFiles);

module.exports = { uploadSingleFile, uploadMultipleFiles };
