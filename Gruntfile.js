module.exports = function(grunt) {
    /**
     * Load plugins
     */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['sass', 'concat']);

    /**
     * Grunt tasks config
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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