(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{387:function(s,n,a){"use strict";a.r(n);var t=a(10),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"启动-vue-站点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动-vue-站点"}},[s._v("#")]),s._v(" 启动 vue 站点")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n        listen       8888;#默认端口是80，如果端口没被占用可以不用修改\n        server_name  localhost;\n\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n        root        E:/vue/my_project/dist;#vue项目的打包后的dist\n\n        location / {\n           root /ddm/list;\n            try_files $uri $uri/ @router;#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404\n            index  index.html index.htm;\n        }\n\n        #子目录\n        location /xxx {\n            alias /ddm/list;\n            try_files $uri $uri/ /xxx/index.html;\n            index  index.html index.htm;\n        }\n        #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件\n        #因此需要rewrite到index.html中，然后交给路由在处理请求资源\n        location @router {\n            rewrite ^.*$ /index.html last;\n        }\n        #.......其他部分省略\n  }\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);