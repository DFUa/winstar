<template>
    <form class="edit-post">
        {{ this.$route.params.id }}
        <form class="add-post" @submit.prevent="editPost">
            <label for="title" class="add-post-header">title</label>
            <input id="title" type="text" v-model="data.title" :placeholder="post.title">
            <label for="bodyText" class="add-post-header">content</label>
            <textarea id="bodyText" v-model="data.body" name="content" :placeholder="post.body"></textarea>
            <div class="post-btn">
                <button @click="goBack()">cancel</button>
                <button type="submit">save</button>
            </div>
        </form>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    name: 'EditPost',
    data() {
        return {
            postId: this.$route.params.id,
            posts: null,
            post: '',
            data: {
                title: '',
                body: '',
                userId: '',
            }
        }
    },
    mounted() {
        console.log(this.$route.params.id)
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.posts = response.data
                this.post = this.posts.find(obj => (obj.id === +this.postId));
            })
            .catch(error => console.log(error));
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        editPost() {
            console.log(this.data);
            axios
                .put(`https://jsonplaceholder.typicode.com/posts/${this.postId}`, this.data)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        },
    }
}
</script>
<style lang="scss">
</style>