import { assign, retrive } from './utility/assign-retrive.js'

// import styles from '/styles/components/Nav.module.css'
// GET http://localhost:3000/styles/components/Nav.module.css net::ERR_ABORTED 404 (Not Found)


const slab_load_to_beam = {
	initial: {
		S: 3,
		L: 5,
		wu: 100
	},
	result: {
	}

}


inititialize()
function inititialize() {
	retriveAllDataFromDatabaseToInputEl()
	calculateAndUpdateResult()
	// redrawSVG()
}






document.querySelectorAll(".accordion").forEach(El => {
	El.querySelector(".accordion-header").addEventListener("click", () => {
		El.classList.toggle("collapsed")
	})
})



function convertUnit(newUnit, oldValue, oldUnit) {
	if (newUnit == oldUnit) {
		return oldValue
	}

	else if (newUnit == "ksc" && oldUnit == "MPa") {
		return oldValue / 9.81 * 100
	} else if (newUnit == "MPa" && oldUnit == "ksc") {
		return oldValue * 9.81 / 100
	}

	else if (newUnit == "kgm" && oldUnit == "kNm") {
		return oldValue * 1000 / 9.81
	} else if (newUnit == "kNm" && oldUnit == "kgm") {
		return oldValue * 9.81 / 1000
	}
}






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
		assign(slab_load_to_beam, storepath, El.value * 1, command)

		// console.log(slab_load_to_beam)
		retriveAllDataFromDatabaseToInputEl()
		calculateAndUpdateResult()
		// 	redrawSVG()
	})

})

/*

// H| querySelector('.kN-kg-switch')
const kN_kg_switch = document.querySelector('.kN-kg-switch')
kN_kg_switch.addEventListener('click', function () {
	if (kN_kg_switch.getAttribute("data-unitToggle") == "kN") {
		kN_kg_switch.setAttribute("data-unitToggle", "kg")
	} else if (kN_kg_switch.getAttribute("data-unitToggle") == "kg") {
		kN_kg_switch.setAttribute("data-unitToggle", "kN")
	}


	document.querySelectorAll("[data-unit]").forEach(El => {
		// El = unit option element

		//get current(old) unit
		let unitStorepath = El.getAttribute("data-storepath").split("ю")
		let oldUnit = retrive(slab_load_to_beam, unitStorepath)

		//get current(old) value
		let ValueStorepath = [...unitStorepath]
		ValueStorepath[ValueStorepath.length - 1] = 0 //unit storepath is stored at materialstrengthюconcreteю1, meanwhile value is stored at materialstrengthюconcreteю0
		let oldValue = retrive(slab_load_to_beam, ValueStorepath)


		let unitArray = El.getAttribute("data-unit").split("ю")
		let newUnit

		if (kN_kg_switch.getAttribute("data-unitToggle") == "kN") {
			//get and set target(new) unit
			newUnit = unitArray[1]
			assign(slab_load_to_beam, unitStorepath, newUnit)

			if (El.previousElementSibling.classList.contains("inputBox")) {
				El.previousElementSibling.setAttribute("step", 10 ** -unitArray[0])
				newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** unitArray[0]) / (10 ** unitArray[0])
				assign(slab_load_to_beam, ValueStorepath, newConvertedValue)

			} else if (El.previousElementSibling.classList.contains("outputBox")) {
				El.previousElementSibling.setAttribute("data-round", unitArray[0])
			}

		} else if (kN_kg_switch.getAttribute("data-unitToggle") == "kg") {
			newUnit = unitArray[3]
			// console.log(newUnit, storepath)
			assign(slab_load_to_beam, unitStorepath, newUnit)
			if (El.previousElementSibling.classList.contains("inputBox")) {
				El.previousElementSibling.setAttribute("step", 10 ** -unitArray[2])
				newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** unitArray[2]) / (10 ** unitArray[2])
				assign(slab_load_to_beam, ValueStorepath, newConvertedValue)

			} else if (El.previousElementSibling.classList.contains("outputBox")) {
				El.previousElementSibling.setAttribute("data-round", unitArray[2])
			}
		}



	})

	retriveAllDataFromDatabaseToInputEl()
	calculateAndUpdateResult()
})
*/

// H| function retriveAllDataFromDatabaseToInputEl
function retriveAllDataFromDatabaseToInputEl() {
	document.querySelectorAll('.inputBox').forEach(El => {
		const storepath = El.getAttribute('data-storepath').split('ю')
		const command = El.getAttribute('data-command')

		let retrivedValue = retrive(slab_load_to_beam, storepath, command)
		if (retrivedValue != "don't have any value to be retrived" && retrivedValue != 0) {

			if (typeof retrivedValue == "string" && retrivedValue.includes("bars")) {
				retrivedValue = retrivedValue.replace("bars", "") * 1
			}

			El.value = retrivedValue
		}
	})

	// document.querySelectorAll('[data-unit]').forEach(El => {
	// 	const storepath = El.getAttribute('data-storepath').split('ю')
	// 	// const command = El.getAttribute('data-command')
	// 	El.innerHTML = retrive(slab_load_to_beam, storepath)
	// })
}

