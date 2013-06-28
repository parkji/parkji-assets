module.exports = function(grunt) {
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['sass', 'concat']);
};