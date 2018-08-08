// 如果是使用的CDN引入的方式，首先要实例化Vue对象
new Vue({
    el: "#vue-app", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: {
        characters: ["Mario", "Luffy", "Yoshi"],
        users: [
            { "name": "Henry", age: 30 },
            { name: "Bucky", age: 25 },
            { name: "Emily", age: 18 },
        ]
    },
    methods: {
    },
    computed: {
    }
})