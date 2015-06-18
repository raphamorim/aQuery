module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		uglify: {
			main: {
				files: {
					'aQuery.min.js': ['src/utils.js', 'src/main.js']
				}
			}
		},
		concat: {
    		dist: {
      			src: ['src/utils.js', 'src/main.js'],
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