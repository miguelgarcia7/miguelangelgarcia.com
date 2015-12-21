var elixir = require('laravel-elixir');
var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');

var paths = {
    'bower': './vendor/bower_components/',
    'node': './node_modules/',
}
var libs = {
    'bootstrap': paths.node + 'bootstrap-sass/assets/',
    'isotope': paths.bower + 'isotope/dist/',
    'superslides': paths.bower + 'superslides/dist/',
    'chartjs': paths.bower + 'Chart.js/',
    'greensock': paths.bower + 'gsap/src/uncompressed/'
}

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./resources/views/static/*.php')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/'));
});

elixir(function(mix) {
    mix.sass([libs.superslides + 'stylesheets/superslides.css', 'app.scss'], 'public/css/app.min.css')
        .copy(libs.bootstrap + 'fonts/bootstrap/**', 'public/fonts')
        .scripts(
            [
                libs.superslides + 'jquery.superslides.js',
                libs.isotope + 'isotope.pkgd.js',
                libs.chartjs + 'Chart.js',
                libs.greensock + 'TweenLite.js',
                libs.greensock + 'easing/EasePack.js',
                libs.greensock + 'plugins/ScrollToPlugin.js',
                './resources/assets/js/app.js'
            ],
            'public/js/app.min.js',
            './'
        )
       .task('minify-html');
});
