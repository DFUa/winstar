<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">View posts</router-link>
      <router-link to="/AddPost">Add post</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
  background-color: lightgrey;
}
*{
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  padding: 15px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  a {
    text-decoration: none;
    font-weight: bold;
    color: grey;
    &.router-link-exact-active {
      color: black;
      text-decoration: underline;
    }
    &:not(:last-child){
      margin-right: 30px;
    }
  }
}
.container{
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 15px;
}
form {
    background-color: #fff;
    padding: 15px;

    .add-post-header {
        font-weight: 600;
        display: block;
        margin-bottom: 15px;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        padding: 10px 15px;
        margin-bottom: 15px;
        font-family: inherit;
    }

    textarea {
        resize: none;
        height: 100px;
    }
}
</style>
