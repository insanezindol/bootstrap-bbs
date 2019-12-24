<template>
    <div>
        <p>ComponentA</p>
        <p>string : {{ introduce }}</p>
        <p>object : {{ human.id }} , {{ human.name }}</p>
        <p>number : {{ age }}</p>
        <p>boolean : {{ isMan }}</p>
        <p>array : {{ team }}</p>
        <p>function : <input v-model="message"><button v-on:click="callParents">부모 함수 부르기</button></p>
    </div>
</template>
<script>
export default {
    name: "ComponentA",
    data() {
        return {
            message: '',
        }
    },

    methods: {
        callParents: function () {
            this.callback(this.message)
        }
    },

    props: {
        'human': Object,
        'introduce': {
            type: String,
            default: ''
        },
        'age': {
            type: Number,
            default: 0
        },
        'isMan': Boolean,
        'team': Array,
        'callback': Function,
    }
}
</script>