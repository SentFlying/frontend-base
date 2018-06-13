let mix = require('laravel-mix');
//remove if not loading jquery via cdn/external script tag
mix.webpackConfig({
    externals: {
        "jquery": "jQuery"
    }
});

mix.setPublicPath('public_html/');
mix.js('resources/assets/js/app.js', 'public_html/js');
mix.sass('resources/assets/sass/app.scss', 'public_html/css').sourceMaps();
