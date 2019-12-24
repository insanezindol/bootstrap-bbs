<template>
    <div>
        <h3>guide5</h3>

        <div>&nbsp;</div>
        <div id="example-1">
            <button @click="counter += 1">Add 1</button>
            <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
        </div>

        <div>&nbsp;</div>
        <div id="example-2">
            <button v-on:click="greet">Greet</button>
        </div>

        <div>&nbsp;</div>
        <div id="example-3">
            <button v-on:click="say('hi')">Say hi</button>
            <button v-on:click="say('what')">Say what</button>
        </div>

        <div>&nbsp;</div>
        <div id="example-4">
            <input v-model="message" placeholder="여기를 수정해보세요">
            <p>메시지: {{ message }}</p>
        </div>

        <div>&nbsp;</div>
        <div id="example-5">
        <span>여러 줄을 가지는 메시지:</span>
        <p style="white-space: pre-line">{{ messageLine }}</p>
        <textarea v-model="messageLine" placeholder="여러줄을 입력해보세요"></textarea>
        </div>

        <div>&nbsp;</div>
        <div id="example-6">
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
        </div>

        <div>&nbsp;</div>
        <div id="example-7">
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>체크한 이름: {{ checkedNames }}</span>
        </div>

        <div>&nbsp;</div>
        <div id="example-8">
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>선택: {{ picked }}</span>
        </div>

        <div>&nbsp;</div>
        <div id="example-9">
            <select v-model="selected1">
                <option disabled value="">선택하세요</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>선택함: {{ selected1 }}</span>
        </div>

        <div>&nbsp;</div>
        <div id="example-10">
            <select v-model="selected2">
                <option disabled value="">선택하세요</option>
                <option v-for="option in options" v-bind:value="option.value" :key="option.value">
                    {{ option.text }}
                </option>
            </select>
            <span>Selected: {{ selected2 }}</span>
        </div>

        <div>&nbsp;</div>
        <div><a v-bind:href="url_prev">이전으로</a> || <a v-bind:href="url_next">다음으로</a></div>

    </div>
</template>
<script>
export default {
    name: "Guide5",
    
    data() {
        return {
            counter: 0,
            name: 'Vue.js',
            message: '',
            messageLine: '',
            checked: false,
            checkedNames: [],
            picked: '',
            selected1: '',
            selected2: '',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            url_prev: '/#/guide4',
            url_next: '/#/guide6',
        }
    },

    methods: {
        greet: function (event) {
            // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
            alert('Hello ' + this.name + '!')
            // `event` 는 네이티브 DOM 이벤트입니다
            if (event) {
                alert(event.target.tagName)
            }
        },

        say: function (message) {
           alert(message)
        }
    },
}
</script>