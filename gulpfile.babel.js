import gulp from 'gulp';
import concat from 'gulp-concat';
import wrap from 'gulp-wrap';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import gulpif from 'gulp-if';
import sass from 'gulp-sass';
import ngAnnotate from 'gulp-ng-annotate';
import templateCache from 'gulp-angular-templatecache';
import swPrecache from 'sw-precache';
import server from 'browser-sync';
import yargs from 'yargs';
import del from 'del';
import path from 'path';
import child from 'child_process';

const exec = child.exec;
const argv = yargs.argv;
const root = 'src/';
const paths = {
  dist: './dist/',
  scripts: [`${root}/app/**/*.js`, `!${root}/app/**/*.spec.js`],
  tests: `${root}/app/**/*.spec.js`,
  styles: `${root}/sass/*.scss`,
  templates: `${root}/app/**/*.html`,
  modules: [
    'angular/angular.js',
    'angular-ui-router/release/angular-ui-router.js',
    'firebase/firebase.js',
    'angularfire/dist/angularfire.js',
    'angular-loading-bar/build/loading-bar.min.js',
  ],
  static: [
    `${root}/index.html`,
    `${root}/manifest.json`,
    `${root}/fonts/**/*`,
    `${root}/img/**/*`,
  ],
};

server.create();

function clean(cb) {
  return del(`${paths.dist}**/*`, cb);
}

function copy() {
  return gulp.src(paths.static, {
    base: 'src',
  }).pipe(gulp.dest(paths.dist));
}

const prep = gulp.series(clean, copy);

function styles() {
  return gulp.src(paths.styles)
  .pipe(sass({
    outputStyle: 'compressed',
  }))
  .pipe(gulp.dest(`${paths.dist}css/`));
}

function templates() {
  return gulp.src(paths.templates)
    .pipe(htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(templateCache({
      root: 'app',
      standalone: true,
      transformUrl: url => url.replace(path.dirname(url), '.'),
    }))
    .pipe(gulp.dest('./'));
}

function modules() {
  return gulp.src(paths.modules.map(item => `node_modules/${item}`))
    .pipe(concat('vendor.js'))
    .pipe(gulpif(argv.deploy, uglify()))
    .pipe(gulp.dest(`${paths.dist}js/`));
}

function components() {
  return gulp.src([
    `!${root}/app/**/*.spec.js`,
    `${root}/app/**/*.module.js`,
    ...paths.scripts,
    './templates.js',
  ]).pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(gulpif(argv.deploy, uglify()))
    .pipe(gulp.dest(`${paths.dist}js/`));
}

const scripts = gulp.series(templates, modules, components);

function serve() {
  server.init({
    files: [`${paths.dist}/**`],
    port: 4000,
    server: {
      baseDir: paths.dist,
    },
  });
}

function watch() {
  gulp.watch([paths.scripts, paths.templates], gulp.parallel(scripts));
  gulp.watch(paths.styles, gulp.parallel(styles));
}

const initialize = gulp.parallel(serve, watch);

function firebase(cb) {
  return exec('firebase deploy', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

const deploy = gulp.series(styles, scripts, firebase);

function precache(cb) {
  swPrecache.write(path.join(`${paths.dist}`, 'service-worker.js'), {
    staticFileGlobs: [
      `${paths.dist}/index.html`,
      `${paths.dist}/css/*`,
      `${paths.dist}/js/*`,
      `${paths.dist}/fonts/*`,
      `${paths.dist}/img/*`,
    ],
    stripPrefix: `${paths.dist}`,
  }, cb);
}

gulp.task('default', gulp.series(prep, gulp.parallel(styles, scripts), precache, initialize));
gulp.task('production', gulp.series(prep, deploy));
