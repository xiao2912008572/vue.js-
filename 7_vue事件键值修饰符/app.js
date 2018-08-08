// 如果是使用的CDN引入的方式，首先要实例化Vue对象
new Vue({
    el: "#vue-app", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: {

    },
    methods: {
        logname: function () {
            console.log("你正在输入名字！");
        },
        logage: function () {
            console.log("你正在输入年龄！");
        }
    }
})