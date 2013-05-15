'use strict';

var util = require('./lib/utils');

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfil.js',
        'app/js/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'app/css/app.css': 'scss/app.scss'
        }
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          'app/css/app.css': 'scss/app.scss'
        }
      }
    },

    connect: {
      devserver: {
        options: {
          port: 8000,
          hostname: '0.0.0.0',
          base: 'app/',
          keepalive: true,
          middleware: function(connect, options){
            return [
              util.rewrite(),
              connect.static(options.base),
              connect.directory(options.base)
            ]
          }
        }
      }
    },

    karma: {
      unit: {
        options: {
          configFile: 'config/karma.conf.js'
        }
      },
      e2e: {
        options: {
          configFile: 'config/karma-e2e.conf.js'
        }
      }
    },

    watch: {
      scripts: {
        files: ['scss/*.scss'],
        tasks: 'sass:dev'
      }
    },

    copy: {
      angular: {
        files: [{
          src: 'angular/build/*',
          dest: 'app/js/lib/angular/',
          expand: true,
          flatten: true
        }]
      },
      flatui: {
        files: [{
          src: 'flat-ui/css/bootstrap.css',
          dest: 'scss/',
          ext: ".scss",  // change extension for proper sass import
          flatten: true,
          expand: true
        },
        {
          src: 'flat-ui/js/html5shiv.js',
          dest: 'app/js/lib/',
          flatten: true,
          expand: true
        },
        {
          src: 'flat-ui/fonts/*',
          dest: 'app/fonts/',
          flatten: true,
          expand: true
        }]
      },
      angularFire: {
        files: [{
          src: 'angularfire/angularFire.js',
          dest: 'app/js/lib/',
          flatten: true,
          expand: true
        }]
      }
    },

    clean: {angular: ['app/js/lib/angular/*']}
  });

  grunt.loadNpmTasks('grunt-contrib-watch'); // register contrib tasks
  grunt.loadNpmTasks('grunt-contrib-sass');  // compile sass
  grunt.loadNpmTasks('grunt-contrib-clean');  // delete files
  grunt.loadNpmTasks('grunt-contrib-copy');  // copy files
  grunt.loadNpmTasks('grunt-contrib-connect');  // file server
  grunt.loadNpmTasks('grunt-contrib-jshint');  // code analysis
  grunt.loadNpmTasks('grunt-karma');  // tests

  grunt.registerTask('test', ['karma:unit'])
  grunt.registerTask('e2e', ['karma:e2e'])

  grunt.registerTask('prod', ['sass:prod']);
  grunt.registerTask('go', ['clean', 'copy']);
  grunt.registerTask('serve', ['connect:devserver']);
  grunt.registerTask('hint', ['jshint']);
  grunt.registerTask('default', ['go', 'sass:dev', 'hint', 'serve'])
};
