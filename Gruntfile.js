module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        uglify: {
            main: {
                files: {
                    'aQuery.min.js': ['src/helpers.js', 'src/main.js']
                }
            }
        },
        concat: {
            dist: {
                src: ['src/helpers.js', 'src/main.js'],
                dest: 'aQuery.js',
            },
        },
        run: {
            test: {
                cmd: 'npm',
                args: [
                    'run',
                    'test:only'
                ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask("test", ["run:test"]);
    grunt.registerTask('build', ['uglify', 'concat']);
    grunt.registerTask('default', ['uglify', 'concat', 'test']);
};