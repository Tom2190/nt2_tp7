<template>
  <div id="app">
    <Header :pickedColor="pickedColor" :headerColor="headerColor"/>
    <Navigator
      :isHard="isHard"
      @botonEasy="botonEasy"
      @botonHard="botonHard"
      @restart="restart"
      :messageDisplay="messageDisplay"
      :restartTextContent="restartTextContent"
    />
    <Container :colors="colors" @resultado="resultado" />
  </div>
</template>



<script lang="js">

import Header from './Header.vue'
import Navigator from './Navigator.vue'
import Container from './Container.vue'

export default {

    name: 'src-componentes-juegoColores',
	components : {
      Header,
	  Navigator,
	  Container
    },
	data () {
      return {
        colorCount: 6,
        isHard: true,
        colors: [],
        messageDisplay: "",
		restartTextContent: "",
        pickedColor: "",
		headerColor: "steelblue"
      }
    },
	mounted() {
    	this.restart()
  	},
    methods: {

        botonEasy () {
	        this.isHard = false
		    this.colorCount = 3
		    this.restart()
        },

        botonHard () {
	        this.isHard = true
		    this.colorCount = 6
		    this.restart()
        },

        restart() {
	        this.colors = this.createNewColors(this.colorCount)
	        this.pickedColor = this.colors[this.pickColor()]
	        this.messageDisplay = ""
	        this.restartTextContent = "New Colors!"
        },

        pickColor() {
	        var quantity
	        if (this.isHard) {
		    	quantity = 6
        	} else {
		    	quantity = 3
	        }
	    	return Math.floor(Math.random() * quantity )
        },
        
        createNewColors(numbers) {
        	var arr = []
	    	for (var i = 0; i < numbers; i++) {
		    	arr.push(this.createRandomStringColor())
	        }
        	return arr
        },
        
        createRandomStringColor(){
            var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")"
            return newColor
        },
        
        randomInt() {
	        return Math.floor(Math.random() * 256);
        },

		resultado(color) {
			if (color === this.pickedColor) {
				this.messageDisplay = "You Picked Right!"
				this.restartTextContent = "Play Again!"
				this.headerColor = this.pickedColor
				this.colors = this.colors.map(() => this.pickedColor)
			} else {
				this.messageDisplay = "Try Again!"
				this.restartTextContent = "New Colors!"
				this.headerColor = "steelblue"
				this.colors = this.colors.map((c) => c === color ? "#232323" : c)
			}
        }
    }
}

</script>


<style scoped lang="css">

</style>

