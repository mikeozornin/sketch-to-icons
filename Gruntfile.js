
var path = require('path');

var PATH_BUILD_ICONS = './build/icons',
    PATH_DIST_FONTS = './dist/fonts',
    PATH_DIST_STYLES = './dist/styles',
    PATH_DIST_HTML = './dist/html';
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
                dest: PATH_DIST_FONTS,
                destCss: PATH_DIST_STYLES,
                options: {
                    relativeFontPath: PATH_DIST_FONTS,
                    stylesheet: 'less',
                    htmlDemo: true,

                    destHtml: PATH_DIST_HTML,
                    template: 'template.css',
                    fontFamilyName: 'Icons',
                    font: 'my-icons',
                    types: 'ttf, woff',
                     // Каждой иконке нужно задать номер символа. Мы используем 0xF501 и далее. 
                    codepoints : {
                      'upload-to-cloud_24'				: 0xF501,
                      'upload-to-cloud_64'				: 0xF502,
                    },
                    // Иконкам, которым не выставлен номер вручную будет задан номер из пространства
                    // 0xF701+. Следите за тем, чтобы таких иконок не было.
                    // Посмотреть коды символов можно с помощью http://opentype.js.org
                    startCodepoint: 0xF701,
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
