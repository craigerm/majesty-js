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
        specs: 'spec/*.js'
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('test', 'jasmine');
  grunt.registerTask('default', ['test']);
};
