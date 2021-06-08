<template>
    <div id="header" :style="{ 'background-color': headerColor }">
		<h1>The Great <br>
			<span id="colorDisplay"> {{ pickedColor.toUpperCase() }} </span>
			<br>
			Guessing Game</h1>
	</div>
</template>


<script lang="js">
export default {
    name: 'src-componentes-header',
    props: {
    pickedColor: String,
    headerColor: String
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