import { assign, retrive } from '../utility/assign-retrive.js'

// H| function retriveAllDataFromDatabaseToInputEl
export default function retriveAllDataFromDatabaseToInputEl(obj) {
	document.querySelectorAll('.inputBox').forEach(El => {
		const storepath = El.getAttribute('data-storepath').split('ю')
		const command = El.getAttribute('data-command')

		let retrivedValue = retrive(obj, storepath, command)
		if (retrivedValue != "don't have any value to be retrived" && retrivedValue != 0) {

			if (typeof retrivedValue == "string" && retrivedValue.includes("bars")) {
				retrivedValue = retrivedValue.replace("bars", "") * 1
			}

			El.value = retrivedValue
		}
	})

	document.querySelectorAll('[data-unit]').forEach(El => {
		const storepath = El.getAttribute('data-storepath').split('ю')
		// const command = El.getAttribute('data-command')
		El.innerHTML = retrive(obj, storepath)
	})
}