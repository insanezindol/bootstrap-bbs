<template>
    <div>
        <b-card>
            <div class="content-detail-content-info">
                <div class="content-detail-content-info-left">
                    <div class="content-detail-content-info-left-number">
                        {{id}}
                    </div>
                    <div class="content-detail-content-info-left-subject">
                        {{title}}
                    </div>
                </div>
                <div class="content-detail-content-info-right">
                    <div class="content-detail-content-info-right-user">
                        글쓴이 : {{regUser}}
                    </div>
                    <div class="content-detail-content-info-right-created">
                        등록일 : {{regDate}}
                    </div>
                </div>
            </div>
            <div class="content-detail-content">
                {{contents}}
            </div>
            <div class="content-detail-button">
                <b-button variant="primary" @click="updateData">수정</b-button>
                <b-button variant="success" @click="deleteData">삭제</b-button>
            </div>
        </b-card>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "ContentDetail",
    data() {
        const id = Number(this.$route.params.id)
        axios.get('/api/notice/resource/' + id).then((response) => {
            this.id = response.data.data.id
            this.title = response.data.data.title
            this.contents = response.data.data.contents
            this.status = response.data.data.status
            this.regUser = response.data.data.regUser
            this.regDate = response.data.data.regDate
        })
        
        return {
            id: '',
            title: '',
            contents: '',
            status: '',
            regUser: '',
            regDate: ''
        }
    },
    methods: {
        updateData() {
            this.$router.push({
                path: '/board/free/create/'+this.$route.params.id
            })
        },
        deleteData() {
            axios.delete('/api/notice/resource/' + this.id).then(response => {                
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
        }
    }
}
</script>