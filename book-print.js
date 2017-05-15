var markdownpdf = require("markdown-pdf")
var options = {
    paperFormat: 'A4', //A4格式
    paperOrientation: 'portrait', //横排排版
    cssPath: '../../css/john.css', //css文件的路径，相对于当前目录
    remarkable: {
        html: true, //是否允许存在 html 标签
        xhtmlOut: true, //用 '/'来关闭Single tags(<br/>),是否严格规定标签的自封闭吧！
        breaks: false, //是否将段落中的 '\n' 转换为 <br /> .
        linkify: false //是否自动转换类似URL的文本为链接
    }
}
markdownpdf(options).from("bootstrap.md").to("bootstrap.pdf", function() {
    console.log("Done")
})