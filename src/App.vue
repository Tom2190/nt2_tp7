<template>
  <div id="app">
    <JuegoColores/>
  </div>
</template>

<script>
import JuegoColores from './components/JuegoColores.vue'

export default {
  name: 'App',
  components: {
    JuegoColores
  }
}
</script>

<style>
body {
	background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}
h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;
}
</style>


