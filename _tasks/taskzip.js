const del = require('del');

module.exports = function(gulp, plugins){

    function delzip(callback){
        del(['website.zip', 'website/**']).then(callback && callback());
    }

    /**
     * [打包成一个zip压缩包]
     * @return [type] [description]
     */
    gulp.task('zip', function(){
        delzip(function(){
            gulp.src('dist/**/*')
                .pipe(plugins.zip('website.zip'))
                .pipe(gulp.dest('./'));
        });
    })
}
