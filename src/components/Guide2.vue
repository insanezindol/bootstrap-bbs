<template>
    <div>
        <h3>guide2</h3>
        <div>30 + 20 = {{ number + 20 }}</div>
        <div>ok = true ? {{ ok ? 'YES' : 'NO' }}</div>
        <div>original message : {{ message }}</div>
        <div>reverse message : {{ message.split('').reverse().join('') }}</div>
        
        <div>&nbsp;</div>
        <div><a @click="doSomething">클릭</a></div>
        <div id="example1">{{ reverseMessage }}</div>
        <div id="example2">{{ now }}</div>
        <div id="demo">{{ fullName }}</div>

        <div>&nbsp;</div>
        <div id="watch-example">
            <p>
                yes/no 질문을 물어보세요: <input v-model="question">
            </p>
            <p>{{ answer }}</p>
        </div>

        <div>&nbsp;</div>
        <div><a v-bind:href="url_prev">이전으로</a> || <a v-bind:href="url_next">다음으로</a></div>
    </div>
</template>
<script>
import axios from 'axios'
import lodash from 'lodash'

export default {
    name: "Guide2",
    data() {
        return {
            number: 30,
            ok: true,
            message: 'hello world. my name is dean. nice to meet you.',
            url_prev: '/#/guide1',
            url_next: '/#/guide3',
            firstName: 'Foo',
            lastName: 'Bar',
            question: '',
            answer: '질문을 하기 전까지는 대답할 수 없습니다.'
        }
    },

    watch: {
        // 질문이 변경될 때 마다 이 기능이 실행됩니다.
        question: function (newQuestion) {
        this.answer = '입력을 기다리는 중...'
        this.getAnswer()
        }
    },

    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('')
        },
        now() {
            return Date.now()
        },
        fullName: {
            // getter
            get: function () {
            return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
            }
        }
    },

    methods: {
        doSomething() {
            alert(this.message)
        },

        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = '질문에는 일반적으로 물음표가 포함 됩니다. ;-)'
                    return
                }
                this.answer = '생각중...'
                var vm = this
                axios.get('https://yesno.wtf/api').then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
                })
            },
            // 사용자가 입력을 기다리는 시간(밀리세컨드) 입니다.
            500
        )
    },
}
</script>