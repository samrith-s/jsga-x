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
    pkg: grunt.file.readJSON('package.json'),
    docs:{
      jsga:{
        files:[{src:'app/'}],
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        logo: '<%= pkg.logo %>',
        options:{
          linkNatives: true,
          outdir: '../docs/',
          themedir:'node_modules/yuidoc-bootstrap-theme',
          helpers: ["node_modules/yuidoc-bootstrap-theme/helpers/helpers.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-build-docs');

};