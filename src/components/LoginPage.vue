<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <label for="name">Name:</label>
      <input v-model="form.name" type="text" id="name" required />

      <label for="password">Password:</label>
      <input v-model="form.password" type="password" id="password" required />

      <button type="submit">Login</button>
    </form>
   
  </div>
</template>
<script>
import CryptoJS from 'crypto-js';
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    };
  },
  methods: {
    async handleLogin() {
      const encryptedPassword = CryptoJS.AES.encrypt(this.form.password, 'secret-key').toString();

      try {
        const response = await axios.post('api_url', {
          ...this.form,
          password: encryptedPassword
        });
        
        if (response.data.success) {
          this.$router.push('/movie-list'); 
        } 
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  }
};
</script>


<style scoped>
 .login-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fffbfb;
    
   
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, select {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
</style>
