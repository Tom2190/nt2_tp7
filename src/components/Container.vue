<template>
    <div id="container">
		<div
      		v-for="(color, idx) in getColors"
      		:key="idx"
      		class="square"
      		@click="resultado(color)"
      		:style="{'background-color': color}"
    	></div>
	</div>
</template>


<script lang="js">
export default {
    name: 'src-componentes-container',
    props: {
  	},
	data() {
	  return {}
	},
	methods: {
		resultado(color) {
		this.$store.dispatch('resultadoAction', color)
		}
	},
	computed: {
		getColors() {
			return this.$store.state.colors
		}
	},
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