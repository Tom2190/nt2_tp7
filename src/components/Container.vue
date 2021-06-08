<template>
    <div id="container">
		<div
      		v-for="(color, idx) in coloresContainer"
      		:key="idx"
      		class="square"
      		@click="$emit('resultado', color, idx)"
      		:style="{ 'background-color': color }"
    	></div>
	</div>
</template>


<script lang="js">
export default {
    name: 'src-componentes-container',
    props: {
    	colors: Array,
  	},
	data() {
	  return {
		  coloresContainer: this.colors
	  }
	},
	watch: {
    	colors() {
      		this.coloresContainer = this.colors
    	}
	}
}
</script>


<style scoped lang="css">

.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;

}
#container {
	margin: 20px auto;
	max-width: 600px;
}

</style>