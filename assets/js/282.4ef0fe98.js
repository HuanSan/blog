(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{564:function(v,_,e){"use strict";e.r(_);var i=e(10),s=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"sdp协议详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sdp协议详解"}},[v._v("#")]),v._v(" SDP协议详解")]),v._v(" "),_("ul",[_("li",[v._v("会话描述\n"),_("ul",[_("li",[_("code",[v._v("v=")]),v._v(" 协议版本(protocol version)，一般为0")]),v._v(" "),_("li",[_("code",[v._v("o=")]),v._v(" 会话的创建者(owner/creator and session identifier)")]),v._v(" "),_("li",[_("code",[v._v("s=")]),v._v(" 会话名(session name)")]),v._v(" "),_("li",[_("code",[v._v("t=")]),v._v(" 会话时长(time the session is active)")])])]),v._v(" "),_("li",[v._v("媒体描述\n"),_("ul",[_("li",[v._v("媒体信息\n"),_("ul",[_("li",[v._v("m= 媒体描述")]),v._v(" "),_("li",[v._v("a=ssrc")]),v._v(" "),_("li",[v._v("a=rtpmap")]),v._v(" "),_("li",[v._v("a=fmtp")])])]),v._v(" "),_("li",[v._v("网络描述\n"),_("ul",[_("li",[v._v("c=")]),v._v(" "),_("li",[v._v("a=candidate")]),v._v(" "),_("li",[v._v("a=group:BUNDLE")]),v._v(" "),_("li",[v._v("a=rtcp-mux")]),v._v(" "),_("li",[v._v("a=sendrecv")]),v._v(" "),_("li",[v._v("a=ice-lite")]),v._v(" "),_("li",[v._v("a=ice-options")]),v._v(" "),_("li",[v._v("a=extmap")]),v._v(" "),_("li",[v._v("a=rtcp-resize")])])]),v._v(" "),_("li",[v._v("安全描述\n"),_("ul",[_("li",[v._v("a=crypto")]),v._v(" "),_("li",[v._v("a=ice-ufrag")]),v._v(" "),_("li",[v._v("a=ice-pwd")]),v._v(" "),_("li",[v._v("a=fingerprint")]),v._v(" "),_("li",[v._v("a=setup")])])]),v._v(" "),_("li",[v._v("服务质量\n"),_("ul",[_("li",[v._v("a=tcp-fb")])])])])])]),v._v(" "),_("p",[v._v("通常SDP种包含两个媒体描述：")]),v._v(" "),_("ul",[_("li",[v._v("音频媒体描述")]),v._v(" "),_("li",[v._v("视频媒体描述")])]),v._v(" "),_("p",[v._v("除了话描述是对整个SDP起约束作用外，各媒体描述之间的约束互不影响。")]),v._v(" "),_("p",[v._v("SDP的描述格式：")]),v._v(" "),_("p",[_("code",[v._v("<type> = <value>")])]),v._v(" "),_("p",[v._v("其中type描述描述的目标，它有单个字符组成；value是对type的解释或约束。")]),v._v(" "),_("h2",{attrs:{id:"_1、会话创建者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、会话创建者"}},[v._v("#")]),v._v(" 1、会话创建者")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("o=<username> <sess-id> <sess-version> <nettype> <addrtype> <unicast-address>\no=- 1954504395161900476 2 IN IP4 127.0.0.1\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("ul",[_("li",[v._v("o=字段给出了会话的发起者(用户名和用户的主机地址)加上会话标识符和版本数量")]),v._v(" "),_("li",[v._v("username：用户登录是否在原始主机上，如果为-表示不支持用户id的概念，不能包含空格。")]),v._v(" "),_("li",[v._v("sess-id：会话ID")]),v._v(" "),_("li",[v._v("sess-version：会话的版本")]),v._v(" "),_("li",[v._v("nettype：网络类型")]),v._v(" "),_("li",[v._v("addrtype：地址类型，通常为IP4、IP6")]),v._v(" "),_("li",[v._v("unicast-address：发起者的地址，webrtc中并不适用这个")])]),v._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),_("p",[v._v("https://zhuanlan.zhihu.com/p/609950122")])])}),[],!1,null,null,null);_.default=s.exports}}]);