module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		uglify: {
			main: {
				files: {
					"aQuery.min.js": "src/*.js"
				}
			}
		},
		concat: {
    		dist: {
      			src: 'src/*.js',
      			dest: 'aQuery.js',
    		},
  		},
    });

	['grunt-contrib-uglify', 'grunt-contrib-concat']
		.forEach(function(task) {
			grunt.loadNpmTasks(task);
	});

	grunt.registerTask('default', ['uglify', 'concat']);
};