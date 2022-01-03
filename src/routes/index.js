const express = require("express");
const router = express.Router();
const {
  singleUpload,
  multipleUpload,
  getListFiles,
  download,
} = require("../controller/file.controller");

let routes = (app) => {
  router.post("/single-upload", singleUpload);
  router.post("/multiple-upload", multipleUpload);
  router.get("/files", getListFiles);
  router.get("/files/:name", download);

  app.use(router);
};

module.exports = routes;
