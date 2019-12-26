<template>
    <div>
        <h3>guide6</h3>
        <div id="example-1">
            <my-component-aa></my-component-aa>
            <my-component-bb></my-component-bb>
        </div>
        <div id="example-2">
            <simple-counter></simple-counter>
            <simple-counter></simple-counter>
            <simple-counter></simple-counter>
            <simple-counter></simple-counter>
            <simple-counter></simple-counter>
        </div>
        <div id="example-3">
        <ComponentA :introduce="str_var" :human="obj_var" :age="num_var" :isMan="bool_var" :team="arr_var" :callback="callMyName" ></ComponentA>
        </div>
        <div id="example-4">
            {{ myNum }}
            <ComponentB v-bind:myNum="myNum" @updateParentNumber="updateParentNumber" />
        </div>

        <div>&nbsp;</div>
        <div><a v-bind:href="url_prev">이전으로</a> || <a v-bind:href="url_next">다음으로</a></div>
    </div>
</template>
<script>
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export default {
    name: "Guide6",
    
    data() {
        return {
            str_var: "한국어 english 123 !@#",
            obj_var: {
                id: "jhlee",
                name: "이진형"
            },
            num_var: 30,
            bool_var: true,
            arr_var: ['sean', 'leo', 'noel', 'brian', 'brandon', 'dean'],
            myNum : '10',
            url_prev: '/#/guide5',
            url_next: '/#/guide7',
        }
    },

    components: {
        'myComponentAa' : {
            template: '<div>사용자 정의 컴포넌트 입니다!</div>'
        },

        'myComponentBb' : {
            template: '<span>{{ message }}</span>',
            data() {
                return {
                    message: 'hello'
                }
            }
        },

        'simpleCounter' : {
            template: '<button v-on:click="counter += 1">{{ counter }}</button>',
            data: function () {
                return {
                    counter: 0
                }
            }
        },

        ComponentA,
        ComponentB,
    },

    methods: {
        callMyName: function(message) {
            console.log('callMyName : ' + message)
            this.str_var = message
        },

        updateParentNumber: function(num) {
            console.log('updateParentNumber : ' + num)
            this.myNum = num;
        }
    },
}
</script>