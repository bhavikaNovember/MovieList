<template>
    <div class="signup-container">
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignup">
        <label for="name">Name:</label>
        <input v-model="form.name" type="text" id="name" required />
  
        <label for="email">Email:</label>
        <input v-model="form.email" type="email" id="email" required />
  
        <label for="phone">Phone Number:</label>
        <input v-model="form.phone" type="tel" id="phone" required />
  
        <label for="profession">Profession:</label>
        <select v-model="form.profession" id="profession" required>
          <option value="" disabled>Select your profession</option>
          <option value="Actress">Actress</option>
          <option value="Dancer">Dancer</option>
          <option value="Producer">Producer</option>
          <option value="Journalist">Journalist</option>
          <option value="Sports">Sports</option>

        </select>
  
        <label for="password">Password:</label>
        <input v-model="form.password" type="password" id="password" required />
  
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import CryptoJS from 'crypto-js';
  import axios from 'axios';
  
  export default {
    name:'SignupPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          profession: '',
          password: ''
        }
      };
    },
    methods: {
      async handleSignup() {
 
        const encryptedPassword = CryptoJS.AES.encrypt(this.form.password, 'secret-key').toString();
  
        try {
          await axios.post('api_url', {
            ...this.form,
            password: encryptedPassword
          });
  
          console.log('Registration successful!');
        } catch (error) {
        
          console.error('Registration failed:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
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
  