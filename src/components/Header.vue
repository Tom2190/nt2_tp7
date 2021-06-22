<template>
    <div id="header" :style="{ 'background-color': mostrarHeaderColor }">
		<h1>The Great <br>
			<span id="colorDisplay"> {{ mostrarPickedColor.toUpperCase() }} </span>
			<br>
			Guessing Game</h1>
	</div>
</template>


<script lang="js">
export default {
    name: 'src-componentes-header',
    props: {
  },
	computed: {
		mostrarHeaderColor() {
			return this.$store.state.headerColor
		},
		mostrarPickedColor() {
			return this.$store.state.pickedColor
		}
	}
}
</script>


<style scoped lang="css">
#header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
#colorDisplay {
	font-size: 200%;
}
</style>