// H| function calculateAndUpdateResult
function calculateAndUpdateResult() {
	slab_load_to_beam.result.m = slab_load_to_beam.initial.S / slab_load_to_beam.initial.L
	if (slab_load_to_beam.initial.L / slab_load_to_beam.initial.S > 2) {
		slab_load_to_beam.result.onewayortwoway = "one way"
		slab_load_to_beam.result.VL = slab_load_to_beam.initial.wu * slab_load_to_beam.initial.S / 2
		slab_load_to_beam.result.VS = 0
	} else {
		slab_load_to_beam.result.onewayortwoway = "two way"
		slab_load_to_beam.result.VL = slab_load_to_beam.initial.wu * slab_load_to_beam.initial.S / 3 * (3 - slab_load_to_beam.result.m ** 2) / 2
		slab_load_to_beam.result.VS = slab_load_to_beam.initial.wu * slab_load_to_beam.initial.S / 3
	}



	// console.log("finished calculating result")

	ResultPrintOutToOutputEl()
	console.log(slab_load_to_beam)
}



function ResultPrintOutToOutputEl() {
	document.querySelectorAll(".outputBox").forEach(El => {
		if (El.getAttribute("data-round") != "") {
			const round = El.getAttribute("data-round") * 1
			El.innerHTML = Math.round(retrive(slab_load_to_beam, El.getAttribute("data-storepath").split('ю')) * 10 ** round) / 10 ** round
		} else {
			El.innerHTML = retrive(slab_load_to_beam, El.getAttribute("data-storepath").split('ю'))
		}
	})
}

