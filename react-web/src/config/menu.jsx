const menuList = [{
    title: "首页",
    key: "/home",
    icon: "home"
},
{
    title: "商品管理",
    key: "/product",
    icon: "control",
    child:[{
        title: "品类管理",
        key: "/product/category",
        icon: "tag"
    },
    {
        title: "商品管理",
        key: "/product/goods",
        icon: "ordered-list"
    }]
},
{
    title: "用户管理",
    key: "/user",
    icon: "user"
},
{
    title: "角色管理",
    key: "/role",
    icon: "security-scan"
},
{
    title: "图形图标",
    key: "/charts",
    icon: "area-chart",
    child:[{
        title: "饼图",
        key: "/chart/pie",
        icon: "pie-chart"
    },
    {
        title: "折线图",
        key: "/chart/line",
        icon: "line-chart"
    },
    {
        title: "柱状图",
        key: "/chart/bar",
        icon: "bar-chart"
    }]
},
{
    title: "系统管理",
    key: "/system",
    icon: "setting",
    child:[{
        title: "参数配置",
        key: "/system/config",
        icon: "tool"
    }]
}]

export default menuList