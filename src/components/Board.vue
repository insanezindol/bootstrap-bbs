<template>
  <div>
    <b-table id="my-table" striped hover :items="items" :per-page="perPage" :current-page="currentPage" :fields="fields" @row-clicked="rowClick"></b-table>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table" align="center" limit="10"></b-pagination>
    <b-button @click="writeContent" pill variant="outline-secondary" class="float-right">글쓰기</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            fields: [
                {
                    key: 'id',
                    label: '글번호'
                },
                {
                    key: 'title',
                    label: '제목'
                },
                {
                    key: 'regDate',
                    label: '작성일'
                },
                {
                    key: 'regUser',
                    label: '글쓴이'
                }
            ],
            items: null,
            perPage: 10,
            currentPage: 1,
            rows: 0,
        }
    },

    created () {
        this.fetchNotices()
    },

    methods: {

        fetchNotices: function () {
            axios({
                method: 'GET',
                url: '/api/notice/resource',
                params: { }
            }).then(response => {
                this.items = response.data.data
                this.rows = response.data.data.length
            }).catch(ex => {
                console.error('ERR!!!!! : ', ex)
            })
        },
        
        rowClick(item, index, e) {
            this.$router.push({
                path: '/board/free/detail/'+item.id
            })
        },

        writeContent() {
            this.$router.push({
                path: '/board/free/create'
            })
        }

    }
}
</script>