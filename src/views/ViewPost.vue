<template>
    <div class="view-post">
        {{ this.$route.params.id }}
        <p class="view-post-title">{{post.title}}</p>
        <p class="view-post-body">{{post.body}}</p>
        <div class="post-btn">
            <a @click.prevent="deletePost()" href="#">delete</a>
            <router-link :to="{ name:'EditPost',params:{id: this.$route.params.id}}">edit</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ViewPost',
    data() {
        return {
            postId: this.$route.params.id,
            posts: null,
            post: ''
        }
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.posts = response.data
                /*let postId = this.$route.params.id;*/
                this.post = this.posts.find(obj => (obj.id === +this.postId));
                //console.log(this.post);
            })
            .catch(error => console.log(error));
    },
    methods: {
        deletePost() {
            axios
                .delete(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        }
    }
}
</script>
<style lang="scss">
.view-post {
    background-color: #fff;
    padding: 15px;
}

.view-post-title {
    font-weight: 700;
    margin-bottom: 30px;
}

.view-post-body {
    margin-bottom: 35px;
}
</style>