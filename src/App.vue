<template>
  <div id="app">
    <Header/>
    <Navigator/>
    <Container/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigator from "./components/Navigator.vue";
import Container from "./components/Container.vue";

export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Container,
  },
  mounted() {
    this.$store.dispatch("restartAction", this.$store.state.colorCount);
  },
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


