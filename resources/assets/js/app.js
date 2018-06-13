
/*
    import jQuery and set as global
    dont use for wordpress, as wordpress comes with its own jquery and plugins will break if you dequeue it
    prefer CDN load for speed (most browsers will have a cached copy) - included here for reference
    If you do require and bundle jquery, remove it from the externals object in webpack.mix.js
 */
//window.$ = window.jQuery = require('jquery');
//lodash utility functions
window._ = require('lodash');
//example of a third party lib, install via npm,
require('slick-carousel');

//example of a stright forward local require, like php

require('./local.js');

$(function(){
    console.log('jquery ready fired');

    $('.slicktest').slick();
});