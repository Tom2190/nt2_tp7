<template>

  <div id="navigator">
    <button id="reset" @click="$emit('restart')">{{ restartTextContent }}</button>
    <span id="message">{{ messageDisplay }}</span>

    <button id="easy" :class="!isHard && 'selected'" @click="$emit('botonEasy')">Easy</button>
    <button id="hard" :class="isHard && 'selected'" @click="$emit('botonHard')">Hard</button>
  </div>

</template>


<script lang="js">
export default {

    name: 'src-componentes-navigator',
	props: {
		isHard: Boolean,
		messageDisplay: String,
		restartTextContent: String
  },
	data () {
      return {}
    }
}
</script>


<style scoped lang="css">
#navigator {
	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;
}
#message {
	color: steelblue;
	display: inline-block;
	width: 20%;
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
}
.selected {
	background-color: steelblue;
	color: white;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
</style>