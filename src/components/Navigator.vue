<template>

  <div id="navigator">
    <button id="reset" @click="restart">{{ mostrarRestartTextContent }}</button>
    <span id="message">{{ mostrarMessageDisplay }}</span>

    <button id="easy" :class="!this.isHard && 'selected'" @click="botonEasy">Easy</button>
    <button id="hard" :class="this.isHard && 'selected'" @click="botonHard">Hard</button>
  </div>

</template>


<script lang="js">
export default {

    name: 'src-componentes-navigator',
	props: {
  	},
	data () {
      return {
		  isHard: true,
		  colorCount: 6
	  }
    },
	methods: {
		restart() {
			this.$store.dispatch('restartAction',this.colorCount)
		},
        botonEasy () {
			this.isHard = false
            this.colorCount = 3
			this.$store.dispatch('cambiarDificultad',this.isHard,this.colorCount)
		    this.restart()
        },

        botonHard () {
	        this.isHard = true
		    this.colorCount = 6
			this.$store.dispatch('cambiarDificultad',this.isHard,this.colorCount)
		    this.restart()
        },
	},
	computed: {
		mostrarRestartTextContent() {
			return this.$store.state.restartTextContent
		},
		mostrarMessageDisplay() {
      		return this.$store.state.messageDisplay;
    	},
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