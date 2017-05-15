var gulp = require("gulp");
var concat = require('gulp-concat');
var markdownpdf = require("markdown-pdf"),
    fs = require("fs")
var options = {
    cssPath: './../../css/john.css'
}


// fs.createReadStream("bootstrap.md")
//     .pipe(markdownpdf(options))
//     .pipe(fs.createWriteStream("output/document.pdf"))

// --- OR ---

// markdownpdf(options).from("edit.md").to("output/document.pdf", function() {
//     console.log("Done")
// })

gulp.task('markdownpdf', function() {
    gulp.src('*.md')
        //.pipe(concat('demo-all.md'))
        .pipe(markdownpdf())
        .pipe(gulp.dest('demo-all'))

});




gulp.task('default', function() {
    markdownpdf(options).from("bootstrap.md").to("output/document.pdf", function() {
        console.log("Done")
    })
});