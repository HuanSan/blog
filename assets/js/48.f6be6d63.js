(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{331:function(s,n,a){"use strict";a.r(n);var t=a(10),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"linux-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-指令"}},[s._v("#")]),s._v(" Linux 指令")]),s._v(" "),n("p",[s._v("ubuntu下载地址 "),n("code",[s._v("https://www.releases.ubuntu.com/focal/")])]),s._v(" "),n("h2",{attrs:{id:"_1、常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、常用命令"}},[s._v("#")]),s._v(" 1、常用命令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入当前管理员用户密码，可以获得超级用户的权限，默认5分钟失效")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将输入当前管理员用户密码可以进入root用户")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入当前用户密码，获取 root 权限")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" root "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用并设置 root 用户密码")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" root "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用 root 用户")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 root 密码，进入 root 权限，输入 exit 返回用户权限")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有运行中的进程")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" xxx "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索相关进程")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" xxx "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭进程")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" root "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-N")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看非root运行的进程")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看属于自己的进程")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i:8080")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看端口占用")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" test.sh "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行一个shell脚本")]),s._v("\n\n$ ./test.sh "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接运行shell脚本")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw status "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙状态")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw disable "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启防火墙指定端口")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" 文件路径 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置文件权限")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x xxx "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置文件为可执行文件")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" sanyer: /home/xxx "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置目录的访问权限")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" 源文件 目标文件 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建软连接")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看目录文件列表")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看目录隐藏文件")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-al")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看目录文件列表以及软连接对应的地址")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-al")]),s._v(" /proc/进程号/cwd "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程号执行文件的路径")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看cpu占用")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Hp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4807")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看pid进程的cpu占用")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存占用")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" nvidia-smi "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10秒刷新一次，查看 nvidia 显卡显存占用")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看cpu型号")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" xxx "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看软件安装目录")]),s._v("\n\n$ ./xxxx "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在可执行程序后面加入 & 符号，可以让程序在后台运行")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑当前用户配置文件")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存环境配置")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" vvt: test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("目录或目录路径"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改目录用户权限")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br")])]),n("h2",{attrs:{id:"_2、服务命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、服务命令"}},[s._v("#")]),s._v(" 2、服务命令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\nsystemctl start xxx.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭服务")]),s._v("\nsystemctl stop xxx.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\nsystemctl restart xxx.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示服务状态")]),s._v("\nsystemctl status xxx.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动服务")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" xxx.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用开机启动服务")]),s._v("\nsystemctl disable xxx.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看服务是否开机启动")]),s._v("\nsystemctl is-enable xxx.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置服务列表")]),s._v("\nsystemctl daemon-reload\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已启动服务列表")]),s._v("\nsystemctl list-unit-files"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" enabled\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看启动失败的服务列表")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--failed")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务的路径")]),s._v("\n/etc/systemd/system/xxx.service\n/usr/lib/systemd/system/xxx.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 软件源列表")]),s._v("\n/etc/apt/sources.list.d\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("h2",{attrs:{id:"_3、开启ssh服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、开启ssh服务"}},[s._v("#")]),s._v(" 3、开启ssh服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--now")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl disable "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--now")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" autoremove openssh-server "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_4、查看网络状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、查看网络状态"}},[s._v("#")]),s._v(" 4、查看网络状态")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);