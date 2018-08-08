// 如果是使用的CDN引入的方式，首先要实例化Vue对象
var one = new Vue({
    el: "#vue-app1", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: {
        title: "app one 的内容"
    },
    methods: {
    },
    computed: {
        greet: function () {
            return "Hello App One"
        }
    }
})

var two = new Vue({
    el: "#vue-app2", //el：代表element 需要获取的元素，一定是html中根容器元素
    data: {
        title: "app two 的内容"
    },
    methods: {
        changeTitle: function () {
            one.title = "已经改名了" //修改vue1对象中的属性
        }
    },
    computed: {
        greet: function () {
            return "Hel lo App Two"
        }
    }
})

//也可以从外面修改
two.title = "app tow 的title也发生了变化..."