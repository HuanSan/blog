(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{408:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),t("h2",{attrs:{id:"_1、创建对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建对象"}},[s._v("#")]),s._v(" 1、创建对象")]),s._v(" "),t("p",[s._v("对象可以通过对象字面量、new 关键字和 Object.create() 函数来创建。")]),s._v(" "),t("h2",{attrs:{id:"_2、原型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、原型"}},[s._v("#")]),s._v(" 2、原型")]),s._v(" "),t("p",[s._v("使用 new Object() 创建的对象继承自 Object.prototype，通过 new Array()创建的对象以 Array.prototype 为原型，")]),s._v(" "),t("h2",{attrs:{id:"_3、删除属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、删除属性"}},[s._v("#")]),s._v(" 3、删除属性")]),s._v(" "),t("p",[s._v("用于从对象中移除属性。")]),s._v(" "),t("p",[s._v("delete 操作符只删除自有属性，不删除继承属性（要删除继承属性，必须从定义属性的原型对象上删除。")]),s._v(" "),t("p",[s._v("如果 delete 操作成功或没有影响（如删除不存在的属性），则 delete 表达式求值为 true。对非属性访问表达式（无意义地）使用 delete，同样也会求值为 true")]),s._v(" "),t("p",[s._v("delete 不会删除 configurable 特性为 false 的属性。")]),s._v(" "),t("h2",{attrs:{id:"_4、测试属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、测试属性"}},[s._v("#")]),s._v(" 4、测试属性")]),s._v(" "),t("p",[s._v("使用 in 操作符，或者 hasOwnProperty()、propertyIsEnumerable()方法，或者直接查询相应属性。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'y'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'toString'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象的 hasOwnProperty() 方法用于测试对象是否有给定名字的属性。对继承的属性，它返回false")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasOwnProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasOwnProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasOwnProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'toString'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false 自有属性返回 false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// propertyIsEnumerable() 方法细化了 hasOwnProperty() 测试。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果传入的命名属性是自有属性且这个属性的 enumerable 特性为 true，这个方法会返回 true。")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("propertyIsEnumerable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("propertyIsEnumerable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'toString'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接判断")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("toString "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// in 可以区分不存在的属性和存在但被设置为 undefined 的属性")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" o "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把属性显式设置为 undefined")]),s._v("\no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => false")]),s._v("\no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" o "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"y"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" o "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除属性 x")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" o "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);