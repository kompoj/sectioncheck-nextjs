import { assign, retrive } from './assign-retrive.js'
// import { calculateAndUpdateResult } from '../slab_load_to_beam_spt.js'
import convertUnit from './convertUnit.js'
import retriveAllDataFromDatabaseToInputEl from '../core_function/retriveAllDataFromDatabaseToInputEl.js'
import { calculateAndUpdateResult } from '../core_function/calculateAndUpdateResult.js'




export default function kN_kg_switch(obj) {

	// H| querySelector('.kN-kg-switch')
	const kN_kg_switch = document.querySelector('.kN-kg-switch')
	kN_kg_switch.addEventListener('click', function () {
		if (kN_kg_switch.getAttribute("data-unit-toggle") == "kN") {
			kN_kg_switch.setAttribute("data-unit-toggle", "kg")
		} else if (kN_kg_switch.getAttribute("data-unit-toggle") == "kg") {
			kN_kg_switch.setAttribute("data-unit-toggle", "kN")
		}


		document.querySelectorAll("[data-unit]").forEach(El => {
			// El = unit option element

			//get current(old) unit
			let unitStorepath = El.getAttribute("data-storepath").split("ю")
			let oldUnit = retrive(obj, unitStorepath)

			//get current(old) value
			let ValueStorepath = [...unitStorepath]
			ValueStorepath[ValueStorepath.length - 1] = 0 //unit storepath is stored at materialstrengthюconcreteю1, meanwhile value is stored at materialstrengthюconcreteю0
			let oldValue = retrive(obj, ValueStorepath)


			let unitArray = El.getAttribute("data-unit").split("ю")
			let newUnit
			let newConvertedValue

			if (kN_kg_switch.getAttribute("data-unit-toggle") == "kN") {
				//get and set target(new) unit
				newUnit = unitArray[1]
				assign(obj, unitStorepath, newUnit)

				if (El.previousElementSibling.classList.contains("inputBox")) {
					El.previousElementSibling.setAttribute("step", 10 ** unitArray[0])
					newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** -unitArray[0]) / (10 ** -unitArray[0])
					assign(obj, ValueStorepath, newConvertedValue)

				} else if (El.previousElementSibling.classList.contains("outputBox")) {
					El.previousElementSibling.setAttribute("data-round", unitArray[0])
				}

			} else if (kN_kg_switch.getAttribute("data-unit-toggle") == "kg") {
				newUnit = unitArray[3]
				// console.log(newUnit, storepath)
				assign(obj, unitStorepath, newUnit)
				if (El.previousElementSibling.classList.contains("inputBox")) {
					El.previousElementSibling.setAttribute("step", 10 ** unitArray[2])
					newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** -unitArray[2]) / (10 ** -unitArray[2])
					assign(obj, ValueStorepath, newConvertedValue)

				} else if (El.previousElementSibling.classList.contains("outputBox")) {
					El.previousElementSibling.setAttribute("data-round", unitArray[2])
				}
			}



		})

		retriveAllDataFromDatabaseToInputEl(obj)
		calculateAndUpdateResult(obj)
	})
}