/*


// H| function redrawSVG
function redrawSVG() {
	redrawSVGRect()
	redrawSVGbar()
	redrawPositiveStrainDiagram()
}

function redrawSVGRect() {
	const svg = document.querySelector(".section-svg")
	const strokeWidth = 3
	// const strokeWidth = Math.max(slab_load_to_beam.dimension.height, slab_load_to_beam.dimension.width) / 100
	svg.setAttribute("viewBox", `${-strokeWidth / 2} ${-20} ${slab_load_to_beam.dimension.width + strokeWidth} ${slab_load_to_beam.dimension.height + 40}`);

	const parameter_rect = svg.querySelector(".parameter-rect")
	parameter_rect.setAttribute("width", slab_load_to_beam.dimension.width)
	parameter_rect.setAttribute("height", slab_load_to_beam.dimension.height)
	parameter_rect.setAttribute("stroke-width", strokeWidth)
	parameter_rect.setAttribute("rx", 5)

	const outer_stirrup_rect = svg.querySelector(".outer-stirrup-rect")
	outer_stirrup_rect.setAttribute("width", slab_load_to_beam.dimension.width - slab_load_to_beam.dimension.covering * 2)
	outer_stirrup_rect.setAttribute("height", slab_load_to_beam.dimension.height - slab_load_to_beam.dimension.covering * 2)
	outer_stirrup_rect.setAttribute("x", slab_load_to_beam.dimension.covering)
	outer_stirrup_rect.setAttribute("y", slab_load_to_beam.dimension.covering)
	outer_stirrup_rect.setAttribute("rx", 17)

	const inner_stirrup_rect = svg.querySelector(".inner-stirrup-rect")
	inner_stirrup_rect.setAttribute("width", slab_load_to_beam.dimension.width - slab_load_to_beam.dimension.covering * 2 - slab_load_to_beam.stirrup * 2)
	inner_stirrup_rect.setAttribute("height", slab_load_to_beam.dimension.height - slab_load_to_beam.dimension.covering * 2 - slab_load_to_beam.stirrup * 2)
	inner_stirrup_rect.setAttribute("x", slab_load_to_beam.dimension.covering + slab_load_to_beam.stirrup)
	inner_stirrup_rect.setAttribute("y", slab_load_to_beam.dimension.covering + slab_load_to_beam.stirrup)
	inner_stirrup_rect.setAttribute("rx", 8)
}
function redrawSVGbar() {
	// console.log("start drawing SVG")

	const TB = ["topbar", "bottombar"]
	const FS = ["firstLayerList", "secondLayerList"]

	for (let i = 0; i < TB.length; i++) {
		for (let j = 0; j < FS.length; j++) {
			const svgBarLayerGroup = document.querySelector(`.section-svg g.${TB[i]}.${FS[j]}`)

			// console.log(slab_load_to_beam[TB[i]][FS[j]])
			let string = ""
			for (let index = 0; index < slab_load_to_beam[TB[i]][FS[j]].length; index++) {
				string += `<circle class='' cx='${slab_load_to_beam[TB[i]][FS[j]][index].x * 1}' cy='${slab_load_to_beam[TB[i]][FS[j]][index].y * 1}' r='${slab_load_to_beam[TB[i]][FS[j]][index].diameter * 1 / 2}'
						data-storepath='${TB[i]}ю^${FS[j]}ю${index}юdiameter' />`
			}
			svgBarLayerGroup.innerHTML = string



			svgBarLayerGroup.querySelectorAll(`.section-svg g.${TB[i]}.${FS[j]} circle`).forEach(circleEl => {
				circleEl.addEventListener("click", function (e) {
					const storepath = circleEl.getAttribute("data-storepath").split("ю")

					let newDiameter = prompt("Please enter new diameter", retrive(slab_load_to_beam, storepath));
					if (newDiameter != null) {
						assign(slab_load_to_beam, storepath, newDiameter * 1)
						retriveAllDataFromDatabaseToInputEl()
						calculateAndUpdateResult()
						redrawSVG()
					}

				})

				circleEl.addEventListener("mouseover", function (e) {
					// console.log("mouseover")
				})

			})
		}
	}

}

function redrawPositiveStrainDiagram() {

	const trace1 = {
		x: [],
		y: [],
		type: 'scatter',
		mode: 'lines+text',
		text: [],
		textposition: 'bottomright',
		textfont: {
			size: 10,
		},
		line: {
			color: 'rgb(0, 0, 0)',
			width: 1
		}
	};

	if (slab_load_to_beam.positive.εt != NaN && slab_load_to_beam.positive.c != NaN && slab_load_to_beam.positive.dt != NaN && slab_load_to_beam.positive.dt != 0) {
		trace1.x = [0, 0.003, 0, -slab_load_to_beam.positive.εt, 0, 0]
		trace1.y = [0, 0, slab_load_to_beam.positive.c, slab_load_to_beam.positive.dt, slab_load_to_beam.positive.dt, 0]
		trace1.text = ["", "", "", `ε=${Math.round(slab_load_to_beam.positive.εt * 10000) / 10000}`, "", ""]
	} else {
		trace1.x = []
		trace1.y = []
		trace1.text = []
	}

	const trace2 = {
		x: [0],
		y: [0],
		type: 'scatter',
		mode: 'text',
		text: ["ε=0.003 "],
		textposition: 'bottomleft',
		textfont: {
			size: 10,
		},
	};

	const trace3 = {
		x: [0],
		y: [slab_load_to_beam.positive.c],
		type: 'scatter',
		mode: 'text',
		text: [`c=${Math.round(slab_load_to_beam.positive.c * 100) / 100}mm `],
		textposition: 'left',
		textfont: {
			size: 10,
		},
	};


	const trace4 = {
		x: [-0.002, -0.005],
		y: [],
		type: 'scatter',
		mode: 'lines+text',
		line: {
			color: 'rgb(255, 136, 0)',
			width: 2
		},
		text: ["0.002", "0.005"],
		textposition: 'top',
		textfont: {
			size: 8,
		},
	};
	trace4.y = JSON.parse(`[${slab_load_to_beam.dimension.height},${slab_load_to_beam.dimension.height}]`)

	const trace5 = {
		x: [-0.005, -0.012],
		y: [],
		type: 'scatter',
		mode: 'lines+text',
		line: {
			color: 'rgb(20, 200, 80)',
			width: 2
		},
		text: ["", "0.012"],
		textposition: 'topright',
		textfont: {
			size: 8,
		},
	};
	trace5.y = JSON.parse(`[${slab_load_to_beam.dimension.height},${slab_load_to_beam.dimension.height}]`)


	const trace6 = {
		x: [],
		y: [],
		type: 'scatter',
		mode: 'lines+text',
		line: {
			color: 'rgb(255, 0,0)',
			width: 2
		},
		text: ["", "0.012"],
		textposition: 'bottom',
		textfont: {
			size: 8,
		},
	};
	trace6.x = [0, -slab_load_to_beam.materialStrength.εy]
	trace6.y = JSON.parse(`[${slab_load_to_beam.dimension.height},${slab_load_to_beam.dimension.height}]`)
	trace6.text = ["", `εy=${slab_load_to_beam.materialStrength.εy}`]

	const data = [trace1, trace2, trace3, trace4, trace5, trace6];
	// const data = [trace1];

	const layout = {
		// title: 'Create a Static Chart',
		showlegend: false,
		margin: {
			t: 0,
			b: 0,
			l: 0,
			r: 0,
			pad: 0
		},
		xaxis: {
			// range: 
			visible: false,
			showgrid: false,
		},
		yaxis: {
			range: [],
			// autorange: "reversed"
			visible: false,
			showgrid: false,
		},
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)'
	};
	layout.yaxis.range = [slab_load_to_beam.dimension.height + 20, -20]


	Plotly.newPlot('myDiv1', data, layout, {
		displayModeBar: false,
		staticPlot: true
	});
	// Plotly.newPlot('myDiv2', data, layout, {
	// 	displayModeBar: false,
	// 	staticPlot: true
	// });
}







*/