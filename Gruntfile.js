module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify:{
      jsga:{
        files:{
          'build/jsga.min.js':['modules/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};