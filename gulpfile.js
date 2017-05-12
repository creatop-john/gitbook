var gulp = require("gulp");
var markdownpdf = require("markdown-pdf"),
    fs = require("fs")

fs.createReadStream("bootstrap.md")
    .pipe(markdownpdf())
    .pipe(fs.createWriteStream("output/document.pdf"))

// --- OR ---

// markdownpdf().from("edit.md").to("output/document.pdf", function() {
//     console.log("Done")
// })


var options = {
    cssPath: 'css/john.css'
}


gulp.task('default', function() {
    markdownpdf(options).from("bootstrap.md").to("output/document.pdf", function() {
        console.log("Done")
    })
});