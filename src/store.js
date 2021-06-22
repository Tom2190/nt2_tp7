import Vue from 'vue'
import Vuex from 'vuex'
import { createNewColors, pickColor } from "./funcionesColores.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colorCount: 6,
        colors: [],
        messageDisplay: "",
        isHard: true,
		restartTextContent: "",
        pickedColor: "",
		headerColor: "steelblue"
    },

    mutations : {

		resultado(state,color) {
			if (color === state.pickedColor) {
				state.messageDisplay = "You Picked Right!"
				state.restartTextContent = "Play Again!"
				state.headerColor = state.pickedColor
				state.colors = state.colors.map(() => state.pickedColor)
			} else {
				state.messageDisplay = "Try Again!"
				state.restartTextContent = "New Colors!"
				state.headerColor = "steelblue"
				state.colors = state.colors.map((c) => c === color ? "#232323" : c)
			}
        },
        restart(state,colorCount) {
	        state.colors = createNewColors(colorCount)
	        state.pickedColor = state.colors[pickColor(state.isHard)]
	        state.messageDisplay = ""
	        state.restartTextContent = "New Colors!"
        },
        
        setDificultad(state, dificultad, conteoColor) {
            state.isHard = dificultad
            state.colorCount = conteoColor
        }
    },
    actions : {
        restartAction({commit}, colorCount) {
            commit('restart',colorCount)
        },
        cambiarDificultad({commit}, dificultad, conteoColor) {
            commit('setDificultad',dificultad,conteoColor)
        },
        resultadoAction({commit}, color) {
            commit('resultado',color)
        }
    }
})