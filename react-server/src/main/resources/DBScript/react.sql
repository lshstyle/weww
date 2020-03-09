/*
Navicat MySQL Data Transfer

Source Server         : 172.18.4.143
Source Server Version : 50722
Source Host           : 172.18.4.143:3306
Source Database       : react

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2020-03-04 09:56:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_category`
-- ----------------------------
DROP TABLE IF EXISTS `t_category`;
CREATE TABLE `t_category` (
  `f_id` varchar(32) NOT NULL COMMENT '主键id',
  `f_name` varchar(50) NOT NULL COMMENT '类别名称',
  `f_parent_id` varchar(32) NOT NULL COMMENT '上级类别id',
  `f_status` varchar(1) NOT NULL COMMENT '1-启用 0-停用',
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_category
-- ----------------------------
INSERT INTO `t_category` VALUES ('026f7de655fd11ea81ea005056893edb', '电脑', '0', '1');
INSERT INTO `t_category` VALUES ('1d25692f56b611ea81ea005056893edb', '笔记本', '026f7de655fd11ea81ea005056893edb', '1');
INSERT INTO `t_category` VALUES ('20e217a055fe11ea81ea005056893edb', '电视机', 'df1344b955fd11ea81ea005056893edb', '1');
INSERT INTO `t_category` VALUES ('20e21a5555fe11ea81ea005056893edb', '电冰箱', 'df1344b955fd11ea81ea005056893edb', '1');
INSERT INTO `t_category` VALUES ('20e21aad55fe11ea81ea005056893edb', '洗衣机', 'df1344b955fd11ea81ea005056893edb', '1');
INSERT INTO `t_category` VALUES ('20e21b6255fe11ea81ea005056893edb', '空调', 'df1344b955fd11ea81ea005056893edb', '1');
INSERT INTO `t_category` VALUES ('28b54e4d56b611ea81ea005056893edb', '台式机', '026f7de655fd11ea81ea005056893edb', '1');
INSERT INTO `t_category` VALUES ('2d93194a56b611ea81ea005056893edb', '一体机', '026f7de655fd11ea81ea005056893edb', '1');
INSERT INTO `t_category` VALUES ('8803404b55fd11ea81ea005056893edb', '图书', '0', '1');
INSERT INTO `t_category` VALUES ('df133df855fd11ea81ea005056893edb', '食品', '0', '1');
INSERT INTO `t_category` VALUES ('df1341bf55fd11ea81ea005056893edb', '服装', '0', '1');
INSERT INTO `t_category` VALUES ('df13424855fd11ea81ea005056893edb', '房产', '0', '1');
INSERT INTO `t_category` VALUES ('df1342ac55fd11ea81ea005056893edb', '玩具', '0', '1');
INSERT INTO `t_category` VALUES ('df13438055fd11ea81ea005056893edb', '箱包', '0', '1');
INSERT INTO `t_category` VALUES ('df1343ee55fd11ea81ea005056893edb', '居家', '0', '1');
INSERT INTO `t_category` VALUES ('df13446e55fd11ea81ea005056893edb', '母婴', '0', '1');
INSERT INTO `t_category` VALUES ('df1344b955fd11ea81ea005056893edb', '电器', '0', '1');
INSERT INTO `t_category` VALUES ('fbe9bd9d55fc11ea81ea005056893edb', '手机', '0', '1');

-- ----------------------------
-- Table structure for `t_menu`
-- ----------------------------
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu` (
  `f_id` varchar(10) NOT NULL COMMENT '主键id',
  `f_title` varchar(25) NOT NULL COMMENT '菜单标题',
  `f_path` varchar(25) NOT NULL COMMENT '菜单key',
  `f_icon` varchar(25) NOT NULL COMMENT '菜单图标',
  `f_index` int(11) NOT NULL COMMENT '序号',
  `f_parent_id` varchar(10) DEFAULT NULL COMMENT '父菜单id',
  `f_is_enable` varchar(1) DEFAULT NULL COMMENT '是否有效 1-是 0-否',
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_menu
-- ----------------------------
INSERT INTO `t_menu` VALUES ('1000000', '首页', '/home', 'home', '1', '0', '1');
INSERT INTO `t_menu` VALUES ('2000000', '用户管理', '/user', 'user', '2', '0', '1');
INSERT INTO `t_menu` VALUES ('3000000', '角色管理', '/role', 'team', '3', '0', '1');
INSERT INTO `t_menu` VALUES ('4000000', '权限管理', '/system/permission', 'lock', '4', '0', '1');
INSERT INTO `t_menu` VALUES ('5000000', '产品管理', '/product-manage', 'control', '5', '0', '1');
INSERT INTO `t_menu` VALUES ('5010000', '品类管理', '/product-manage/category', 'tag', '1', '5000000', '1');
INSERT INTO `t_menu` VALUES ('5020000', '商品管理', '/product-manage/product', 'ordered-list', '2', '5000000', '1');
INSERT INTO `t_menu` VALUES ('6000000', '数据分析', '/analysis', 'area-chart', '6', '0', '1');
INSERT INTO `t_menu` VALUES ('6010000', '饼图', '/analysis/pie', 'pie-chart', '1', '6000000', '1');
INSERT INTO `t_menu` VALUES ('6020000', '折线图', '/analysis/line', 'line-chart', '2', '6000000', '1');
INSERT INTO `t_menu` VALUES ('6030000', '柱状图', '/analysis/bar', 'bar-chart', '3', '6000000', '1');
INSERT INTO `t_menu` VALUES ('7000000', '系统管理', '/system', 'global', '7', '0', '1');
INSERT INTO `t_menu` VALUES ('7010000', '参数配置', '/system/config', 'tool', '4', '7000000', '1');
INSERT INTO `t_menu` VALUES ('8000000', '开发者工具', '/devlop', 'setting', '8', '0', '1');
INSERT INTO `t_menu` VALUES ('8010000', 'git', '/devlop/git', 'github', '1', '8000000', '1');

-- ----------------------------
-- Table structure for `t_product`
-- ----------------------------
DROP TABLE IF EXISTS `t_product`;
CREATE TABLE `t_product` (
  `f_id` varchar(32) NOT NULL COMMENT '主键id',
  `f_name` varchar(50) NOT NULL COMMENT '类别名称',
  `f_price` decimal(10,0) NOT NULL COMMENT '价格',
  `f_desc` varchar(200) NOT NULL COMMENT '商品描述',
  `f_status` varchar(1) NOT NULL COMMENT '状态 1-在售 0-下架',
  `f_imgs` varchar(200) DEFAULT NULL COMMENT '图片',
  `f_detail` text COMMENT '详情',
  `f_parent_category` varchar(32) DEFAULT NULL COMMENT '一级分类',
  `f_category` varchar(32) DEFAULT NULL COMMENT '二级分类',
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_product
-- ----------------------------
INSERT INTO `t_product` VALUES ('2cc5e51d56d711ea81ea005056893edb', '联想', '4499', '联想(Lenovo)小新Pro13.3英寸全面屏超轻薄笔记本电脑(标压锐龙R5-3550H 16G 512G 2.5K QHD 100%sRGB)银', '1', '863dafbb67364f6ba054574445746e2f.jpg', '<p></p>\n<p><span style=\"color: red;\">笔记本</span></p>\n<p></p>\n<p>联想(<span style=\"color: red;\">Lenovo</span>)小新<span style=\"color: red;\">Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\"color: red;\">R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</p>\n', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');
INSERT INTO `t_product` VALUES ('2e24f2c856d811ea81ea005056893edb', 'Apple', '10619', 'Apple 2019款 MacBook Pro 13.3【带触控栏】八代i5 8G 256G RP645显卡 银色 笔记本电脑 MUHR2CH/A', '1', '633a51c15b4347a0ba05574ef697f8d1.jpg,96385dca2ae74bdda9f38cd35ad82df5.jpg,8197ff0f6b564514bfb429d5fe8b7db7.jpg', '<p></p>\n<p><span style=\"color: red;\">笔记本</span></p>\n<p></p>\n<p>联想(<span style=\"color: red;\">Lenovo</span>)小新<span style=\"color: red;\">Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\"color: red;\">R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</p>\n', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');
INSERT INTO `t_product` VALUES ('42db717b56d711ea81ea005056893edb', '戴尔', '45399', '戴尔DELL游匣G3 15.6英寸英特尔酷睿i5游戏笔记本电脑(i5-9300H 8G 512G GTX1650 4G 72色域 2年整机上门)', '1', null, '<div><p><span style=\'color:red\'>笔记本</span><p>\r\n<div>联想(<span style=\'color:red\'>Lenovo</span>)小新<span style=\'color:red\'>Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\'color:red\'>R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</div></div>', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');
INSERT INTO `t_product` VALUES ('5b50b95056d711ea81ea005056893edb', '华为', '5999', '华为(HUAWEI)MateBook 13 2020款全面屏轻薄性能笔记本电脑 十代酷睿(i5 16G 512G MX250 触控屏 多屏协同)银', '1', null, '<div><p><span style=\'color:red\'>笔记本</span><p>\r\n<div>联想(<span style=\'color:red\'>Lenovo</span>)小新<span style=\'color:red\'>Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\'color:red\'>R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</div></div>', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');
INSERT INTO `t_product` VALUES ('7bf1720c56d711ea81ea005056893edb', '小米', '4799', 'RedmiBook 14 增强版 全金属超轻薄(第十代英特尔酷睿i7-10510U 8G 512G SSD MX250 2G独显 支持手环疾速解锁 Office)游戏 银 笔记本 小米 红米', '1', null, '<div><p><span style=\'color:red\'>笔记本</span><p>\r\n<div>联想(<span style=\'color:red\'>Lenovo</span>)小新<span style=\'color:red\'>Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\'color:red\'>R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</div></div>', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');
INSERT INTO `t_product` VALUES ('9391959f56d711ea81ea005056893edb', '宏碁', '3999', '宏碁(Acer)蜂鸟FUN微边框 14英寸 十代酷睿 轻薄本 高性能 网课利器 宏基笔记本电脑 (i5-10210U 8G 512GSSD MX250独显 IPS高清 长续航 wifi6 影音办公)', '1', null, '<div><p><span style=\'color:red\'>笔记本</span><p>\r\n<div>联想(<span style=\'color:red\'>Lenovo</span>)小新<span style=\'color:red\'>Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\'color:red\'>R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</div></div>', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');
INSERT INTO `t_product` VALUES ('b8b9a85056d711ea81ea005056893edb', '惠普', '6299', '惠普(HP)暗影精灵5 15.6英寸高色域游戏笔记本电脑(i5-9300H 8G 512GSSD GTX1650 4G独显)', '1', null, '<div><p><span style=\'color:red\'>笔记本</span><p>\r\n<div>联想(<span style=\'color:red\'>Lenovo</span>)小新<span style=\'color:red\'>Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\'color:red\'>R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</div></div>', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');
INSERT INTO `t_product` VALUES ('cd8e2baa56d711ea81ea005056893edb', '华硕', '6499', '华硕(ASUS) 飞行堡垒7 九代英特尔酷睿i7 120Hz高速屏游戏笔记本电脑(i7-9750H 8G 512SSD GTX1650)金属电竞', '1', null, '<div><p><span style=\'color:red\'>笔记本</span><p>\r\n<div>联想(<span style=\'color:red\'>Lenovo</span>)小新<span style=\'color:red\'>Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\'color:red\'>R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</div></div>', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');
INSERT INTO `t_product` VALUES ('faba5f6656d711ea81ea005056893edb', '微软', '6988', '微软 Surface Pro 7 二合一平板电脑笔记本 | 12.3英寸 第十代酷睿i5 8G 128G SSD 亮铂金', '1', null, '<div><p><span style=\'color:red\'>笔记本</span><p>\r\n<div>联想(<span style=\'color:red\'>Lenovo</span>)小新<span style=\'color:red\'>Pro13.3</span>英寸全面屏超轻薄笔记本电脑(标压锐龙<span style=\'color:red\'>R5-3550H 16G 512G 2.5K QHD 100%sRGB)</span>银</div></div>', '026f7de655fd11ea81ea005056893edb', '1d25692f56b611ea81ea005056893edb');

-- ----------------------------
-- Table structure for `t_upload`
-- ----------------------------
DROP TABLE IF EXISTS `t_upload`;
CREATE TABLE `t_upload` (
  `f_id` varchar(32) NOT NULL COMMENT '主键id',
  `f_file_name` varchar(50) NOT NULL COMMENT '文件名',
  `f_name` varchar(50) NOT NULL COMMENT '名称',
  `f_size` bigint(20) NOT NULL COMMENT '文件大小',
  `f_path` varchar(200) NOT NULL COMMENT '文件路径',
  `f_type` varchar(10) DEFAULT NULL COMMENT '类型'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_upload
-- ----------------------------
INSERT INTO `t_upload` VALUES ('ab497bc8efe342df83cd21e372f1ad4b', 'Desert.jpg', 'ab497bc8efe342df83cd21e372f1ad4b.jpg', '845941', 'E:\\my-react\\react-server\\img\\ab497bc8efe342df83cd21e372f1ad4b.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('1abbc7051f4645eaa589d40e8157c2ad', 'Desert.jpg', '1abbc7051f4645eaa589d40e8157c2ad.jpg', '845941', 'E:\\my-react\\react-server\\img\\1abbc7051f4645eaa589d40e8157c2ad.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('79ca4114727d457d88a316daf99ec9a2', 'Hydrangeas.jpg', '79ca4114727d457d88a316daf99ec9a2.jpg', '595284', 'E:\\my-react\\react-server\\img\\79ca4114727d457d88a316daf99ec9a2.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('85ce8cc1ab19408987834acc83343e8d', 'Koala.jpg', '85ce8cc1ab19408987834acc83343e8d.jpg', '780831', 'E:\\my-react\\react-server\\img\\85ce8cc1ab19408987834acc83343e8d.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('10c3ddd211c245518d2f40ab50a1a724', 'Koala.jpg', '10c3ddd211c245518d2f40ab50a1a724.jpg', '780831', 'E:\\my-react\\react-server\\img\\10c3ddd211c245518d2f40ab50a1a724.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('b0cbc318f49347259cadb4dfac4e5c42', 'Hydrangeas.jpg', 'b0cbc318f49347259cadb4dfac4e5c42.jpg', '595284', 'E:\\my-react\\react-server\\img\\b0cbc318f49347259cadb4dfac4e5c42.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('cfa9cd0376a14a27964f31de82fcc87c', 'Lighthouse.jpg', 'cfa9cd0376a14a27964f31de82fcc87c.jpg', '561276', 'E:\\my-react\\react-server\\img\\cfa9cd0376a14a27964f31de82fcc87c.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('17a2115f96984e65964b9f9d5bdb1ee9', 'Hydrangeas.jpg', '17a2115f96984e65964b9f9d5bdb1ee9.jpg', '595284', 'E:\\my-react\\react-server\\img\\17a2115f96984e65964b9f9d5bdb1ee9.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('a78a4944bf0540b2a42bf27c22a7475a', 'Hydrangeas.jpg', 'a78a4944bf0540b2a42bf27c22a7475a.jpg', '595284', 'E:\\my-react\\react-server\\img\\a78a4944bf0540b2a42bf27c22a7475a.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('669d76746d2549cb88a4f56d95d8e365', 'Koala.jpg', '669d76746d2549cb88a4f56d95d8e365.jpg', '780831', 'E:\\my-react\\react-server\\img\\669d76746d2549cb88a4f56d95d8e365.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('cbbf05378783438e9fdf9ad3b6fb29c7', 'Jellyfish.jpg', 'cbbf05378783438e9fdf9ad3b6fb29c7.jpg', '775702', 'E:\\my-react\\react-server\\img\\cbbf05378783438e9fdf9ad3b6fb29c7.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('192bf63cc57d46fc9cb88726bebe0123', 'Jellyfish.jpg', '192bf63cc57d46fc9cb88726bebe0123.jpg', '775702', 'E:\\my-react\\react-server\\img\\192bf63cc57d46fc9cb88726bebe0123.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('20fb764f7e514c58af78e9e0ffa64d3d', 'Hydrangeas.jpg', '20fb764f7e514c58af78e9e0ffa64d3d.jpg', '595284', 'E:\\my-react\\react-server\\img\\20fb764f7e514c58af78e9e0ffa64d3d.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('9b89ceed18c942868f62ca715026bc15', 'Koala.jpg', '9b89ceed18c942868f62ca715026bc15.jpg', '780831', 'E:\\my-react\\react-server\\img\\9b89ceed18c942868f62ca715026bc15.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('3bd1737f9d1e4a8aae916d19a3b114c3', 'Desert.jpg', '3bd1737f9d1e4a8aae916d19a3b114c3.jpg', '845941', 'E:\\my-react\\react-server\\img\\3bd1737f9d1e4a8aae916d19a3b114c3.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('5c043735d5b74077a7cf4ebc1ce591bb', 'Hydrangeas.jpg', '5c043735d5b74077a7cf4ebc1ce591bb.jpg', '595284', 'E:\\my-react\\react-server\\img\\5c043735d5b74077a7cf4ebc1ce591bb.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('dc492ee0f9264af5bb404ba0e9d90d3e', 'Jellyfish.jpg', 'dc492ee0f9264af5bb404ba0e9d90d3e.jpg', '775702', 'E:\\my-react\\react-server\\img\\dc492ee0f9264af5bb404ba0e9d90d3e.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('7c0106daa760461f8dc45a74c4c9de93', 'Hydrangeas.jpg', '7c0106daa760461f8dc45a74c4c9de93.jpg', '595284', 'E:\\my-react\\react-server\\img\\7c0106daa760461f8dc45a74c4c9de93.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('b785037746054193a508425650231610', 'Hydrangeas.jpg', 'b785037746054193a508425650231610.jpg', '595284', 'E:\\my-react\\react-server\\img\\b785037746054193a508425650231610.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('9c29e6da7ee34d47a2f1c63d77205960', 'Hydrangeas.jpg', '9c29e6da7ee34d47a2f1c63d77205960.jpg', '595284', 'E:\\my-react\\react-server\\img\\9c29e6da7ee34d47a2f1c63d77205960.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('b40a9833f73b47b9a4cedbe69c7747c4', 'Jellyfish.jpg', 'b40a9833f73b47b9a4cedbe69c7747c4.jpg', '775702', 'E:\\my-react\\react-server\\img\\b40a9833f73b47b9a4cedbe69c7747c4.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('58d4169eb8d24f068288fae99ebaa697', 'Hydrangeas.jpg', '58d4169eb8d24f068288fae99ebaa697.jpg', '595284', 'E:\\my-react\\react-server\\img\\58d4169eb8d24f068288fae99ebaa697.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('fdaf83a8fcaf4ef2bd6d6b4099d48c9a', 'Hydrangeas.jpg', 'fdaf83a8fcaf4ef2bd6d6b4099d48c9a.jpg', '595284', 'E:\\my-react\\react-server\\img\\fdaf83a8fcaf4ef2bd6d6b4099d48c9a.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('9860649ef8784bb191acccced3e0a09d', 'Hydrangeas.jpg', '9860649ef8784bb191acccced3e0a09d.jpg', '595284', 'E:\\my-react\\react-server\\img\\9860649ef8784bb191acccced3e0a09d.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('863dafbb67364f6ba054574445746e2f', 'Koala.jpg', '863dafbb67364f6ba054574445746e2f.jpg', '780831', 'E:\\my-react\\react-server\\img\\863dafbb67364f6ba054574445746e2f.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('633a51c15b4347a0ba05574ef697f8d1', 'timg (1).jpg', '633a51c15b4347a0ba05574ef697f8d1.jpg', '11955', 'E:\\my-react\\react-server\\img\\633a51c15b4347a0ba05574ef697f8d1.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('96385dca2ae74bdda9f38cd35ad82df5', 'timg.jpg', '96385dca2ae74bdda9f38cd35ad82df5.jpg', '14869', 'E:\\my-react\\react-server\\img\\96385dca2ae74bdda9f38cd35ad82df5.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('8197ff0f6b564514bfb429d5fe8b7db7', 'u=3780558664,3265771681&fm=26&gp=0.jpg', '8197ff0f6b564514bfb429d5fe8b7db7.jpg', '5902', 'E:\\my-react\\react-server\\img\\8197ff0f6b564514bfb429d5fe8b7db7.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('4b3e0b917be94714bc15702cbd7e6fec', 'timg.jpg', '4b3e0b917be94714bc15702cbd7e6fec.jpg', '14869', 'E:\\my-react\\react-server\\img\\4b3e0b917be94714bc15702cbd7e6fec.jpg', 'jpg');
INSERT INTO `t_upload` VALUES ('17b2a96267a74cc69e95870077f8e360', 'timg (1).jpg', '17b2a96267a74cc69e95870077f8e360.jpg', '11955', 'E:\\my-react\\react-server\\img\\17b2a96267a74cc69e95870077f8e360.jpg', 'jpg');

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `f_id` varchar(32) NOT NULL COMMENT '主键id',
  `f_name` varchar(50) NOT NULL COMMENT '用户账号',
  `f_real_name` varchar(50) NOT NULL COMMENT '用户姓名',
  `f_sex` varchar(1) DEFAULT NULL COMMENT '性别 1-男 0-女',
  `f_passwd` varchar(64) NOT NULL COMMENT '密码',
  `f_phone` varchar(11) DEFAULT NULL COMMENT '联系电话',
  `f_email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('cad5e8c3557011ea81ea005056893edb', 'admin', 'admin', null, 'admin', null, null);
INSERT INTO `t_user` VALUES ('da3f1c48557011ea81ea005056893edb', 'test', 'test', null, 'test', null, null);
