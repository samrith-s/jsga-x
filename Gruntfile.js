module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify:{
      jsga:{
        files:{
          'build/jsga.min.js':['app/**/*.js']
        }
      }
    },
    jsdoc:{
      jsga:{
        src:['app/**/*.js'],
        options:{
          destination: 'docs/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jsdoc');

};