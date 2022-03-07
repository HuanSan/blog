(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{453:function(t,v,_){"use strict";_.r(v);var e=_(24),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"vue源码-编译器之生成渲染函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue源码-编译器之生成渲染函数"}},[t._v("#")]),t._v(" vue源码 - 编译器之生成渲染函数")]),t._v(" "),_("p",[t._v("这篇文章是 Vue 编译器的最后一部分")]),t._v(" "),_("p",[t._v("从 HTML 模版字符串开始，解析所有标签以及标签上的各个属性，得到 AST 语法树，然后基于 AST 语法树进行静态标记，首先标记每个节点是否为静态静态，然后进一步标记出静态根节点。这样在后续的更新中就可以跳过这些静态根节点的更新，从而提高性能。\n这最后一部分讲的是如何从 AST 生成渲染函数。")]),t._v(" "),_("p",[t._v("目标：深入理解渲染函数的生成过程，理解编译器是如何将 AST 变成运行时的代码，也就是我们写的类 html 模版最终变成了什么？")]),t._v(" "),_("p",[t._v("其余章节更新中...")]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("ol",[_("li",[t._v("详细说一下渲染函数的生成过程")])]),t._v(" "),_("p",[t._v("大家一说到渲染函数，基本上说的就是 render 函数，其实编译器生成的渲染有两类：")]),t._v(" "),_("ul",[_("li",[t._v("第一类就是一个 render 函数，负责生成动态节点的 vnode")]),t._v(" "),_("li",[t._v("第二类是放在一个叫 staticRenderFns 数组中的静态渲染函数，这些函数负责生成静态节点的 vnode")])]),t._v(" "),_("p",[t._v("渲染函数生成的过程，其实就是在遍历 AST 节点，通过递归的方式，处理每个节点，最后生成形如：_c(tag, attr, children, normalizationType) 的结果。tag 是标签名，attr 是属性对象，children 是子节点组成的数组，其中每个元素的格式都是 _c(tag, attr, children, normalizationTYpe) 的形式，normalization 表示节点的规范化类型，是一个数字 0、1、2，不重要。")]),t._v(" "),_("p",[t._v("在处理 AST 节点过程中需要大家重点关注也是面试中常见的问题有：")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("静态节点是怎么处理的")])]),t._v(" "),_("p",[t._v("静态节点的处理分为两步：")]),t._v(" "),_("ul",[_("li",[t._v("将生成静态节点 vnode 函数放到 staticRenderFns 数组中")]),t._v(" "),_("li",[t._v("返回一个 _m(idx) 的可执行函数，意思是执行 staticRenderFns 数组中下标为 idx 的函数，生成静态节点的 vnode")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("v-once、v-if、v-for、组件 等都是怎么处理的")])]),t._v(" "),_("ul",[_("li",[t._v("单纯的 v-once 节点处理方式和静态节点一致")]),t._v(" "),_("li",[t._v("v-if 节点的处理结果是一个三元表达式")]),t._v(" "),_("li",[t._v("v-for 节点的处理结果是可执行的 _l 函数，该函数负责生成 v-for 节点的 vnode")]),t._v(" "),_("li",[t._v("组件的处理结果和普通元素一样，得到的是形如 _c(compName) 的可执行代码，生成组件的 vnode")])]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("p",[t._v("https://juejin.cn/post/6961545472204865572")])])}),[],!1,null,null,null);v.default=a.exports}}]);