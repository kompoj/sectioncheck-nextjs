import { assign, retrive } from './utility/assign-retrive.js'

// import styles from '/styles/components/Nav.module.css'
// GET http://localhost:3000/styles/components/Nav.module.css net::ERR_ABORTED 404 (Not Found)


const SLF = {
	iput: {
		fc: [28, "MPa"],
		b0: [1000, "mm"],
		d: [300, "mm"]
	},
	oput: {
		punchingShearCap: ["", "kN"]
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

	else if (newUnit == "kg" && oldUnit == "kN") {
		return oldValue * 1000 / 9.81
	} else if (newUnit == "kN" && oldUnit == "kg") {
		return oldValue * 9.81 / 1000
	}

	else if (newUnit == "cm" && oldUnit == "mm") {
		return oldValue / 10
	} else if (newUnit == "mm" && oldUnit == "cm") {
		return oldValue * 10
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
		assign(SLF, storepath, El.value * 1, command)

		// console.log(SLF)
		retriveAllDataFromDatabaseToInputEl()
		calculateAndUpdateResult()
		// 	redrawSVG()
	})

})



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
		let oldUnit = retrive(SLF, unitStorepath)

		//get current(old) value
		let ValueStorepath = [...unitStorepath]
		ValueStorepath[ValueStorepath.length - 1] = 0 //unit storepath is stored at materialstrengthюconcreteю1, meanwhile value is stored at materialstrengthюconcreteю0
		let oldValue = retrive(SLF, ValueStorepath)


		let unitArray = El.getAttribute("data-unit").split("ю")
		let newUnit
		let newConvertedValue

		if (kN_kg_switch.getAttribute("data-unit-toggle") == "kN") {
			//get and set target(new) unit
			newUnit = unitArray[1]
			assign(SLF, unitStorepath, newUnit)

			if (El.previousElementSibling.classList.contains("inputBox")) {
				El.previousElementSibling.setAttribute("step", 10 ** unitArray[0])
				newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** -unitArray[0]) / (10 ** -unitArray[0])
				assign(SLF, ValueStorepath, newConvertedValue)

			} else if (El.previousElementSibling.classList.contains("outputBox")) {
				El.previousElementSibling.setAttribute("data-round", unitArray[0])
			}

		} else if (kN_kg_switch.getAttribute("data-unit-toggle") == "kg") {
			newUnit = unitArray[3]
			// console.log(newUnit, storepath)
			assign(SLF, unitStorepath, newUnit)
			if (El.previousElementSibling.classList.contains("inputBox")) {
				El.previousElementSibling.setAttribute("step", 10 ** unitArray[2])
				newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** -unitArray[2]) / (10 ** -unitArray[2])
				assign(SLF, ValueStorepath, newConvertedValue)

			} else if (El.previousElementSibling.classList.contains("outputBox")) {
				El.previousElementSibling.setAttribute("data-round", unitArray[2])
			}
		}



	})

	retriveAllDataFromDatabaseToInputEl()
	calculateAndUpdateResult()
})


// H| function retriveAllDataFromDatabaseToInputEl
function retriveAllDataFromDatabaseToInputEl() {
	document.querySelectorAll('.inputBox').forEach(El => {
		const storepath = El.getAttribute('data-storepath').split('ю')
		const command = El.getAttribute('data-command')

		let retrivedValue = retrive(SLF, storepath, command)
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
		El.innerHTML = retrive(SLF, storepath)
	})
}

// H| function calculateAndUpdateResult
function calculateAndUpdateResult() {
	// convertUnit(newUnit, oldValue, oldUnit)

	let fc_MPa = convertUnit("MPa", SLF.iput.fc[0], SLF.iput.fc[1])
	let b0_mm = convertUnit("mm", SLF.iput.b0[0], SLF.iput.b0[1])
	let d_mm = convertUnit("mm", SLF.iput.d[0], SLF.iput.d[1])

	// 0.33 for N unit, 1.06 for kN unit, coeff diff = sqrt(9.81)
	let punchingshear_kN = 0.332 * 0.85 * Math.sqrt(fc_MPa) * b0_mm * d_mm / 1000
	SLF.oput.punchingShearCap[0] = convertUnit(SLF.oput.punchingShearCap[1], punchingshear_kN, "kN")





	// console.log("finished calculating result")

	ResultPrintOutToOutputEl()
	console.log(SLF)
}



