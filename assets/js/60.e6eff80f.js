(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{342:function(s,t,a){"use strict";a.r(t);var n=a(10),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ubuntu设置代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu设置代理"}},[s._v("#")]),s._v(" ubuntu设置代理")]),s._v(" "),t("h2",{attrs:{id:"_1、gui设置方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、gui设置方式"}},[s._v("#")]),s._v(" 1、GUI设置方式")]),s._v(" "),t("p",[t("code",[s._v("设置 > 网络 > 网络代理 > 手动（Settings > Network > Network Proxy > Manual）")])]),s._v(" "),t("p",[s._v("测试方式：打开浏览器访问 google.com 即可")]),s._v(" "),t("h2",{attrs:{id:"_2、apt包设置代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、apt包设置代理"}},[s._v("#")]),s._v(" 2、apt包设置代理")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/apt/apt.conf.d/80proxy\n\nAcquire::http:proxy "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://192.168.0.101:8080"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nAcquire::https:proxy "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://192.168.0.101:8080"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nAcquire::ftp:proxy "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ftp://192.168.0.101:8080"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_3、wget-及命令行设置代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、wget-及命令行设置代理"}},[s._v("#")]),s._v(" 3、wget 及命令行设置代理")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("use_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.101:8080\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.101:8080\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ftp_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.101:8080\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" www.google.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);