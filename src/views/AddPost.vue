<template>
    <form class="add-post" @submit.prevent="postPost">
        <label for="title" class="add-post-header">title</label>
        <input id="title" type="text" v-model="data.title">
        <label for="bodyText" class="add-post-header">content</label>
        <textarea id="bodyText" v-model="data.body" name="content"></textarea>
        <div class="post-btn">
            <button @click="goBack()">cancel</button><button type="submit">save</button>
        </div>
    </form>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
    name: 'AddPost',
    components: {
        //HelloWorld
    },
    data() {
        return {
            data: {
                title: '',
                body: '',
                userId: 10,
            }
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        postPost() {
            console.log(this.data);
            axios
                .post('https://jsonplaceholder.typicode.com/posts', this.data)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        },
    }
}
</script>
<style scoped lang="scss">
</style>