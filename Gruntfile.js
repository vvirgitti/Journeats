module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/*.js']
    },
    protractor: {
      options: {
        configFile: "test/protractor.conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      your_target: {
        options: {
          configFile: "test/protractor.conf.js",
          args: {}
        }
      },
    },
    protractor_webdriver: {
      options: {
      },
      your_target: {
        command: 'webdriver-manager start',
      },
    },
    express: {
      options: {
        port: 3000,
        debug: true
      },
      server: {
        options: {
          script: 'server.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['express','jshint','protractor_webdriver','protractor']);

};