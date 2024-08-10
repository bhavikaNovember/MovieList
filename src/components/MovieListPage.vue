<template>
    <div class="movie-list-container">
      <h1>Movie List</h1>
      <iframe
        src="https://hoblist.com/api/movieList"
        width="100%"
        height="800px"
        frameborder="0"
      >
      </iframe>
    </div>
  </template>
  
  <script>
  export default {
    name:'MovieListPage',
    data() {
      return {
        iframeSrc: 'https://hoblist.com/api/movieList'
      };
    }
  };
  </script>
  
  <style scoped>
  .movie-list-container {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  
  iframe {
    width: 100%;
    height: 800px; 
    border: none;
  }
  </style>
  
