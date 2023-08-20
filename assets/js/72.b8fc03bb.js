(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{363:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用docker安装nextcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用docker安装nextcloud"}},[s._v("#")]),s._v(" 使用docker安装nextcloud")]),s._v(" "),a("h2",{attrs:{id:"_1、目录准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、目录准备"}},[s._v("#")]),s._v(" 1、目录准备")]),s._v(" "),a("p",[s._v("创建nextcloud目录，然后再创建三个子文件夹，如下：")]),s._v(" "),a("p",[s._v("db : nextcloud依赖的持久化数据的数据库")]),s._v(" "),a("p",[s._v("html: nextcloud的资源配置文件夹")]),s._v(" "),a("p",[s._v("data: nextcloud的个人同步文件")]),s._v(" "),a("p",[s._v("例如："),a("code",[s._v("/home/vvt/node/nextcloud")])]),s._v(" "),a("h2",{attrs:{id:"_2、安装mariadb数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装mariadb数据库"}},[s._v("#")]),s._v(" 2、安装mariadb数据库")]),s._v(" "),a("p",[s._v("默认情况下，NextCloud使用的是SQLite数据库进行数据存储，它仅适用于没有客户端同步的测试和轻量级单用户设置。当多用户、多设备、大数据量的时候，SQLite就不太合适了，NextCloud支持MySQL，MariaDB，Oracle 11g和PostgreSQL等多种数据库。并且推荐使用MySQL / MariaDB。所以为了一劳永逸，还是用MySQL代替吧，MariaDB是MySQL源代码的一个分支。这里使用MariaDB作为数据库支撑。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PGID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_DATABASE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nextcloud "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nextcloud "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" db_nextcloud "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),s._v(" always "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/vvt/node/nextcloud/db:/var/lib/mysql mariadb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("-d: 后台运行容器​，并返回容器ID")]),s._v(" "),a("p",[s._v("-name: 为容器指定一个名称")]),s._v(" "),a("p",[s._v("-p 3306:3306: 容器服务开放的端口,前者是宿主机的端口，后者是容器内服务的端口")]),s._v(" "),a("p",[s._v("-e PUID、-e PGID： 运行容器的用户的权限集id")]),s._v(" "),a("p",[s._v("-e MYSQL_ROOT_PASSWORD： 数据库root用户的密码")]),s._v(" "),a("p",[s._v("-e MYSQL_DATABASE=nextcloud ：创建一个名称为nextcloud的数据库")]),s._v(" "),a("p",[s._v("-e MYSQL_USER：创建一个名称为nextcloud的用户")]),s._v(" "),a("p",[s._v("-e MYSQL_PASSWORD：名称为nextcloud的用户的密码")]),s._v(" "),a("p",[s._v("-v：数据卷绑定 前者是宿主机的地址,后者是容器机器的位置")]),s._v(" "),a("h2",{attrs:{id:"_3、安装nextcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装nextcloud"}},[s._v("#")]),s._v(" 3、安装nextcloud")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v(":22 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" nextcloud "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),s._v(" always "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/vvt/node/nextcloud/html:/var/www/html "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/vvt/node/nextcloud/data:/var/www/html/data nextcloud\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("-d: 后台运行容器​，并返回容器ID")]),s._v(" "),a("p",[s._v("-name: 为容器指定一个名称")]),s._v(" "),a("p",[s._v("-p 8888:80: 容器80端口映射到宿主机的8888端口，用于访问nextcloud站点")]),s._v(" "),a("p",[s._v("-p 222:22: 容器22端口映射到宿主机的222端口，用于访问ssh")]),s._v(" "),a("p",[s._v("-v：数据卷绑定 前者是宿主机的地址,后者是容器机器的位置")]),s._v(" "),a("p",[s._v("Nextcloud安装以及数据库之外的所有数据（文件上载等）都存储在容器地址/var/www/html中，要想持久化你的数据，不通过nextCloud也可以查看的话，应当映射到宿主机的某个位置上")]),s._v(" "),a("p",[s._v("Nextcloud的卷配置还是挺多的，例如配置(config)、数据(data)、主题(themes)等")]),s._v(" "),a("p",[s._v("nextcloud的一些卷地址：")]),s._v(" "),a("p",[s._v("/var/www/html 更新所需的主文件夹")]),s._v(" "),a("p",[s._v("/var/www/html/custom_apps你自己手动安装的应用位置")]),s._v(" "),a("p",[s._v("/var/www/html/config 本地配置文件位置")]),s._v(" "),a("p",[s._v("/var/www/html/data 你的网盘数据存放的位置")]),s._v(" "),a("p",[a("code",[s._v("/var/www/html/themes/<YOU_CUSTOM_THEME>")]),s._v(" 主题文件位置")]),s._v(" "),a("p",[s._v("以上卷映射我这里只把data单独抽出来了，其他的配置全部默认放在/var/www/html映射的位置里")]),s._v(" "),a("p",[s._v("查看容器运行 "),a("code",[s._v("docker ps")])]),s._v(" "),a("p",[s._v("浏览器输入 "),a("code",[s._v("http://你的IP:8088")]),s._v(" 即可访问nextcloud了。")]),s._v(" "),a("h2",{attrs:{id:"_4、开放nextcloud容器的ssh访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、开放nextcloud容器的ssh访问"}},[s._v("#")]),s._v(" 4、开放nextcloud容器的ssh访问")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、进入 nextcloud 容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" nextcloud /bin/bash\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、安装 vim 和 openssh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" openssh-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3、设置 root 密码，用于ssh连接时输入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4、修改配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改如下配置：")]),s._v("\nPubkeyAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用公钥私钥配对认证方式 ")]),s._v("\nAuthorizedKeysFile .ssh/authorized_keys "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#公钥文件路径（和上面生成的文件同） ")]),s._v("\nPermitRootLogin "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#root能使用ssh登录")]),s._v("\nClientAliveInterval "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#参数数值是秒 , 是指超时时间")]),s._v("\nClientAliveCountMax "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置允许超时的次数")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5、重启 ssh 服务")]),s._v("\n/etc/init.d/ssh restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h2",{attrs:{id:"_5、常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、常见问题"}},[s._v("#")]),s._v(" 5、常见问题")]),s._v(" "),a("h3",{attrs:{id:"_5-1-如果出现如下错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-如果出现如下错误"}},[s._v("#")]),s._v(" 5.1 如果出现如下错误：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Error while trying to create admin user: Failed to connect to the database: An exception occurred in the driver: SQLSTATE[HY000] [2002] No such file or directory\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可能是由于未找到该数据库，在数据库地址那里输入本机ip地址+端口")]),s._v(" "),a("h3",{attrs:{id:"_5-2-调整上传文件大小限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-调整上传文件大小限制"}},[s._v("#")]),s._v(" 5.2 调整上传文件大小限制")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" www-data php occ config:app:set files max_chunk_size "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20971520")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-3-用二级域名访问-如果出现域名不被信任"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-用二级域名访问-如果出现域名不被信任"}},[s._v("#")]),s._v(" 5.3 用二级域名访问，如果出现域名不被信任")]),s._v(" "),a("p",[s._v("修改config/config.php。在trusted_domains中增加信任的域名。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$CONFIG = array (\n  'instanceid' => '*******7rxp',\n  'passwordsalt' => '****************dO+JvP5wP4gX9',\n  'secret' => 'MURhZ*************r5C32dF*******4K/4dmH',\n  'trusted_domains' => \n  array (\n    0 => '192.***.*3.*',\n    1 => 'sg*****.top:****',\n    2 => 'www.sg*****.top:****',\n  ),\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_5-4-已创建-nextcloud-容器-如何再开放容器22端口或其他端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-已创建-nextcloud-容器-如何再开放容器22端口或其他端口"}},[s._v("#")]),s._v(" 5.4 已创建 nextcloud 容器，如何再开放容器22端口或其他端口")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" stop nextcloud\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit nextcloud new_nextcloud:001\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v(":22 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" nextcloud2 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),s._v(" always new_nextcloud:001\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_5-5-配置自定义应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-配置自定义应用"}},[s._v("#")]),s._v(" 5.5 配置自定义应用")]),s._v(" "),a("p",[s._v("修改配置文件 "),a("code",[s._v("/html/config/config.php")])]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  'apps_paths' => \n  array (\n    0 => \n    array (\n      'path' => '/var/www/html/apps',\n      'url' => '/apps',\n      'writable' => false,\n    ),\n    1 => \n    array (\n      'path' => '/var/www/html/custom_apps',\n      'url' => '/custom_apps',\n      'writable' => true,\n    ),\n  ),\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"_5-6-配置https访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-配置https访问"}},[s._v("#")]),s._v(" 5.6 配置https访问")]),s._v(" "),a("p",[s._v("修改配置文件 "),a("code",[s._v("/html/config/config.php")])]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  'overwrite.cli.url' => 'https://175.176.0.65',\n  'overwriteprotocol' => 'https',\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_5-7-应用列表打不开或者缺少"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-应用列表打不开或者缺少"}},[s._v("#")]),s._v(" 5.7 应用列表打不开或者缺少")]),s._v(" "),a("p",[s._v("修改配置文件 "),a("code",[s._v("/html/config/config.php")]),s._v("，改为国内镜像")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  'appstoreenabled' => true,\n  'appstoreurl' => 'https://www.orcy.net/ncapps/v2/',\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_6、参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、参考"}},[s._v("#")]),s._v(" 6、参考")]),s._v(" "),a("p",[s._v("https://zhuanlan.zhihu.com/p/435516648")]),s._v(" "),a("p",[s._v("https://zhuanlan.zhihu.com/p/48136942")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://apps.nextcloud.com/developer/apps/generate",target:"_blank",rel:"noopener noreferrer"}},[s._v("应用模板下载"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://letsencrypt.org/zh-cn/docs/client-options/",target:"_blank",rel:"noopener noreferrer"}},[s._v("证书"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);