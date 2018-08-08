// 如果是使用的CDN引入的方式，首先要实例化Vue对象
new Vue({
    el: "#vue-app", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: {
        changeColor: false,
        changeLength: false
    },
    methods: {
    },
    computed: {
        compClasses: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
})