function ResultPrintOutToOutputEl() {
	document.querySelectorAll(".outputBox").forEach(El => {
		if (El.getAttribute("data-round") != "") {
			const round = El.getAttribute("data-round") * 1
			El.innerHTML = Math.round(retrive(SLF, El.getAttribute("data-storepath").split('ю')) * 10 ** round) / 10 ** round
		} else {
			El.innerHTML = retrive(SLF, El.getAttribute("data-storepath").split('ю'))
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
	// const strokeWidth = Math.max(SLF.dimension.height, SLF.dimension.width) / 100
	svg.setAttribute("viewBox", `${-strokeWidth / 2} ${-20} ${SLF.dimension.width + strokeWidth} ${SLF.dimension.height + 40}`);

	const parameter_rect = svg.querySelector(".parameter-rect")
	parameter_rect.setAttribute("width", SLF.dimension.width)
	parameter_rect.setAttribute("height", SLF.dimension.height)
	parameter_rect.setAttribute("stroke-width", strokeWidth)
	parameter_rect.setAttribute("rx", 5)

	const outer_stirrup_rect = svg.querySelector(".outer-stirrup-rect")
	outer_stirrup_rect.setAttribute("width", SLF.dimension.width - SLF.dimension.covering * 2)
	outer_stirrup_rect.setAttribute("height", SLF.dimension.height - SLF.dimension.covering * 2)
	outer_stirrup_rect.setAttribute("x", SLF.dimension.covering)
	outer_stirrup_rect.setAttribute("y", SLF.dimension.covering)
	outer_stirrup_rect.setAttribute("rx", 17)

	const inner_stirrup_rect = svg.querySelector(".inner-stirrup-rect")
	inner_stirrup_rect.setAttribute("width", SLF.dimension.width - SLF.dimension.covering * 2 - SLF.stirrup * 2)
	inner_stirrup_rect.setAttribute("height", SLF.dimension.height - SLF.dimension.covering * 2 - SLF.stirrup * 2)
	inner_stirrup_rect.setAttribute("x", SLF.dimension.covering + SLF.stirrup)
	inner_stirrup_rect.setAttribute("y", SLF.dimension.covering + SLF.stirrup)
	inner_stirrup_rect.setAttribute("rx", 8)
}
function redrawSVGbar() {
	// console.log("start drawing SVG")

	const TB = ["topbar", "bottombar"]
	const FS = ["firstLayerList", "secondLayerList"]

	for (let i = 0; i < TB.length; i++) {
		for (let j = 0; j < FS.length; j++) {
			const svgBarLayerGroup = document.querySelector(`.section-svg g.${TB[i]}.${FS[j]}`)

			// console.log(SLF[TB[i]][FS[j]])
			let string = ""
			for (let index = 0; index < SLF[TB[i]][FS[j]].length; index++) {
				string += `<circle class='' cx='${SLF[TB[i]][FS[j]][index].x * 1}' cy='${SLF[TB[i]][FS[j]][index].y * 1}' r='${SLF[TB[i]][FS[j]][index].diameter * 1 / 2}'
						data-storepath='${TB[i]}ю^${FS[j]}ю${index}юdiameter' />`
			}
			svgBarLayerGroup.innerHTML = string



			svgBarLayerGroup.querySelectorAll(`.section-svg g.${TB[i]}.${FS[j]} circle`).forEach(circleEl => {
				circleEl.addEventListener("click", function (e) {
					const storepath = circleEl.getAttribute("data-storepath").split("ю")

					let newDiameter = prompt("Please enter new diameter", retrive(SLF, storepath));
					if (newDiameter != null) {
						assign(SLF, storepath, newDiameter * 1)
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

	if (SLF.positive.εt != NaN && SLF.positive.c != NaN && SLF.positive.dt != NaN && SLF.positive.dt != 0) {
		trace1.x = [0, 0.003, 0, -SLF.positive.εt, 0, 0]
		trace1.y = [0, 0, SLF.positive.c, SLF.positive.dt, SLF.positive.dt, 0]
		trace1.text = ["", "", "", `ε=${Math.round(SLF.positive.εt * 10000) / 10000}`, "", ""]
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
		y: [SLF.positive.c],
		type: 'scatter',
		mode: 'text',
		text: [`c=${Math.round(SLF.positive.c * 100) / 100}mm `],
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
	trace4.y = JSON.parse(`[${SLF.dimension.height},${SLF.dimension.height}]`)

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
	trace5.y = JSON.parse(`[${SLF.dimension.height},${SLF.dimension.height}]`)


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
	trace6.x = [0, -SLF.materialStrength.εy]
	trace6.y = JSON.parse(`[${SLF.dimension.height},${SLF.dimension.height}]`)
	trace6.text = ["", `εy=${SLF.materialStrength.εy}`]

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
	layout.yaxis.range = [SLF.dimension.height + 20, -20]


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