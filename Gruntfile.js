
var path = require('path');

var PATH_BUILD_ICONS = './build/icons',
    PATH_DIST = './dist';
var SKETCH_FILE_DEF = 'iconset.sketch';

module.exports = function(grunt) {
    'use strict';

    var sketch_file = grunt.option('file');

    if (sketch_file === undefined || sketch_file === true) {
        sketch_file = SKETCH_FILE_DEF;
    }

    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        sketch_export: {
            run: {
                options: {
                    type: 'slices',
                    scales: [
                        1.0
                    ],
                    formats: [
                        'svg'
                    ]
                },
                src: sketch_file,
                dest: PATH_BUILD_ICONS
            }
        },
        webfont: {
            run: {
                src: PATH_BUILD_ICONS + '/*.svg',
                dest: PATH_DIST,
                options: {
                    relativeFontPath: PATH_DIST,
                    stylesheet: 'less',
                    htmlDemo: true,

                    template: 'template.css',
                    fontFamilyName: 'Icons',
                    font: 'my-icons',
                    types: 'woff'
                }
            }
    	},
        shell: {
            publish: {
                command: 'npm publish'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sketch');
    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('publish', ['sketch_export:run', 'webfont:run', 'shell:publish']);
    grunt.registerTask('default', ['sketch_export:run', 'webfont:run']);

};
