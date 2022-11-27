import { assign, retrive } from '../utility/assign-retrive.js'

import retriveAllDataFromDatabaseToInputEl from './retriveAllDataFromDatabaseToInputEl.js'
import { calculateAndUpdateResult } from './calculateAndUpdateResult.js'




export function listenChangeFromInputElAndAssignToDatabase(obj) {


	// H| querySelectorAll inputBox
	document.querySelectorAll(".inputBox").forEach(El => {
		El.addEventListener("focus", function (e) {
			El.classList.add("modified")

			document.querySelectorAll(".outputBox").forEach(El => {
				El.classList.add("modified")
			})
		})


		El.addEventListener('wheel', () => { })

		El.addEventListener("input", function (e) {
			const storepath = El.getAttribute("data-storepath").split('ю')
			const command = El.getAttribute("data-command")
			assign(obj, storepath, El.value * 1, command)

			// console.log(obj)
			retriveAllDataFromDatabaseToInputEl(obj)
			calculateAndUpdateResult(obj)
			// 	redrawSVG()
		})

	})
}