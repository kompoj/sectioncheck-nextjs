import { assign, retrive } from '../utility/assign-retrive.js'


export default function ResultPrintOutToOutputEl(obj) {
	document.querySelectorAll(".outputBox").forEach(El => {
		if (El.getAttribute("data-round") != "") {
			const round = El.getAttribute("data-round") * 1
			El.innerHTML = Math.round(retrive(obj, El.getAttribute("data-storepath").split('ю')) * 10 ** round) / 10 ** round
		} else {
			El.innerHTML = retrive(obj, El.getAttribute("data-storepath").split('ю'))
		}
	})
}