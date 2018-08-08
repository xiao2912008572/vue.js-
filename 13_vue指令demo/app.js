// 如果是使用的CDN引入的方式，首先要实例化Vue对象
new Vue({
    el: "#vue-app", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) { // 当前进度为<=0
                this.ended = true
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false // 重置进度值  
        }
    },
    computed: {
    }
})