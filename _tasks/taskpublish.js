"use strict";
const del = require('del');
module.exports = function(gulp, plugins){
    gulp.task('plugins', function(){
        console.log(plugins);
    });


    gulp.task('html', ['del_dist'], function(){
        gulp.src('src/html/*.html')
            // .pipe(plugins.htmlMinify())
            .pipe(plugins.useref())
            // .pipe(plugins.revAll.revision())
            // .pipe(plugins.revReplace())
            .pipe(gulp.dest('dist/html'));
    });

    gulp.task('htmlone', function() {
        gulp.src(['src/**/barchart.html'])
            .pipe(plugins.htmlone())
            .pipe(gulp.dest('./dest'));
    });

    gulp.task('css', function(){
        gulp.src(['src/css/reset.css','src/css/*.css'])
            .pipe(plugins.concat('page.css'))
            .pipe(plugins.csso())
            .pipe(plugins.rev())
            .pipe(gulp.dest('dist'));
    });

    gulp.task('inline-resource', function(){
        gulp.src('src/html/*.html')
            .pipe(plugins.inlineSource({compress: false}))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('del_dist', function(){
        del(['dist/**/*']);
    });

    /**
     * [构建用于线上访问的代码]
     * @return [type] [description]
     */
    gulp.task('build_dist', function(){
        console.log('test');
    });
};
