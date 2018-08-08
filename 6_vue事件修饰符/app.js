// 如果是使用的CDN引入的方式，首先要实例化Vue对象
new Vue({
    el: "#vue-app", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: {
        age: 30,
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            // console.log(event)
            this.x = event.offsetX
            this.y = event.offsetY
        },
        stopMoving: function (event) {
            // js实现阻止冒泡事件
            event.stopPropagation(); // 阻止冒泡事件
        },
        alert: function () {
            alert("heelo world!")
        }
    }
})