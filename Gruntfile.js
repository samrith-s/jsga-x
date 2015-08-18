module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify:{
      jsga:{
        files:{
          'build/jsga.min.js':['app/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};