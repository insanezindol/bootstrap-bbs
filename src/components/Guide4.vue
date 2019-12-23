<template>
    <div>
        <h3>guide4</h3>

        <ul id="example-1">
            <li v-for="item in items" :key="item.message">
                in {{ item.message }}
            </li>
        </ul>

        <ul id="example-2">
            <li v-for="(item, index) in items" :key="item.message">
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
        </ul>

        <ul id="example-3">
            <li v-for="item of items" :key="item.message">
                of {{ item.message }}
            </li>
        </ul>

        <ul id="v-for-object" class="demo">
            <li v-for="value in object" :key="value.title">
                {{ value }}
            </li>
        </ul>

        <div v-for="(value, name) in object" :key="value.title">
            {{ name }}: {{ value }}
        </div>

        <div>&nbsp;</div>
        <div v-for="(value, name, index) in object" :key="value.title">
            {{ index }}. {{ name }}: {{ value }}
        </div>

        <div>&nbsp;</div>
        <ul class="demo">
            <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
        </ul>

        <div>&nbsp;</div>
        <ul class="demo">
            <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
        </ul>       

        <div>&nbsp;</div>
        <div>
            <span v-for="n in 10" :key="n">{{ n }} </span>
        </div>

        <div>&nbsp;</div>
        <ul v-if="todos.length">
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
        <p v-else>No todos left!</p>

        <div>&nbsp;</div>
        <div><a v-bind:href="url_prev">이전으로</a> || <a v-bind:href="url_next">다음으로</a></div>

    </div>
</template>
<script>
export default {
    name: "Guide4",
    data() {
        return {
            parentMessage: 'Parent',
            items: [
                { message: 'Apple' },
                { message: 'Banana' },
                { message: 'Cat' },
                { message: 'Dog' },
                { message: 'Egg' },
                { message: 'Fox' },
            ],
            numbers: [ 1, 2, 3, 4, 5 ],
            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            newTodoText: '',
            todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
            ],
            nextTodoId: 4,
            url_prev: '/#/guide3',
            url_next: '/#/guide5',
        }
    },

    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },

    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
            return number % 2 === 0
            })
        }
    }

}
</script>