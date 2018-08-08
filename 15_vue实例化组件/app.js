Vue.component("greeting", {
    // 模板 : 有且只有一个根标签
    template: `
        <p>
            {{name}}:大家好，给大家介绍一下我的女朋友@祝菲
            <button v-on:click="changeName">改名</button>
        </p>`,
    //⚠️ data 写成函数返回的方式是因为：谁调用谁使用这个data，避免点击按钮的时候，
    //两个name都改变了
    data: function () {
        return {
            name: '肖静远'
        }
    },
    methods: {
        changeName: function () {
            this.name = 'Henry';
        }
    }
})

new Vue({
    el: "#vue-app-one", //el：代表element 需要获取的元素，一定是html中根容器元素
})

new Vue({
    el: "#vue-app-two"
})
