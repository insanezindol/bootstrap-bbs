<template>
    <div>
        <h3>guide7</h3>
       
        <b-button v-b-modal.modal-1>modal</b-button>
        <b-button @click="showToast">toast</b-button>
        
        <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>

        <b-form-input v-model="title" placeholder="제목"></b-form-input>
        <b-form-input v-model="contents" placeholder="내용"></b-form-input>

        <b-button id="show-btn" @click="showModal">Open Modal</b-button>
        <b-modal id="bv-modal-example" centered hide-footer>
            <template v-slot:modal-title>
                {{title}}
            </template>
            <div class="d-block text-center">
                <p>{{contents}}</p>
            </div>
            <b-button class="mt-3" block @click="hideModal">Close Me</b-button>
        </b-modal>

    </div>
</template>
<script>
export default {
    name: "Guide7",
    
    data() {
        return {
            title: '',
            contents: '',
        }
    },

    methods: {

        showModal: function() {
            this.$bvModal.show('bv-modal-example')
        },

        hideModal: function() {
            this.$bvModal.hide('bv-modal-example')
        },

        showToast: function() {
            let toast = this.$toasted.show("알림입니다.", { 
                theme: "bubble", 
                position: "bottom-center", 
                duration : 3000,
                action: {
                    text: '닫기',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
            });
        }
    },
}
</script>