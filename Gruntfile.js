module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      version: '<%= pkg.version %>'
    },

    jasmine: {
      sources: 'src/majesty.js',
      options: {
        keepRunner: true,
        specs: 'spec/*.js',
        vendor: [
          'lib/jquery.js',
          'lib/jasmine-jquery.js'
        ]
      }
    },

    watch: {
      all: {
        files: ['src/*.js', 'spec/*.js'],
        tasks: 'jasmine'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', 'jasmine');
  grunt.registerTask('default', ['test']);
};
