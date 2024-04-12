(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{337:function(a,s,t){"use strict";t.r(s);var n=t(10),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"使用docker安装gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用docker安装gitlab"}},[a._v("#")]),a._v(" 使用docker安装gitlab")]),a._v(" "),s("h2",{attrs:{id:"_1、安装gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装gitlab"}},[a._v("#")]),a._v(" 1、安装gitlab")]),a._v(" "),s("h3",{attrs:{id:"_1-1-创建gitlab数据目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建gitlab数据目录"}},[a._v("#")]),a._v(" 1.1 创建gitlab数据目录")]),a._v(" "),s("p",[a._v("首先，需要为gitlab的数据创建一个目录，用来存储gitlab在运行过程中产生的数据。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo mkdir -p /data/gitlab  #/data/gitlab可以修改成合适的目录\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-2-搜索gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-搜索gitlab"}},[a._v("#")]),a._v(" 1.2 搜索gitlab")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker search gitlab\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-3-拉取gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-拉取gitlab"}},[a._v("#")]),a._v(" 1.3 拉取gitlab")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# amd")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull gitlab/gitlab-ce\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# arm")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull yrzr/gitlab-ce-arm64v8:16.0.4-ce.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"_1-4-启动gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-启动gitlab"}},[a._v("#")]),a._v(" 1.4 启动gitlab")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 最新版")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8099")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("222")]),a._v(":22 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlabs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/etc:/etc/gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/log:/var/log/gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8099")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("222")]),a._v(":22 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/etc:/etc/gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/log:/var/log/gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/data:/var/opt/gitlab yrzr/gitlab-ce-arm64v8:16.3.3-ce.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("参数说明：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-i  以交互模式运行容器，通常与 -t 同时使用命令解释：\n\n-d  后台运行容器，并返回容器ID\n\n-p 8099:80  将容器内80端口映射至宿主机9980端口，这是访问gitlab的端口\n\n-p 222:22  将容器内22端口映射至宿主机222端口，这是访问ssh的端口\n\n-v ./gitlab/etc:/etc/gitlab  将容器/etc/gitlab目录挂载到宿主机./gitlab/etc目录下，若宿主机内此目录不存在将会自动创建，其他两个挂载同这个一样\n\n--restart always  容器自启动\n\n--privileged=true  让容器获取宿主机root权限\n\n--name gitlab-test  设置容器名称为gitlab\n\ngitlab/gitlab-ce  镜像的名称，这里也可以写镜像ID\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("h2",{attrs:{id:"_2、配置gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置gitlab"}},[a._v("#")]),a._v(" 2、配置gitlab")]),a._v(" "),s("h3",{attrs:{id:"_2-1-修改配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-修改配置文件"}},[a._v("#")]),a._v(" 2.1 修改配置文件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vim /data/gitlab/etc/gitlab.rb\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("或者进入容器再修改：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo docker exec -it gitlabs /bin/bash\nvim /etc/gitlab/gitlab.rb\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("external_url 'http://服务器ip:端口/'\ngitlab_rails['gitlab_ssh_host'] = '服务器ip'\ngitlab_rails['gitlab_shell_ssh_port'] = 222\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("若不配置则默认 80 端口 和 22 端口(ssh)，本人使用了端口映射所以默认不配置，只需要服务器开放8099和222端口。")]),a._v(" "),s("p",[a._v("改完配置后需要重载配置")]),a._v(" "),s("h3",{attrs:{id:"_2-2-修改密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改密码"}},[a._v("#")]),a._v(" 2.2 修改密码")]),a._v(" "),s("p",[a._v("查看初始密码：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vim /data/gitlab/etc/initial_root_password\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("或者进入容器查看：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo docker exec -it gitlabs /bin/bash\nvim /etc/gitlab/initial_root_password\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("进入gitlab网站，使用 root 账号和初始密码登录，然后再修改密码")]),a._v(" "),s("p",[a._v("第二种办法：")]),a._v(" "),s("p",[a._v("（本人使用该方法未通过，在执行 "),s("code",[a._v("gitlab-rails console -e production")]),a._v(" 或者 "),s("code",[a._v("gitlab-rails console")]),a._v(" 都直接卡死在页面上）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 进入容器内部\ndocker exec -it gitlab /bin/bash\n \n# 进入控制台\ngitlab-rails console -e production\n \n# 查询id为1的用户，id为1的用户是超级管理员\nuser = User.where(id:1).first\n# 修改密码为root1AQ@\nuser.password='root1AQ@'\n# 保存\nuser.save!\n# 退出\nexit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("h2",{attrs:{id:"_3、设置邮箱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、设置邮箱"}},[a._v("#")]),a._v(" 3、设置邮箱")]),a._v(" "),s("div",{staticClass:"language-conf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("gitlab_rails['smtp_enable'] = true\ngitlab_rails['smtp_address'] = \"smtp.qq.com\"\ngitlab_rails['smtp_port'] = 465\ngitlab_rails['smtp_user_name'] = \"xxx@qq.com\"\ngitlab_rails['smtp_password'] = \"hlldwcjoqsc******\"\ngitlab_rails['smtp_authentication'] = \"login\"\ngitlab_rails['smtp_enable_starttls_auto'] = true\ngitlab_rails['smtp_tls'] = true\ngitlab_rails['gitlab_email_from'] = 'xxx@qq.com'\ngitlab_rails['smtp_domain'] = \"qq.com\"\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h2",{attrs:{id:"_4、轻量化运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、轻量化运行"}},[a._v("#")]),a._v(" 4、轻量化运行")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 关闭容器仓库功能\ngitlab_rails['gitlab_default_projects_features_container_registry'] = false\ngitlab_rails['registry_enabled'] = false\nregistry['enable'] = false\nregistry_nginx['enable'] = false\n\n# 包仓库、依赖管理\ngitlab_rails['packages_enabled'] = false\ngitlab_rails['dependency_proxy_enabled'] = false\n\n# GitLab Pages\ngitlab_pages['enable'] = false\npages_nginx['enable'] = false\n\n# 关闭监控和性能基准相关功能\nprometheus_monitoring['enable'] = false\nalertmanager['enable'] = false\nnode_exporter['enable'] = false\nredis_exporter['enable'] = false\npostgres_exporter['enable'] = false\npgbouncer_exporter['enable'] = false\ngitlab_exporter['enable'] = false\ngrafana['enable'] = false\nsidekiq['metrics_enabled'] = false\n\n# 针对应用的性能分析和上报\ngitlab_rails['usage_ping_enabled'] = false\ngitlab_rails['sentry_enabled'] = false\ngrafana['reporting_enabled'] = false\n\n# GitLab KAS\ngitlab_kas['enable'] = false\ngitlab_rails['gitlab_kas_enabled'] = false\n# Terraform\ngitlab_rails['terraform_state_enabled'] = false\n# Kerberos 文档说EE only，但是默认值为 true\ngitlab_rails['kerberos_enabled'] = false\n# Sentinel\nsentinel['enable'] = false\n# Mattermost\nmattermost['enable'] = false\nmattermost_nginx['enable'] = false\n\n# 禁用 PUMA 集群模式\npuma['worker_processes'] = 0\npuma['min_threads'] = 1\npuma['max_threads'] = 2\n\n# 降低后台守护进程并发数\nsidekiq['max_concurrency'] = 5\n\n# 关闭电子邮件相关功能\ngitlab_rails['smtp_enable'] = false\ngitlab_rails['gitlab_email_enabled'] = false\ngitlab_rails['incoming_email_enabled'] = false\n\n# 关闭ci\ngitlab_ci['gitlab_ci_all_broken_builds'] = false\ngitlab_ci['gitlab_ci_add_pusher'] = false\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br")])]),s("h2",{attrs:{id:"_5、容器命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、容器命令"}},[a._v("#")]),a._v(" 5、容器命令")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart gitlab "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" gitlab "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 退出容器")]),a._v("\n\ngitlab-ctl start "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动全部服务")]),a._v("\ngitlab-ctl restart "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启全部服务")]),a._v("\ngitlab-ctl stop "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止全部服务")]),a._v("\ngitlab-ctl restart nginx "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重启单个服务，如重启nginx")]),a._v("\ngitlab-ctl status "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看服务状态")]),a._v("\ngitlab-ctl reconfigure "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#使配置文件生效")]),a._v("\ngitlab-ctl show-config "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#验证配置文件")]),a._v("\n\ngitlab-ctl uninstall "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除gitlab（保留数据）")]),a._v("\ngitlab-ctl cleanse "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除所有数据，从新开始")]),a._v("\ngitlab-ctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("service name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("查看服务的日志\ngitlab-ctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" nginx  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如查看gitlab下nginx日志")]),a._v("\ngitlab-rails console  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#进入控制台")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gitlab 数据目录")]),a._v("\n/var/opt/gitlab\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 命令目录")]),a._v("\n/opt/gitlab/bin\ngitlab-backup  gitlab-healthcheck  gitlab-rails  gitlab-redis-cli\ngitlab-ctl     gitlab-psql         gitlab-rake   gitlab-ruby\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])]),s("h2",{attrs:{id:"_6、参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、参考"}},[a._v("#")]),a._v(" 6、参考")]),a._v(" "),s("p",[a._v("https://zhuanlan.zhihu.com/p/413217715")]),a._v(" "),s("h2",{attrs:{id:"_7、常见错误及操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、常见错误及操作"}},[a._v("#")]),a._v(" 7、常见错误及操作")]),a._v(" "),s("h3",{attrs:{id:"_7-1-postgresql-数据库启动失败引起的-502-页面异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-postgresql-数据库启动失败引起的-502-页面异常"}},[a._v("#")]),a._v(" 7.1 postgresql 数据库启动失败引起的 502 页面异常")]),a._v(" "),s("p",[a._v("（1）查看服务状态")]),a._v(" "),s("p",[a._v("进入容器 "),s("code",[a._v("sudo docker exec -it gitlabs /bin/bash")]),a._v(" 后查看服务状态 "),s("code",[a._v("gitlab-ctl status")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("run: gitaly: (pid 278) 90s; run: log: (pid 276) 90s\nrun: gitlab-workhorse: (pid 338) 88s; run: log: (pid 336) 88s\nrun: logrotate: (pid 277) 90s; run: log: (pid 275) 90s\nrun: nginx: (pid 339) 88s; run: log: (pid 337) 88s\ndown: postgresql: 1s, normally up, want up; run: log: (pid 334) 88s\nrun: puma: (pid 551) 13s; run: log: (pid 331) 88s\nrun: redis: (pid 280) 90s; run: log: (pid 279) 90s\nrun: sidekiq: (pid 560) 10s; run: log: (pid 330) 88s\nrun: sshd: (pid 38) 101s; run: log: (pid 33) 101s\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("可以看到 "),s("code",[a._v("postgresql")]),a._v(" 服务是 "),s("code",[a._v("down")]),a._v(" 的状态")]),a._v(" "),s("p",[a._v("（2）查看服务日志")]),a._v(" "),s("p",[a._v("输入命令 "),s("code",[a._v("gitlab-ctl tail postgresql")]),a._v("，提示：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('database system is shut down\n2023-10-25_10:22:35.73532 LOG:  starting PostgreSQL 13.11 on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 11.3.0-1ubuntu1~22.04.1) 11.3.0, 64-bit\n2023-10-25_10:22:35.73535 FATAL:  lock file "/var/opt/gitlab/postgresql/.s.PGSQL.5432.lock" is empty\n2023-10-25_10:22:35.73535 HINT:  Either another server is starting, or the lock file is the remnant of a previous server startup crash.\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("（3）删除遗留的 lock 和 pid 文件")]),a._v(" "),s("p",[a._v("进入容器找到 "),s("code",[a._v("/var/opt/gitlab/postgresql/.s.PGSQL.5432.lock")]),a._v(" 文件并删除")]),a._v(" "),s("p",[a._v("重启服务，然后出现提示：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('lock file "postmaster.pid" is empty\n2023-10-25_09:17:25.83247 HINT:  Either another server is starting, or the lock file is the remnant of a previous server startup crash.\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("在 "),s("code",[a._v("/var/opt/gitlab/postgresql/data")]),a._v(" 目录下找到 "),s("code",[a._v("postmaster.pid")]),a._v(" 文件并删除")]),a._v(" "),s("p",[a._v("重启服务，然后出现提示：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("database system was shut down at 2023-09-27 14:22:07 GMT\n2023-10-25_10:31:52.16432 LOG:  invalid record length at 0/6B355F0: wanted 24, got 0\n2023-10-25_10:31:52.16440 LOG:  invalid primary checkpoint record\n2023-10-25_10:31:52.16447 PANIC:  could not locate a valid checkpoint record\n2023-10-25_10:31:52.49977 LOG:  startup process (PID 394) was terminated by signal 6: Aborted\n2023-10-25_10:31:52.49979 LOG:  aborting startup due to startup process failure\n2023-10-25_10:31:52.49980 LOG:  database system is shut down\n2023-10-25_10:31:53.63088 LOG:  starting PostgreSQL 13.11 on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 11.3.0-1ubuntu1~22.04.1) 11.3.0, 64-bit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("使用命令修复：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Postgres >= 10")]),a._v("\npg_resetwal /var/opt/gitlab/postgresql/data\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Postgres < 10")]),a._v("\npg_resetxlog /var/opt/gitlab/postgresql/data\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可能会提示需要使用 Postgres 超级管理员的权限来使用该命令，进入 Postgres 超级管理员用户权限")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - gitlab-psql "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 用户名可以通过进入 /var/opt/gitlab/postgresql/data 目录，使用 ll 命令查看")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 然后输入命令")]),a._v("\npg_resetwal /var/opt/gitlab/postgresql/data\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 强制更新")]),a._v("\npg_resetwal "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" /var/opt/gitlab/postgresql/data\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h3",{attrs:{id:"_7-2-使用命令行修改普通用户为管理员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-使用命令行修改普通用户为管理员"}},[a._v("#")]),a._v(" 7.2 使用命令行修改普通用户为管理员")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /var/opt/gitlab/gitlab-rails/etc/database.yml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - gitlab-psql\n\npsql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" /var/opt/gitlab/postgresql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" gitlabhq_production\n$ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" id,username,email,admin from "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" id,username,email,admin from "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("users")]),a._v(" where "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'sanyer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n$ update "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("users")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("admin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'t'")]),a._v(" where "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'sanyer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 出现 UPDATE 1 则修改成功")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h2",{attrs:{id:"_8、备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、备份"}},[a._v("#")]),a._v(" 8、备份")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入容器内部")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" gitlab /bin/bash\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开始备份")]),a._v("\ngitlab-backup create\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看备份文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /data/gitlab/data/backups\n1712848104_2024_04_11_16.3.3_gitlab_backup.tar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本机还原")]),a._v("\ngitlab-backup restore\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h2",{attrs:{id:"_9、迁移新服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、迁移新服务器"}},[a._v("#")]),a._v(" 9、迁移新服务器")]),a._v(" "),s("h3",{attrs:{id:"_9-1-先决条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-先决条件"}},[a._v("#")]),a._v(" 9.1 先决条件")]),a._v(" "),s("ul",[s("li",[a._v("目标 GitLab 实例必须已在工作")]),a._v(" "),s("li",[a._v("目标 GitLab 实例必须具有完全相同的版本，备份还原到与创建备份时完全相同的 GitLab 版本和类型（CE 或 EE）。例如，CE 16.3.3")]),a._v(" "),s("li",[a._v("必须还原 GitLab 秘钥，即 "),s("code",[a._v("/data/gitlab/etc")]),a._v(" 配置中的文件")]),a._v(" "),s("li",[a._v("清空挂载点目录 "),s("code",[a._v("/data/gitlab/data")]),a._v(" 和 "),s("code",[a._v("/data/gitlab/log")])])]),a._v(" "),s("h3",{attrs:{id:"_9-2-开始还原"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-开始还原"}},[a._v("#")]),a._v(" 9.2 开始还原")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8099")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("222")]),a._v(":22 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/etc:/etc/gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/log:/var/log/gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/gitlab/data:/var/opt/gitlab yrzr/gitlab-ce-arm64v8:16.3.3-ce.0\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 容器创建成功后，复制备份文件到 /data/gitlab/data/backups 目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" 1712848104_2024_04_11_16.3.3_gitlab_backup.tar /data/gitlab/data/backups\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入容器内部")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" gitlab /bin/bash\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置备份文件权限")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" git:git /var/opt/gitlab/backups/1712848104_2024_04_11_16.3.3_gitlab_backup.tar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止连接到数据库的进程")]),a._v("\ngitlab-ctl stop puma\ngitlab-ctl stop sidekiq\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定要备份的 ID 恢复")]),a._v("\ngitlab-backup restore "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BACKUP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1712848104_2024_04_11_16.3.3\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 中间会弹出几次确认事件，输入 yes 即可")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启后，页面502，需等待系统重启5分钟左右")]),a._v("\ngitlab-ctl restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br")])]),s("p",[a._v("参考：https://docs.gitlab.com/ee/administration/backup_restore/restore_gitlab.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);