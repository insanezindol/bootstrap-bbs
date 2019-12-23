<template>
    <div>
        <h3>guide1</h3>
        <div id="app-1">{{ message }}</div>
        <div id="app-2">
            <span :title="titleTxt">
                내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
            </span>
        </div>
        <div id="app-3">
            <p v-if="seen">이제 나를 볼 수 있어요</p>
        </div>
        <div id="app-4">
            <ol>
                <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
            </ol>
        </div>
        <div id="app-5">
            <button v-on:click="reverseMessage">메시지 뒤집기</button>
        </div>
        <div id="app-6">
            <p>{{ message }}</p>
            <input v-model="message"><br/>
        </div>

        <div>&nbsp;</div>
        <a v-bind:href="url_next">다음으로</a>
    </div>
</template>
<script>
export default {
    name: "Guide1",

    data() {
        return {
            message: '안녕하세요 Vue!',
            titleTxt: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다',
            seen: true,
            todos: [
                { text: 'JavaScript 배우기' },
                { text: 'Vue 배우기' },
                { text: '무언가 멋진 것을 만들기' }
            ],
            url_next: '/#/guide2'
        }
    },

    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },

    beforeCreate() {
        console.log("beforeCreate")
    },

    created() {
        console.log("created")
    },

    beforeMount() {
        console.log("beforeMount")
    },

    mounted() {
        console.log("mounted")
    },

    beforeUpdate() {
        console.log("beforeUpdate")
    },

    updated() {
        console.log("updated")
    },

    beforeDestroy() {
        console.log("beforeDestroy")
    },

    destroyed() {
        console.log("destroyed")
    },

}
</script>