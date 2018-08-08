// 如果是使用的CDN引入的方式，首先要实例化Vue对象
new Vue({
    el: "#vue-app", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: { // data:用于数据的存储，本质上来说是是一个对象
        // key 和 value都是自己定义的
        message: 'Hello world , I am Vue.js'
    }
})