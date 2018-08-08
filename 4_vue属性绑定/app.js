// 如果是使用的CDN引入的方式，首先要实例化Vue对象
new Vue({
    el: "#vue-app", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: { // data:用于数据的存储，本质上来说是是一个对象
        // key 和 value都是自己定义的
        name: 'Michael Coreon',
        job: 'web开发',
        website: 'http://www.baidu.com',
        websiteTag: '<a href="http://www.baidu.com">百度</a>'
    },
    methods: {//methods:方法对象
        // greet:方法名
        greet: function (time) {
            return 'Good ' + time + " " + this.name + "!"
        }
    }
})