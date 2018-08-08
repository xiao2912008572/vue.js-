// 如果是使用的CDN引入的方式，首先要实例化Vue对象
new Vue({
    el: "#vue-app", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    // 使用methods，每次点击都会触发函数
    // methods: {
    //     addToA: function () {
    //         console.log("Add to A")
    //         return this.a + this.age;
    //     },
    //     addToB: function () {
    //         console.log("Add to B")
    //         return this.b + this.age;
    //     },
    // },

    // 使用computed
    // 如果当前变化幅度比较大，例如搜索的时候，使用计算属性，每次搜索的时候都需要匹配
    // 只有dom不同的时候，才会触发计算属性
    computed: {
        addToA: function () {
            console.log("Add to A")
            return this.a + this.age;
        },
        addToB: function () {
            console.log("Add to B")
            return this.b + this.age;
        }
    }
})