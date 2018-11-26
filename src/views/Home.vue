<template>
    <div class="posts-wrap">
        <div v-for="post in posts.slice().reverse()" :key="post.id" class="post-item">
            <p class="post-title">{{post.title}}</p>
            <p class="post-body">{{post.body}}</p>
            <p>{{post.id}}</p>
            <div class="post-btn">
                <router-link :to="{ name:'ViewPost',params:{id: post.id}}">view</router-link>
                <router-link :to="{ name:'EditPost',params:{id: post.id}}">edit</router-link>
            </div>
        </div>
    </div>
</template>
<script>
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
    name: 'AllPost',
    /*components: {
      HelloWorld
    },*/
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => (this.posts = response.data))
            .catch(error => console.log(error));
    }
}
</script>
<style lang="scss">
.posts-wrap {
    display: flex;
    flex-wrap: wrap;
}

.post-item {
    margin: 0 7.5px 15px;
    background-color: #fff;
    width: calc(33.33% - 15px);
    padding: 15px;

    .post-title {
        margin-bottom: 20px;
        font-weight: 600;
    }
}

.post-btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;

    a,
    button {
        border: none;
        background-color: transparent;
        text-decoration: none;
        font-size: 16px;
        color: #000;
        font-weight: 700;
        cursor: pointer;

        &:hover,
        &:active {
            text-decoration: underline;
        }

        &:not(:last-child) {
            margin-right: 20px;
        }
    }
}
</style>