<template>
    <div>
        <b-input v-model="title" placeholder="제목을 입력하세요."></b-input>
        <b-textarea v-model="contents" placeholder="내용을 입력하세요." rows="3" max-rows="6"></b-textarea>
        <b-input :readonly="updateMode" v-model="regUser" placeholder="작성자를 입력하세요."></b-input>
        <b-button @click="updateMode ? updateContent() : insertContent()">저장</b-button>
        <b-button @click="cancel">취소</b-button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Create',
    data() {
        return {
            title: '',
            contents: '',
            status: 1,
            regUser: '',
            updateMode: this.$route.params.id > 0 ? true : false
        }
    },

    created() {
        if(this.$route.params.id > 0) {
            const id = Number(this.$route.params.id)
            axios.get('/api/notice/resource/' + id).then((response) => {
                this.title = response.data.data.title
                this.contents = response.data.data.contents
                this.regUser = response.data.data.regUser
            })
        }
    },

    methods: {
        insertContent() {
            axios.post('/api/notice/resource',
                { title: this.title, contents: this.contents, status: this.status, regUser: this.regUser }
            ).then(response => {
                if(response.data.code == "100200") {
                    this.$router.push({
                        path: '/board/free/'
                    })
                } else {
                    alert("ERROR")
                }
            }).catch(ex => {
                console.error('ERROR!!!!! : ', ex)
            })
        },

        updateContent() {
            axios.put('/api/notice/resource/',
                { id: this.$route.params.id, title: this.title, contents: this.contents }
            ).then(response => {
                if(response.data.code == "100200") {
                    this.$router.push({
                        path: '/board/free/'
                    })
                } else {
                    alert("ERROR")
                }
                console.log(response.data);
            }).catch(ex => {
                console.error('ERROR!!!!! : ', ex)
            })
        },

        cancel() {
            this.$router.push({
                path: '/board/free/'
            })
        }
    }
}
</script>