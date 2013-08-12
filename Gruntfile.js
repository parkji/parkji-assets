module.exports = function(grunt) {
    /**
     * Load plugins
     */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['clean', 'sass', 'concat', 'uglify', 'cssmin']);

    /**
     * Grunt tasks config
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: ['web/css/*', 'web/js/*']
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'web/css/styles.min.css': 'sass/styles.scss'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'components/html5shiv/dist/html5shiv.js',
                    'components/respond/respond.min.js'
                ],
                dest: 'web/js/polyfills.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            prism: {
                files: {
                    'web/js/prism.min.js': ['components/prism/prism.js']
                }
            }
        },
        cssmin: {
            prism: {
                files: {
                    'web/css/styles.min.css': [
                        'components/prism/prism-okaidia.css',
                        'web/css/styles.min.css'
                    ]
                }
            }
        },
        watch: {
            scss: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    /**
     * Log 'watch' event changes
     */
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};