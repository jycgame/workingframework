'use strict';

requirejs.config({

    baseUrl: '.',

    paths: {
        'jquery': 'plugin/jquery-3.4.1.min',
        'bootstrap': 'plugin/bootstrap.min',
        'popper': 'plugin/popper.min',
        'vue': 'plugin/vue.min',
    },

    shim: {
        'bootstrap': {
            deps: ['jquery', 'popper'],
            exports: 'bootstrap'
        },
        'vue': {
            deps: ['jquery'],
            exports: 'vue'
        },
    }
});