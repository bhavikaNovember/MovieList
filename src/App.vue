<template>
<div id="app">
    <nav>
        <router-link to="/signup">Signup</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/movie-list">Movie List</router-link>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 60px;
}

nav {
    width: 100%;
    background-color: #ebf6f7;
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.nav-link {
    color: white;
    font-weight: bold;
    padding: 1rem;
}
</style>
