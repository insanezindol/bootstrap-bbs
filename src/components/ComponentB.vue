<template>
    <div>
        <input type="text" v-model="propMyNum"/>
        <button @click="updateNumber">전송</button>
    </div>
</template>
<script>
export default {
    name: "ComponentB",

    data() {
        return {
            propMyNum: this.myNum
        }
    },

    props: {
        'myNum': {
            type: String,
            default: 0,
        }
    },

    methods: {
        updateNumber: function() {
            this.$emit('updateParentNumber', this.propMyNum);
        }
    }

}
</script>