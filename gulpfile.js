'use strict';
const gulp = require('gulp'),
	  plugins = require('gulp-load-plugins')(),
	  path = require('path'),
	  fs = require('fs');

const taskPath = path.resolve(__dirname, '_tasks');

if(!fs.existsSync(taskPath)){
	throw new Error('something wrong in require tasks');
	return;
}else{
	fs.readdirSync(taskPath).forEach(function(value){
		require(path.resolve(taskPath, value))(gulp, plugins);
	});
}
