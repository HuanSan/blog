(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{336:function(t,s,e){"use strict";e.r(s);var a=e(10),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"curl-命令详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curl-命令详解"}},[t._v("#")]),t._v(" curl 命令详解")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("curl [option] [url]")])]),t._v(" "),s("h2",{attrs:{id:"_1、常见参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、常见参数"}},[t._v("#")]),t._v(" 1、常见参数")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("-A/--user-agent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              设置用户代理发送给服务器\n-b/--cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("string/file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    cookie字符串或文件读取位置\n-c/--cookie-jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                    操作结束后把cookie写入到这个文件中\n-C/--continue-at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("            断点续转\n-D/--dump-header "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              把header信息写入到该文件中\n-e/--referer                                  来源网址\n-f/--fail                                          连接失败时不显示http错误\n-o/--output                                  把输出写到该文件中\n-O/--remote-name                      把输出写到该文件中，保留远程文件的文件名\n-r/--range "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("range"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                      检索来自HTTP/1.1或FTP服务器字节范围\n-s/--silent                                    静音模式。不输出任何东西\n-T/--upload-file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                  上传文件\n-u/--user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("      设置服务器的用户和密码\n-w/--write-out "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("format"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                什么输出完成后\n-x/--proxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              在给定的端口上使用HTTP代理\n-"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#/--progress-bar                        进度条显示当前的传送状态")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h2",{attrs:{id:"_2、常见用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、常见用法"}},[t._v("#")]),t._v(" 2、常见用法")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问网页")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://sanyer.top\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存为html文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://sanyer.top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" sanyer.html\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试网页返回值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v(" %"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("http_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" sanyer.top\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载网页")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" sanyer.html https://sanyer.top\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" test.jpg http:www.linux.com/test.jpg\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存网页中的文件（url要具体到某个文件）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" https://sanyer.top/hello.sh\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 循环下载，这样就会把test1，test2，test3 全部保存下来")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" https://sanyer.top/test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".jpg\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载重命名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" https://sanyer.top/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hello,world"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".jpg\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1_#2.JPG https://sanyer.top/{hello,world}/test[1-3].jpg")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分块下载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("-100 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" dodo1_part1.JPG http://www.linux.com/dodo1.JPG\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("-200 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" dodo1_part2.JPG http://www.linux.com/dodo1.JPG\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("- "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" dodo1_part3.JPG http://www.linux.com/dodo1.JPG\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" dodo1_part* "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" dodo1.JPG\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过ftp下载文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" 用户名:密码 ftp://www.linux.com/dodo1.JPG\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" ftp://用户名:密码@www.linux.com/dodo1.JPG\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示下载进度条")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -O http://www.linux.com/dodo1.JPG")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不会显示下载进度信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" http://www.linux.com/dodo1.JPG\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 断点续传")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" http://www.linux.com/dodo1.JPG\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-T")]),t._v(" dodo1.JPG "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" 用户名:密码 ftp://www.linux.com/img/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定 proxy 服务器以及其端口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-x")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".100.100:1080 https://www.google.com\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存 cookie 信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" cookie.txt https://sanyer.top\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存 header 信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" header.txt https://sanyer.top\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 cookie 访问网站")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" cookie.txt https://sanyer.top\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置设置用户代理访问网站")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.0)"')]),t._v(" https://sanyer.top\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 伪造 referer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sanyer.top"')]),t._v(" https://web.sanyer.top\n\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br"),s("span",{staticClass:"line-number"},[t._v("64")]),s("br"),s("span",{staticClass:"line-number"},[t._v("65")]),s("br"),s("span",{staticClass:"line-number"},[t._v("66")]),s("br")])]),s("h2",{attrs:{id:"_3、显示抓取错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、显示抓取错误"}},[t._v("#")]),t._v(" 3、显示抓取错误")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" https://web.sanyer.top\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("-w 指定输出内容")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("url_effective")]),t._v(" "),s("td",[t._v("最终获取的url地址，尤其是当你指定给curl的地址存在301跳转，且通过-L继续追踪的情形。")])]),t._v(" "),s("tr",[s("td",[t._v("http_code")]),t._v(" "),s("td",[t._v("http状态码，如200成功,301转向,404未找到,500服务器错误等。(The numerical response code that was found in the last retrieved HTTP(S) or FTP(s) transfer. In 7.18.2 the alias response_code was added to show the same info.)")])]),t._v(" "),s("tr",[s("td",[t._v("http_connect")]),t._v(" "),s("td",[t._v("The numerical code that was found in the last response (from a proxy) to a curl CONNECT request. (Added in 7.12.4)")])]),t._v(" "),s("tr",[s("td",[t._v("time_total")]),t._v(" "),s("td",[t._v("总时间，按秒计。精确到小数点后三位。 （The total time, in seconds, that the full operation lasted. The time will be displayed with millisecond resolution.）")])]),t._v(" "),s("tr",[s("td",[t._v("time_namelookup")]),t._v(" "),s("td",[t._v("DNS解析时间,从请求开始到DNS解析完毕所用时间。(The time, in seconds, it took from the start until the name resolving was completed.)")])]),t._v(" "),s("tr",[s("td",[t._v("time_connect")]),t._v(" "),s("td",[t._v("连接时间,从开始到建立TCP连接完成所用时间,包括前边DNS解析时间，如果需要单纯的得到连接时间，用这个time_connect时间减去前边time_namelookup时间。以下同理，不再赘述。(The time, in seconds, it took from the start until the TCP connect to the remote host (or proxy) was completed.)")])]),t._v(" "),s("tr",[s("td",[t._v("time_appconnect")]),t._v(" "),s("td",[t._v("连接建立完成时间，如SSL/SSH等建立连接或者完成三次握手时间。(The time, in seconds, it took from the start until the SSL/SSH/etc connect/handshake to the remote host was completed. (Added in 7.19.0))")])]),t._v(" "),s("tr",[s("td",[t._v("time_pretransfer")]),t._v(" "),s("td",[t._v("从开始到准备传输的时间。(The time, in seconds, it took from the start until the file transfer was just about to begin. This includes all pre-transfer commands and negotiations that are specific to the particular protocol(s) involved.)")])]),t._v(" "),s("tr",[s("td",[t._v("time_redirect")]),t._v(" "),s("td",[t._v("重定向时间，包括到最后一次传输前的几次重定向的DNS解析，连接，预传输，传输时间。(The time, in seconds, it took for all redirection steps include name lookup, connect, pretransfer and transfer before the final transaction was started. time_redirect shows the complete execution time for multiple redirections. (Added in 7.12.3))")])]),t._v(" "),s("tr",[s("td",[t._v("time_starttransfer")]),t._v(" "),s("td",[t._v("开始传输时间。在发出请求之后，Web 服务器返回数据的第一个字节所用的时间(The time, in seconds, it took from the start until the first byte was just about to be transferred. This includes time_pretransfer and also the time the server needed to calculate the result.)")])]),t._v(" "),s("tr",[s("td",[t._v("size_download")]),t._v(" "),s("td",[t._v("下载大小。(The total amount of bytes that were downloaded.)")])]),t._v(" "),s("tr",[s("td",[t._v("size_upload")]),t._v(" "),s("td",[t._v("上传大小。(The total amount of bytes that were uploaded.)")])]),t._v(" "),s("tr",[s("td",[t._v("size_header")]),t._v(" "),s("td",[t._v("下载的header的大小(The total amount of bytes of the downloaded headers.)")])]),t._v(" "),s("tr",[s("td",[t._v("size_request")]),t._v(" "),s("td",[t._v("请求的大小。(The total amount of bytes that were sent in the HTTP request.)")])]),t._v(" "),s("tr",[s("td",[t._v("speed_download")]),t._v(" "),s("td",[t._v("下载速度，单位-字节每秒。(The average download speed that curl measured for the complete download. Bytes per second.)")])]),t._v(" "),s("tr",[s("td",[t._v("speed_upload")]),t._v(" "),s("td",[t._v("上传速度,单位-字节每秒。(The average upload speed that curl measured for the complete upload. Bytes per second.)")])]),t._v(" "),s("tr",[s("td",[t._v("content_type")]),t._v(" "),s("td",[t._v("就是content-Type，不用多说了，这是一个访问我博客首页返回的结果示例(text/html; charset=UTF-8)；(The Content-Type of the requested document, if there was any.)")])]),t._v(" "),s("tr",[s("td",[t._v("num_connects")]),t._v(" "),s("td",[t._v("Number of new connects made in the recent transfer. (Added in 7.12.3)")])]),t._v(" "),s("tr",[s("td",[t._v("num_redirects")]),t._v(" "),s("td",[t._v("Number of redirects that were followed in the request. (Added in 7.12.3)")])]),t._v(" "),s("tr",[s("td",[t._v("redirect_url")]),t._v(" "),s("td",[t._v("When a HTTP request was made without -L to follow redirects, this variable will show the actual URL a redirect would take you to. (Added in 7.18.2)")])]),t._v(" "),s("tr",[s("td",[t._v("ftp_entry_path")]),t._v(" "),s("td",[t._v("The initial path libcurl ended up in when logging on to the remote FTP server. (Added in 7.15.4)")])]),t._v(" "),s("tr",[s("td",[t._v("ssl_verify_result")]),t._v(" "),s("td",[t._v("ssl认证结果，返回0表示认证成功。( The result of the SSL peer certificate verification that was requested. 0 means the verification was successful. (Added in 7.19.0))")])])])]),t._v(" "),s("h2",{attrs:{id:"_4、其他参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、其他参数"}},[t._v("#")]),t._v(" 4、其他参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-a/--append")]),t._v(" "),s("td",[t._v("上传文件时，附加到目标文件")])]),t._v(" "),s("tr",[s("td",[t._v("--anyauth")]),t._v(" "),s("td",[t._v("可以使用“任何”身份验证方法")])]),t._v(" "),s("tr",[s("td",[t._v("--basic")]),t._v(" "),s("td",[t._v("使用HTTP基本验证")])]),t._v(" "),s("tr",[s("td",[t._v("-B/--use-ascii")]),t._v(" "),s("td",[t._v("使用ASCII文本传输")])]),t._v(" "),s("tr",[s("td",[t._v("-d/--data <data>")]),t._v(" "),s("td",[t._v("HTTP POST方式传送数据")])]),t._v(" "),s("tr",[s("td",[t._v("--data-ascii <data>")]),t._v(" "),s("td",[t._v("以ascii的方式post数据")])]),t._v(" "),s("tr",[s("td",[t._v("--data-binary <data>")]),t._v(" "),s("td",[t._v("以二进制的方式post数据")])]),t._v(" "),s("tr",[s("td",[t._v("--negotiate")]),t._v(" "),s("td",[t._v("使用HTTP身份验证")])]),t._v(" "),s("tr",[s("td",[t._v("--digest")]),t._v(" "),s("td",[t._v("使用数字身份验证")])]),t._v(" "),s("tr",[s("td",[t._v("--disable-eprt")]),t._v(" "),s("td",[t._v("禁止使用EPRT或LPRT")])]),t._v(" "),s("tr",[s("td",[t._v("--disable-epsv")]),t._v(" "),s("td",[t._v("禁止使用EPSV")])]),t._v(" "),s("tr",[s("td",[t._v("--egd-file <file>")]),t._v(" "),s("td",[t._v("为随机数据(SSL)设置EGD socket路径")])]),t._v(" "),s("tr",[s("td",[t._v("--tcp-nodelay")]),t._v(" "),s("td",[t._v("使用TCP_NODELAY选项")])]),t._v(" "),s("tr",[s("td",[t._v("-E/--cert <cert[:passwd]>")]),t._v(" "),s("td",[t._v("客户端证书文件和密码 (SSL)")])]),t._v(" "),s("tr",[s("td",[t._v("--cert-type <type>")]),t._v(" "),s("td",[t._v("证书文件类型 (DER/PEM/ENG) (SSL)")])]),t._v(" "),s("tr",[s("td",[t._v("--key <key>")]),t._v(" "),s("td",[t._v("私钥文件名 (SSL)")])]),t._v(" "),s("tr",[s("td",[t._v("--key-type <type>")]),t._v(" "),s("td",[t._v("私钥文件类型 (DER/PEM/ENG) (SSL)")])]),t._v(" "),s("tr",[s("td",[t._v("--pass  <pass>")]),t._v(" "),s("td",[t._v("私钥密码 (SSL)")])]),t._v(" "),s("tr",[s("td",[t._v("--engine <eng>")]),t._v(" "),s("td",[t._v('加密引擎使用 (SSL). "--engine list" for list')])]),t._v(" "),s("tr",[s("td",[t._v("--cacert <file>")]),t._v(" "),s("td",[t._v("CA证书 (SSL)")])]),t._v(" "),s("tr",[s("td",[t._v("--capath <directory>")]),t._v(" "),s("td",[t._v("CA目   (made using c_rehash) to verify peer against (SSL)")])]),t._v(" "),s("tr",[s("td",[t._v("--ciphers <list>")]),t._v(" "),s("td",[t._v("SSL密码")])]),t._v(" "),s("tr",[s("td",[t._v("--compressed")]),t._v(" "),s("td",[t._v("要求返回是压缩的形势 (using deflate or gzip)")])]),t._v(" "),s("tr",[s("td",[t._v("--connect-timeout <seconds>")]),t._v(" "),s("td",[t._v("设置最大请求时间")])]),t._v(" "),s("tr",[s("td",[t._v("--create-dirs")]),t._v(" "),s("td",[t._v("建立本地目录的目录层次结构")])]),t._v(" "),s("tr",[s("td",[t._v("--crlf")]),t._v(" "),s("td",[t._v("上传是把LF转变成CRLF")])]),t._v(" "),s("tr",[s("td",[t._v("--ftp-create-dirs")]),t._v(" "),s("td",[t._v("如果远程目录不存在，创建远程目录")])]),t._v(" "),s("tr",[s("td",[t._v("--ftp-method [multicwd/nocwd/singlecwd]")]),t._v(" "),s("td",[t._v("控制CWD的使用")])]),t._v(" "),s("tr",[s("td",[t._v("--ftp-pasv")]),t._v(" "),s("td",[t._v("使用 PASV/EPSV 代替端口")])]),t._v(" "),s("tr",[s("td",[t._v("--ftp-skip-pasv-ip")]),t._v(" "),s("td",[t._v("使用PASV的时候,忽略该IP地址")])]),t._v(" "),s("tr",[s("td",[t._v("--ftp-ssl")]),t._v(" "),s("td",[t._v("尝试用 SSL/TLS 来进行ftp数据传输")])]),t._v(" "),s("tr",[s("td",[t._v("--ftp-ssl-reqd")]),t._v(" "),s("td",[t._v("要求用 SSL/TLS 来进行ftp数据传输")])]),t._v(" "),s("tr",[s("td",[t._v("-F/--form <name=content>")]),t._v(" "),s("td",[t._v("模拟http表单提交数据")])]),t._v(" "),s("tr",[s("td",[t._v("-form-string <name=string>")]),t._v(" "),s("td",[t._v("模拟http表单提交数据")])]),t._v(" "),s("tr",[s("td",[t._v("-g/--globoff")]),t._v(" "),s("td",[t._v("禁用网址序列和范围使用{}和[]")])]),t._v(" "),s("tr",[s("td",[t._v("-G/--get")]),t._v(" "),s("td",[t._v("以get的方式来发送数据")])]),t._v(" "),s("tr",[s("td",[t._v("-h/--help")]),t._v(" "),s("td",[t._v("帮助")])]),t._v(" "),s("tr",[s("td",[t._v("-H/--header <line>")]),t._v(" "),s("td",[t._v("自定义头信息传递给服务器")])]),t._v(" "),s("tr",[s("td",[t._v("--ignore-content-length")]),t._v(" "),s("td",[t._v("忽略的HTTP头信息的长度")])]),t._v(" "),s("tr",[s("td",[t._v("-i/--include")]),t._v(" "),s("td",[t._v("输出时包括protocol头信息")])]),t._v(" "),s("tr",[s("td",[t._v("-I/--head")]),t._v(" "),s("td",[t._v("只显示文档信息")])]),t._v(" "),s("tr",[s("td",[t._v("-j/--junk-session-cookies")]),t._v(" "),s("td",[t._v("读取文件时忽略session cookie")])]),t._v(" "),s("tr",[s("td",[t._v("--interface <interface>")]),t._v(" "),s("td",[t._v("使用指定网络接口/地址")])]),t._v(" "),s("tr",[s("td",[t._v("--krb4 <level>")]),t._v(" "),s("td",[t._v("使用指定安全级别的krb4")])]),t._v(" "),s("tr",[s("td",[t._v("-k/--insecure")]),t._v(" "),s("td",[t._v("允许不使用证书到SSL站点")])]),t._v(" "),s("tr",[s("td",[t._v("-K/--config")]),t._v(" "),s("td",[t._v("指定的配置文件读取")])]),t._v(" "),s("tr",[s("td",[t._v("-l/--list-only")]),t._v(" "),s("td",[t._v("列出ftp目录下的文件名称")])]),t._v(" "),s("tr",[s("td",[t._v("--limit-rate <rate>")]),t._v(" "),s("td",[t._v("设置传输速度")])]),t._v(" "),s("tr",[s("td",[t._v("--local-port<NUM>")]),t._v(" "),s("td",[t._v("强制使用本地端口号")])]),t._v(" "),s("tr",[s("td",[t._v("-m/--max-time <seconds>")]),t._v(" "),s("td",[t._v("设置最大传输时间")])]),t._v(" "),s("tr",[s("td",[t._v("--max-redirs <num>")]),t._v(" "),s("td",[t._v("设置最大读取的目录数")])]),t._v(" "),s("tr",[s("td",[t._v("--max-filesize <bytes>")]),t._v(" "),s("td",[t._v("设置最大下载的文件总量")])]),t._v(" "),s("tr",[s("td",[t._v("-M/--manual")]),t._v(" "),s("td",[t._v("显示全手动")])]),t._v(" "),s("tr",[s("td",[t._v("-n/--netrc")]),t._v(" "),s("td",[t._v("从netrc文件中读取用户名和密码")])]),t._v(" "),s("tr",[s("td",[t._v("--netrc-optional")]),t._v(" "),s("td",[t._v("使用 .netrc 或者 URL来覆盖-n")])]),t._v(" "),s("tr",[s("td",[t._v("--ntlm")]),t._v(" "),s("td",[t._v("使用 HTTP NTLM 身份验证")])]),t._v(" "),s("tr",[s("td",[t._v("-N/--no-buffer")]),t._v(" "),s("td",[t._v("禁用缓冲输出")])]),t._v(" "),s("tr",[s("td",[t._v("-p/--proxytunnel")]),t._v(" "),s("td",[t._v("使用HTTP代理")])]),t._v(" "),s("tr",[s("td",[t._v("--proxy-anyauth")]),t._v(" "),s("td",[t._v("选择任一代理身份验证方法")])]),t._v(" "),s("tr",[s("td",[t._v("--proxy-basic")]),t._v(" "),s("td",[t._v("在代理上使用基本身份验证")])]),t._v(" "),s("tr",[s("td",[t._v("--proxy-digest")]),t._v(" "),s("td",[t._v("在代理上使用数字身份验证")])]),t._v(" "),s("tr",[s("td",[t._v("--proxy-ntlm")]),t._v(" "),s("td",[t._v("在代理上使用ntlm身份验证")])]),t._v(" "),s("tr",[s("td",[t._v("-P/--ftp-port <address>")]),t._v(" "),s("td",[t._v("使用端口地址，而不是使用PASV")])]),t._v(" "),s("tr",[s("td",[t._v("-Q/--quote <cmd>")]),t._v(" "),s("td",[t._v("文件传输前，发送命令到服务器")])]),t._v(" "),s("tr",[s("td",[t._v("--range-file")]),t._v(" "),s("td",[t._v("读取（SSL）的随机文件")])]),t._v(" "),s("tr",[s("td",[t._v("-R/--remote-time")]),t._v(" "),s("td",[t._v("在本地生成文件时，保留远程文件时间")])]),t._v(" "),s("tr",[s("td",[t._v("--retry <num>")]),t._v(" "),s("td",[t._v("传输出现问题时，重试的次数")])]),t._v(" "),s("tr",[s("td",[t._v("--retry-delay <seconds>")]),t._v(" "),s("td",[t._v("传输出现问题时，设置重试间隔时间")])]),t._v(" "),s("tr",[s("td",[t._v("--retry-max-time <seconds>")]),t._v(" "),s("td",[t._v("传输出现问题时，设置最大重试时间")])]),t._v(" "),s("tr",[s("td",[t._v("-S/--show-error")]),t._v(" "),s("td",[t._v("显示错误")])]),t._v(" "),s("tr",[s("td",[t._v("--socks4 <host[:port]>")]),t._v(" "),s("td",[t._v("用socks4代理给定主机和端口")])]),t._v(" "),s("tr",[s("td",[t._v("--socks5 <host[:port]>")]),t._v(" "),s("td",[t._v("用socks5代理给定主机和端口")])]),t._v(" "),s("tr",[s("td",[t._v("-t/--telnet-option <OPT=val>")]),t._v(" "),s("td",[t._v("Telnet选项设置")])]),t._v(" "),s("tr",[s("td",[t._v("--trace <file>")]),t._v(" "),s("td",[t._v("对指定文件进行debug")])]),t._v(" "),s("tr",[s("td",[t._v("--trace-ascii <file>")]),t._v(" "),s("td",[t._v("Like --跟踪但没有hex输出")])]),t._v(" "),s("tr",[s("td",[t._v("--trace-time")]),t._v(" "),s("td",[t._v("跟踪/详细输出时，添加时间戳")])]),t._v(" "),s("tr",[s("td",[t._v("--url <URL>")]),t._v(" "),s("td",[t._v("Spet URL to work with")])]),t._v(" "),s("tr",[s("td",[t._v("-U/--proxy-user <user[:password]>")]),t._v(" "),s("td",[t._v("设置代理用户名和密码")])]),t._v(" "),s("tr",[s("td",[t._v("-V/--version")]),t._v(" "),s("td",[t._v("显示版本信息")])]),t._v(" "),s("tr",[s("td",[t._v("-X/--request <command>")]),t._v(" "),s("td",[t._v("指定什么命令")])]),t._v(" "),s("tr",[s("td",[t._v("-y/--speed-time")]),t._v(" "),s("td",[t._v("放弃限速所要的时间。默认为30")])]),t._v(" "),s("tr",[s("td",[t._v("-Y/--speed-limit")]),t._v(" "),s("td",[t._v("停止传输速度的限制，速度时间'秒")])]),t._v(" "),s("tr",[s("td",[t._v("-z/--time-cond")]),t._v(" "),s("td",[t._v("传送时间设置")])]),t._v(" "),s("tr",[s("td",[t._v("-0/--http1.0")]),t._v(" "),s("td",[t._v("使用HTTP 1.0")])]),t._v(" "),s("tr",[s("td",[t._v("-1/--tlsv1")]),t._v(" "),s("td",[t._v("使用TLSv1（SSL）")])]),t._v(" "),s("tr",[s("td",[t._v("-2/--sslv2")]),t._v(" "),s("td",[t._v("使用SSLv2的（SSL）")])]),t._v(" "),s("tr",[s("td",[t._v("-3/--sslv3")]),t._v(" "),s("td",[t._v("使用的SSLv3（SSL）")])]),t._v(" "),s("tr",[s("td",[t._v("--3p-quote")]),t._v(" "),s("td",[t._v("like -Q for the source URL for 3rd party transfer")])]),t._v(" "),s("tr",[s("td",[t._v("--3p-url")]),t._v(" "),s("td",[t._v("使用url，进行第三方传送")])]),t._v(" "),s("tr",[s("td",[t._v("--3p-user")]),t._v(" "),s("td",[t._v("使用用户名和密码，进行第三方传送")])]),t._v(" "),s("tr",[s("td",[t._v("-4/--ipv4")]),t._v(" "),s("td",[t._v("使用IP4")])]),t._v(" "),s("tr",[s("td",[t._v("-6/--ipv6")]),t._v(" "),s("td",[t._v("使用IP6")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);