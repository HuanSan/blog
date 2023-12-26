(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{355:function(t,_,v){"use strict";v.r(_);var r=v(10),a=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"服务器-raid-配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器-raid-配置"}},[t._v("#")]),t._v(" 服务器 RAID 配置")]),t._v(" "),_("h2",{attrs:{id:"_1、raid-介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、raid-介绍"}},[t._v("#")]),t._v(" 1、RAID 介绍")]),t._v(" "),_("p",[t._v("RAID 是 Redundent Array of Inexpensive Disks 的缩写，直译为“廉价冗余磁盘阵列”，也简称为“磁盘阵列”。后来 RAID 中的字母 I 被改作了 Independent，RAID 就成了“独立冗余磁盘阵列”")]),t._v(" "),_("p",[t._v("可以把 RAID 理解成一种使用磁盘驱动器的方法，它将一组磁盘驱动器用某种逻辑方式联系起来，作为逻辑上的一个磁盘驱动器来使用。也就是说将多个硬盘组合成一个磁盘阵列。")]),t._v(" "),_("h2",{attrs:{id:"_2、raid-优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、raid-优点"}},[t._v("#")]),t._v(" 2、RAID 优点")]),t._v(" "),_("ul",[_("li",[t._v("传输速率高")]),t._v(" "),_("li",[t._v("更高的安全性")])]),t._v(" "),_("h2",{attrs:{id:"_3、raid-的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、raid-的分类"}},[t._v("#")]),t._v(" 3、RAID 的分类")]),t._v(" "),_("p",[_("strong",[t._v("RAID 0")]),t._v("，无冗余无校验的磁盘阵列。数据同时分布在各个磁盘上，没有容错能力，读写速度在 RAID 中最快，但因为任何一个磁盘损坏都会使整个 RAID 系统失效，所以安全系数反倒比单个的磁盘还要低。一般用在对数据安全要求不高，但对速度要求很高的场合，如：大型游戏、图形图像编辑等。此种 RAID 模式至少需要 2 个磁盘，而更多的磁盘则能提供更高效的数据传输。")]),t._v(" "),_("p",[_("strong",[t._v("RAID 1")]),t._v("，镜象磁盘阵列。每一个磁盘都有一个镜像磁盘，镜像磁盘随时保持与原磁盘的内容一致。RAID1 具有最高的安全性，但只有一半的磁盘空间被用来存储数据。主要用在对数据安全性要求很高，而且要求能够快速恢复被损坏的数据的场合。此种 RAID 模式每组仅需要 2 个磁盘。")]),t._v(" "),_("p",[_("strong",[t._v("RAID 0+1")]),t._v("，从其名称上就可以看出，它把 RAID0 和 RAID1 技术结合起来，数据除分布在多个磁盘上外，每个磁盘都有其物理镜像盘，提供全冗余能力，允许一个以下磁盘故障，而不影响数据可用性，并具有快速读写能力。但是 RAID0+1 至少需要 4 个磁盘才能组建。")]),t._v(" "),_("p",[_("strong",[t._v("RAID 5")]),t._v("， 无独立校验盘的奇偶校验磁盘阵列。同样采用奇偶校验来检查错误，但没有独立的校验盘，而是使用了一种特殊的算法，可以计算出任何一个带区校验块的存放位置。这样就可以确保任何对校验块进行的读写操作都会在所有的 RAID 磁盘中进行均衡，既提高了系统可靠性也消除了产生瓶颈的可能，对大小数据量的读写都有很好的性能。为了能跨越数组里的所有磁盘来写入数据及校验码信息，RAID 5 设定最少需要三个磁盘，因此在这种情况下，会有 1/3 的磁盘容量会被备份校验码占用而无法使用，当有四个磁盘时，则需要 1/4 的容量作为备份，才能让最坏情况的发生率降到最低。当磁盘的数目增多时，每个磁盘上被备份校验码占用的磁盘容量就会降低，但是磁盘故障的风险率也同时增加了，一但同时有两个磁盘故障，则无法进行数据恢复。")]),t._v(" "),_("p",[_("strong",[t._v("JBOD")]),t._v("，JBOD(Just Bundle Of Disks)既简单磁盘捆绑。JBOD 是在逻辑上把几个物理磁盘一个接一个串联到一起，从而提供一个大的逻辑磁盘。JBOD 上的数据简单的从第一个磁盘开始存储， 当第一个磁盘的存储空间用完后， 再依次从后面的磁盘开始存储数据。JBOD 存取性能完全等同于对单一磁盘的存取操作，也不提供数据安全保障。它只是简单的提供一种利用磁盘空间的方法，JBOD 的存储容量等于组成 JBOD 的所有磁盘的容量的总和。")]),t._v(" "),_("p",[_("strong",[t._v("Matrix RAID")]),t._v("，矩阵磁盘阵列。是 Intel 新近创立的一种针对 SATA 接口的专利 RAID 模式，特点是能在 2 个磁盘上同时实现 RAID 0 与 RAID 1 两种模式，其工作原理是将 2 个磁盘中的每个磁盘的部分磁盘空间划分出来组成 RAID 0 或 1，而将剩余空间组成 RAID1 或 0。Matrix RAID 还有一个功能：支持 RAID 1 阵列分区的“热备份”硬盘。通常支持 Matrix RAID 功能的主板具有四个 SATA 接口，而建立一组 Matrix RAID 只需要两块硬盘，使用两个 SATA 接口。另外两个闲置的 SATA 接口就可以插上硬盘，启动“热备份”功能。当 Matrix RAID 系统中的一块硬盘出现故障时，“热备份”硬盘便会立刻接替它的工作，以保证 RAID 1 阵列分区中数据的安全。由于 RAID 0 阵列分区中的数据在一块硬盘崩溃的时候就已经损毁了，所以“热备份”硬盘对 RAID 0 阵列是无效的。")]),t._v(" "),_("h2",{attrs:{id:"_4、raid-制作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、raid-制作"}},[t._v("#")]),t._v(" 4、RAID 制作")]),t._v(" "),_("p",[t._v("以 dell R730xd 为例子，将三个磁盘组 RAID 5")]),t._v(" "),_("p",[t._v("（1）启动服务器，按照提示(F2)进入 System Setup => 选择 System BIOS => Boot Settings => 选择 UEFI 设置 enabled => 重启服务器")]),t._v(" "),_("p",[t._v("（2）然后系统开机后，等待出现 "),_("code",[t._v("<Ctrl><R>")]),t._v(" 后，按 "),_("code",[t._v("Ctrl+R")]),t._v("，进入 小型 BIOS 系统")]),t._v(" "),_("p",[t._v("（3）进入 VD Mgmt 菜单，使用 "),_("code",[t._v("Ctrl+N")]),t._v(" 和 "),_("code",[t._v("Ctrl+P")]),t._v(" 切换菜单")]),t._v(" "),_("p",[t._v("（4）选择 PERC ，有两个选项：新建（Create New VD），清除配置（Clear Config）")]),t._v(" "),_("p",[t._v("（5）选择新建（Create New VD）=> RAID Level 选择 RAID 5 => Physical Disks 按空格选中三个磁盘 => 选择 OK => 按 ESC 保存并退出")]),t._v(" "),_("p",[t._v("（6）系统开机后，按 F2 进入 System Setup => 选择 System BIOS => Boot Settings => 选择 BIOS 设置 enabled => 重启服务器")]),t._v(" "),_("p",[t._v("（7）进入系统后，打开磁盘管理，可以查看到已组好的 RAID 5 磁盘，然后进行格式化，并挂载，就可以正常使用")])])}),[],!1,null,null,null);_.default=a.exports}}]);