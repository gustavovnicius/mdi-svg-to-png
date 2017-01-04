const readline = require('linebyline'),
      rl = readline('./custom.txt');

const fs = require('fs');

const svg_to_png = require('svg-to-png');

// fs.rmdirSync('output-svg');
// fs.mkdirSync('output-svg');

rl.on('line', function(line, lineCount, byteCount) {
  if (line.length == 0) return;
  let splitted = line.split('@');

  // console.log(splitted[1]);

  fs.writeFileSync('output-svg/' + splitted[0] + '.svg', '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 600 600"><g transform="scale(25)"><path fill="#000000" d=' + splitted[1] + ' /></g></svg>');
})
.on('error', function(e) {
  console.log(e);
  // something went wrong
});

svg_to_png.convert("/Users/gustavo/Projects/svg/output-svg", "/Users/gustavo/Projects/svg/output-png");
