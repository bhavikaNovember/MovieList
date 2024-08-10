
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import MovieListPage from './components/MovieListPage.vue';
import SignupPage from './components/SignupPage.vue';



const routes = [
    { path: '/signup', name: 'Sign-up', component: SignupPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/movie-list', name: 'MovieList', component: MovieListPage }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});


const app = createApp(App);
app.use(router);
app.mount('#app');
