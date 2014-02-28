module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },

            livereload: {
                files: [
                    '*.{html,css}',
                    'src/*.html',
                    'src/*.css'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

};