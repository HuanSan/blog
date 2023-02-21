(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{479:function(s,t,a){"use strict";a.r(t);var n=a(32),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-标准库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-标准库"}},[s._v("#")]),s._v(" JavaScript 标准库")]),s._v(" "),a("h2",{attrs:{id:"_1、集合与映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、集合与映射"}},[s._v("#")]),s._v(" 1、集合与映射")]),s._v(" "),a("p",[s._v("JavaScript 的 Object 类型是一种万能数据结构，可用于把字符串（对象的属性名）映射为任意值。当被映射的值是固定值（如 true）时，对象实际上是一组字符串。")]),s._v(" "),a("p",[s._v("对象在 JavaScript 编程中经常被用作映射和集合，但却要受到对字符串约束的限制。另外，由于对象正常都会继承带名字（如 toString）的属性，而这些属性明显也不是为映射和集合而准备的。")]),s._v(" "),a("p",[s._v("为此，ES6 新增了真正的 Set 和 Map 类")]),s._v(" "),a("h3",{attrs:{id:"_1-1-set-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-set-类"}},[s._v("#")]),s._v(" 1.1 Set 类")]),s._v(" "),a("p",[s._v("集合就是一组值，与数组类似。但与数组不同的是，集合没有索引或顺序，也不允许重复：一个值要么是集合的成员，要么不是；这个值不可能在一个集合中出现多次。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 复制了 m 元素的集合")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("helloworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => helowrd")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("add() 方法接收一个参数，如果传入一个数组，它会把数组而不是数组的元素添加到集合中。add()始终返回调用它的集合，因此如果想给集合添加多个值，可以连缀调用 add()，如 "),a("code",[s._v("s.add('a').add('b').add('c');")]),s._v("。")]),s._v(" "),a("li",[s._v("delete() 方法一次也只删除一个集合元素。返回一个布尔值，如果删除的元素是集合中的元素，则返回 true；否则返回 false")]),s._v(" "),a("li",[s._v("集合成员是根据严格相等来判断是否重复的，如果需要删除集合中的数组或对象，必须传入该数组或对象的引用。")]),s._v(" "),a("li",[s._v("has() 方法判断元素是否在集合中")]),s._v(" "),a("li",[s._v("Set 类是可迭代的，可以使用 for/of 循环枚举集合的所有元素")]),s._v(" "),a("li",[s._v("forEach() 方法把第一个元素和第二个元素作为回调函数的两个参数")]),s._v(" "),a("li",[s._v("size 集合元素数量")]),s._v(" "),a("li",[s._v("clear() 方法清空集合")])]),s._v(" "),a("h3",{attrs:{id:"_1-2-map-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-map-类"}},[s._v("#")]),s._v(" 1.2 Map 类")]),s._v(" "),a("p",[s._v("Map 对象表示一组被称为键的值，其中每个键都关联着（或映射到）另一个值。")]),s._v(" "),a("p",[s._v("映射类似数组，只不过它并不局限于用连续的整数作为键，而是允许使用"),a("strong",[s._v("任何值")]),s._v("作为“索引”。")]),s._v(" "),a("p",[s._v("Map()构造函数的可选参数应该是一个可迭代对象，产出值为包含两个元素的数组[key, value]。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'two'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("get() 方法根据键名获取值")]),s._v(" "),a("li",[s._v("set() 方法添加新的键/值对")]),s._v(" "),a("li",[s._v("has() 方法查找映射中是否存在指定键")]),s._v(" "),a("li",[s._v("remove() 方法从映射中删除指定键")]),s._v(" "),a("li",[s._v("clear() 方法清空映射")]),s._v(" "),a("li",[s._v("forEach() 方法先传映射的值，后传映射的键")])]),s._v(" "),a("h3",{attrs:{id:"_1-3-weakmap-和-weakset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-weakmap-和-weakset"}},[s._v("#")]),s._v(" 1.3 WeakMap 和 WeakSet")]),s._v(" "),a("p",[s._v("WeakMap（弱映射）类是 Map 类的一个变体（不是子类），它不会阻止键值被当作垃圾收集。")]),s._v(" "),a("p",[s._v("垃圾收集是 JavaScript 解释器收回内存空间的过程，凡是已经“无法访问”因而无法被程序使用的对象，都会被当作垃圾收回。")]),s._v(" "),a("ul",[a("li",[s._v("WeakMap 的键必须是对象或数组，原始值不受垃圾收集控制，不能作为键。")]),s._v(" "),a("li",[s._v("WeakMap 不是可迭代对象，所以没有定义 keys()、values()和 forEach()方法。")]),s._v(" "),a("li",[s._v("WeakMap 没有实现 size 属性，因为弱映射的大小可能随着对象被当作垃圾收集而随时改变。")])]),s._v(" "),a("p",[s._v("WeakMap 的主要用途是实现值与对象的关联而不导致内存泄漏。")]),s._v(" "),a("p",[s._v("WeakSet（弱集合）实现了一组对象，不会妨碍这些对象被作为垃圾收集。")]),s._v(" "),a("ul",[a("li",[s._v("WeakSet 不允许原始值作为成员")]),s._v(" "),a("li",[s._v("WeakSet 只实现了 add()、has()和 delete()方法，而且不可迭代。")]),s._v(" "),a("li",[s._v("WeakSet 没有 size 属性。")])]),s._v(" "),a("p",[s._v("WeakSet 的使用场景不多，其主要应用场景与 WeakMap 类似。例如，如果你想把一个对象标记（或标注）为具有特殊属性或类型，可以把它添加到一个 WeakSet 中。然后，无论在哪里，只要想检查该属性或类型，就可以测试该 WeakSet 是否包含相应成员。如果使用常规集合来保存这些被标记的对象，就会妨碍它们被当作垃圾收集，而使用 WeakSet 则没有这个问题。")]),s._v(" "),a("h2",{attrs:{id:"_2、定型数组与二进制数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、定型数组与二进制数据"}},[s._v("#")]),s._v(" 2、定型数组与二进制数据")]),s._v(" "),a("ul",[a("li",[s._v("定型数组的元素全部都是数值。与常规 JavaScript 数组不同，定型数组允许指定存储在数组中的数值的类型（有符号和无符号数组以及 IEEE-754 浮点数）和大小（8 位到 64 位）。")]),s._v(" "),a("li",[s._v("创建定型数组时必须指定长度，且该长度不能再改变。")]),s._v(" "),a("li",[s._v("定型数组的元素在创建时始终都会被初始化为 0。")])]),s._v(" "),a("p",[s._v("Uint8ClampedArray 是 Uint8Array 的一种特殊变体。这两种类型都保存无符号字节，可表示的数值范围是 0 到 255。对 Uint8Array 来说，如果要存储到数组元素的值大于 255 或小于 0，这个值会“翻转”为其他值。")]),s._v(" "),a("p",[s._v("定型数组使用底层硬件的原生字节序。在小端系统中，ArrayBuffer 中的字节排列顺序为低字节到高字节。在大端系统中，字节排列顺序为高字节到低字节。")]),s._v(" "),a("p",[s._v("可以使用以下代码确定底层平台的字节序：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" littleEndian "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int8Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int32Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("buffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("市面上常见的 CPU 都是小端字节序。很多网络协议及某些二进制文件格式则要求使用大端字节序。如果你的定型数组要使用来自网络或文件的数据，可以假定平台字节序与数据字节序一致。通常，在使用外部数据时，可以使用 Int8Array 和 Uint8 Array 来查看数组中的单个字节，但不应该使用字大小为多字节的其他定型数组。")]),s._v(" "),a("h2",{attrs:{id:"_3、正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、正则表达式"}},[s._v("#")]),s._v(" 3、正则表达式")]),s._v(" "),a("p",[s._v("正则表达式是一种描述文本模式的对象。JavaScript 的 RegExp 类表示正则表达式，String 和 RegExp 都定义了使用正则表达式对文本执行强大模式匹配和搜索替换功能的方法。")]),s._v(" "),a("h2",{attrs:{id:"_4、日期与时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、日期与时间"}},[s._v("#")]),s._v(" 4、日期与时间")]),s._v(" "),a("p",[s._v("Date 类是 JavaScript 中用于操作日期和时间的 API。使用 Date()构造函数可以创建一个日期对象。在不传参数的情况下，这个构造函数会返回一个表示当前日期和时间的 Date 对象")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-1-时间戳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-时间戳"}},[s._v("#")]),s._v(" 4.1 时间戳")]),s._v(" "),a("p",[s._v("JavaScript 在内部将日期表示为整数，代表自 1970 年 1 月 1 日半夜 12 点起（或之前）的毫秒数。最大支持的整数是 8 640 000 000000 000，因此 JavaScript 表示的时间不会超过 27 万年。")]),s._v(" "),a("p",[s._v("对于任何 Date 对象，getTime()方法返回这个内部值，而 setTime()方法设置这个值。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加30秒")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("毫秒值也被称为时间戳（timestamp），静态的 Date.now()方法返回当前时间的时间戳")]),s._v(" "),a("h3",{attrs:{id:"_4-2-高精度时间戳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-高精度时间戳"}},[s._v("#")]),s._v(" 4.2 高精度时间戳")]),s._v(" "),a("p",[s._v("使用 performance.now()，虽然它返回的也是以毫秒为单位的时间戳，但返回值并不是整数，包含毫秒后面的小数部分。")]),s._v(" "),a("h2",{attrs:{id:"_5、error-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、error-类"}},[s._v("#")]),s._v(" 5、Error 类")]),s._v(" "),a("p",[s._v("JavaScript 的 throw 和 catch 语句可以抛出和捕获任何 JavaScript 值，包括原始值。")]),s._v(" "),a("p",[s._v("使用 Error 类或其子类的实例作为 throw 抛出的错误。")]),s._v(" "),a("p",[s._v("使用 Error 对象的一个主要原因就是在创建 Error 对象时，该对象能够捕获 JavaScript 的栈状态，如异常未被捕获，则会显示包含错误消息的栈跟踪信息，而这对排查错误很有帮助")]),s._v(" "),a("p",[s._v("Error 对象有两个属性：message 和 name，还有一个 toString()方法。")]),s._v(" "),a("h2",{attrs:{id:"_6、json-序列化与解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、json-序列化与解析"}},[s._v("#")]),s._v(" 6、JSON 序列化与解析")]),s._v(" "),a("p",[s._v("JSON 支持原始数值和字符串，也支持 true、false 和 null 值，以及在这些原始值基础上构建起来的对象和数组。")]),s._v(" "),a("p",[s._v("JavaScript 通过两个函数——JSON.stringify()和 JSON.parse()支持 JSON 序列化和反序列化。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("n")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建深度副本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deepcopy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("o")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("JSON格式是JavaScript的严格子集。不允许有注释，属性名也必须包含在双引号中")]),s._v(" "),a("p",[s._v("JSON.stringify()和JSON.parse() 都可以接收可选的第二个参数")]),s._v(" "),a("p",[s._v("JSON.stringify()的第三个参数告诉它应该把数据格式化为多行缩进格式。如果第三个参数是个数值，则该数值表示每级缩进的空格数。如果第三个参数是空白符（如'\\t'）字符串，则每级缩进就使用该字符串。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("n")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每级缩进的空格数")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("JSON.parse()忽略空白符，因此给JSON.stringify()传第三个参数不会影响将其输出的字符串再转换为原型的数据结构。")]),s._v(" "),a("h3",{attrs:{id:"_6-1-json-parse-可选参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-json-parse-可选参数"}},[s._v("#")]),s._v(" 6.1 JSON.parse 可选参数")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除下划线开头的属性和值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'T'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_6-2-json-stringify-可选参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-json-stringify-可选参数"}},[s._v("#")]),s._v(" 6.2 JSON.stringify 可选参数")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定需要序列化的字段，以及序列化它们的顺序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'city'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'state'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'country'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定替代函数，忽略值为RegExp的属性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_7、国际化api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、国际化api"}},[s._v("#")]),s._v(" 7、国际化API")]),s._v(" "),a("p",[s._v("JavaScript国际化API包括3个类：Intl.NumberFormat、Intl.DateTimeFormat和Intl.Collator。这3个类允许我们以适合当地的方式格式化数值（包括货币数量和百分数）、日期和时间，以及以适合当地的方式比较字符串。")]),s._v(" "),a("h2",{attrs:{id:"_8、控制台api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、控制台api"}},[s._v("#")]),s._v(" 8、控制台API")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("console.log()")]),s._v(" 将参数转换为字符串并输出到控制台。它会在参数之间输出空格，并在输出所有参数后重新开始一行。")]),s._v(" "),a("li",[a("code",[s._v("console.debug()、console.info()、console.warn()、console.error()")]),s._v(" 与console.log() 相同")]),s._v(" "),a("li",[a("code",[s._v("console.assert()")]),s._v(" 如果这个函数的第一个参数是真值（也就是断言通过），则这个函数什么也不做。但如果第一个参数是false或其他假值，则剩余参数会像被传给console.error()一样打印出来，且前面带一个“Assertion failed”前缀。注意，与典型的assert()函数不同，console.assert()不会在断言失败时抛出异常。")]),s._v(" "),a("li",[a("code",[s._v("console.clear()")]),s._v(" 这个函数在可能的情况下清空控制台。在浏览器及Node中通过终端显示输出时，这个函数是有效的。如果Node的输出被重定向到文件或管道，则调用这个函数没有任何效果。")]),s._v(" "),a("li",[a("code",[s._v("console.table()")]),s._v(" 以表列形式显示其参数（如果无法实现，则使用常规的console.log()格式）。")]),s._v(" "),a("li",[a("code",[s._v("console.trace()")]),s._v(" 这个函数会像console.log()一样打印它的参数，此外在输出之后还会打印栈跟踪信息。在Node中，这个函数的输出会进入标准错误而不是标准输出。")]),s._v(" "),a("li",[a("code",[s._v("console.count()")]),s._v(" 这个函数接收一个字符串参数，并打印该字符串，后面跟着已经通过该字符串调用的次数。在调试事件处理程序时，如果需要知道事件处理程序被触发的次数，可以使用这个函数。")]),s._v(" "),a("li",[a("code",[s._v("console.countReset()")]),s._v(" 这个函数接收一个字符串参数，并重置针对该字符串的计数器。")]),s._v(" "),a("li",[a("code",[s._v("console.group()")]),s._v(" 这个函数将它的参数像传给console.log()一样打印到控制台，然后设置控制台的内部状态，让所有后续的控制台消息（在下一次调用console.groupEnd()之前）相对刚刚打印的消息缩进。这样可以通过缩进从视觉上把相关消息分为一组。")]),s._v(" "),a("li",[a("code",[s._v("console.groupCollapsed()")]),s._v(" 这个函数与console.group()类似，但在浏览器中分组默认会被“折叠”，因而其中包含的消息会隐藏，除非用户点击扩展分组。在Node中，这个函数与console.group()是同义函数。")]),s._v(" "),a("li",[a("code",[s._v("console.groupEnd()")]),s._v(" 这个函数没有参数，本身也没有输出，只用于结束由最近一次调用conosle.group()或console.groupCollapsed()导致的缩进和分组。")]),s._v(" "),a("li",[a("code",[s._v("console.time()")]),s._v(" 这个函数接收一个字符串参数，并记录以该字符串调用自身时的时间，没有输出。")]),s._v(" "),a("li",[a("code",[s._v("console.timeLog()")]),s._v(" 这个函数接收一个字符串作为第一个参数。如果这个字符串之前传给过console.time()，那么它会打印该字符串及自上次调用console.time()之后经过的时间。如果还有额外的参数传给console.timeLog()，则这些参数会像被传给console.log()一样打印出来。")]),s._v(" "),a("li",[a("code",[s._v("console.timeEnd()")]),s._v(" 这个函数接收一个字符串参数。如果该参数之前传给过console.time()，则它打印该参数及经过的时间。在调用console.timeEnd()之后，如果不再调用console.time()，则调用console.timeLog()将是不合法的。")])]),s._v(" "),a("h2",{attrs:{id:"_9、url-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、url-api"}},[s._v("#")]),s._v(" 9、URL API")]),s._v(" "),a("p",[s._v("使用URL()构造函数创建URL对象时，要传入一个绝对URL作为参数。也可以将一个相对URL作为第一个参数，将其相对的绝对URL作为第二个参数。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://example.com:8080/path/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nurls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("protocol "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => https:")]),s._v("\n\nurls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("searchParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'q'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'term'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加一个搜索参数")]),s._v("\nurls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("search "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => '?q=term'")]),s._v("\nurls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("searchParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'q'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改这个参数的值")]),s._v("\nurls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("searchParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'q'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => 'x'")]),s._v("\nurls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("searchParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'q'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("searchParams属性的值是一个URLSearchParams对象。如果想把URL参数编码为查询字符串，可以创建URLSearchParams对象")]),s._v(" "),a("h2",{attrs:{id:"_10、计时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、计时器"}},[s._v("#")]),s._v(" 10、计时器")]),s._v(" "),a("p",[s._v("浏览器就定义了两个函数：setTimeout()和setInterval()。利用这两个函数，程序可以让浏览器在指定的时间过后调用一个函数，或者每经过一定时间就重复调用一次某个函数。")]),s._v(" "),a("p",[s._v("setTimeout()的第一个参数是函数，第二个参数是数值，数值表示过多少毫秒之后调用第一个函数。在经过指定时间后（如果系统忙可能会稍微晚一点），将会调用作为第一个参数的函数")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("setTimeout()并不会等到指定时间之后再返回。前面这3行代码都会立即运行并返回，只是在未到1000毫秒时什么也不会发生。")])]),s._v(" "),a("p",[s._v("如果省略传给setTimeout()的第二个参数，则该参数默认值为0。但这并不意味着你的函数会立即被调用，只意味着这个函数会被注册到某个地方，将被“尽可能快地”调用。如果浏览器由于处理用户输入或其他事件而没有空闲，那么调用这个函数的时机可能在10毫秒甚至更长时间以后。")])])}),[],!1,null,null,null);t.default=e.exports}}]);