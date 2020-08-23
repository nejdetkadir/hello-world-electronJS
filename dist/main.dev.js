"use strict";

var electron = require("electron");

var url = require("url");

var path = require("path");

var _require = require("electron"),
    BrowserWindow = _require.BrowserWindow;

var app = electron.app;
var mainWindow;
app.on('ready', function () {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "main.html"),
    protocol: "file:",
    slashes: true
  }));
});