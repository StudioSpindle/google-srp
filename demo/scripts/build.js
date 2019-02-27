
console.log('Creating bundle...');

var fs = require("fs");
var path = require("path");
var browserify = require("browserify");

var buildDir = path.join(__dirname, "../build");

try {
  fs.mkdirSync(buildDir)
} catch (e) {
  /* ignore error */
}

browserify("./main.js", {
  transform: [
    ["babelify", {"presets":["@babel/preset-env"]}],
    ["localenvify",{}],
    ["uglifyify",{}]
  ]})
  .bundle()
  .pipe(fs.createWriteStream(buildDir + "/bundle.js"));
