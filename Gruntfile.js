module.exports = function(grunt){
    grunt.initConfig({
        cssmin: {
            development: {
                files: {
                    //dest: sourcs
                    'css/min/main.min.css': 'css/main.css'
                }
            }
        },
        uglify: {
            development: {
                //files object
//                
//                files: {
//                    //dest: key array src value
//                    //app will be a combined file of both utilty and main
//                    'js/min/app.min.js': [
//                        'js/utility.js',
//                        'js/main.js'
//                    ]
//                }
                // Expanded Files
                //saves us the trouble of doing a one to one ratio manually
                files: [
                    {
                        expand: true,
                        cwd: 'js',
                        src: ['*.js'],
                        dest: 'js/min',
                        ext: '.min.js'
                    }
                ],
                options: {
                    sourceMap: true
                }
            },
            build: {
                files: {
                    'js/min/app.min.js': 'js/*.js'
                },
                options: {
                    sourceMap: false
                }
            }
        },
        watch: {
            js: {
                files: 'js/*.js',
                tasks: ['uglify:development']
            },
            css: {
                files: 'css/*.css',
                tasks: ['cssmin:development']
            }
        }
    });
    
    grunt.registerTask('development', [
        'uglify:development','cssmin:development', 'watch'
    ]);
    
    grunt.registerTask('build', [
        'uglify:build',
        'cssmin:development'
    ]);
    
    grunt.registerTask('default', [
        'development'
    ]);
    
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
}