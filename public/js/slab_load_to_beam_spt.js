import { assign, retrive } from './utility/assign-retrive.js'

// import styles from '/styles/components/Nav.module.css'
// GET http://localhost:3000/styles/components/Nav.module.css net::ERR_ABORTED 404 (Not Found)


const SL2B = {
	iput: {
		S: 3.2,
		L: 5,
		wu: [2.5, "kN/m2"]
	},
	oput: {
		VL: ["", "kN/m"],
		VS: ["", "kN/m"]
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

	else if (newUnit == "kg/m2" && oldUnit == "kN/m2") {
		return oldValue * 1000 / 9.81
	} else if (newUnit == "kN/m2" && oldUnit == "kg/m2") {
		return oldValue * 9.81 / 1000
	}

	else if (newUnit == "kg/m" && oldUnit == "kN/m") {
		return oldValue * 1000 / 9.81
	} else if (newUnit == "kN/m" && oldUnit == "kg/m") {
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
		assign(SL2B, storepath, El.value * 1, command)

		// console.log(SL2B)
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
		let oldUnit = retrive(SL2B, unitStorepath)

		//get current(old) value
		let ValueStorepath = [...unitStorepath]
		ValueStorepath[ValueStorepath.length - 1] = 0 //unit storepath is stored at materialstrengthюconcreteю1, meanwhile value is stored at materialstrengthюconcreteю0
		let oldValue = retrive(SL2B, ValueStorepath)


		let unitArray = El.getAttribute("data-unit").split("ю")
		let newUnit
		let newConvertedValue

		if (kN_kg_switch.getAttribute("data-unit-toggle") == "kN") {
			//get and set target(new) unit
			newUnit = unitArray[1]
			assign(SL2B, unitStorepath, newUnit)

			if (El.previousElementSibling.classList.contains("inputBox")) {
				El.previousElementSibling.setAttribute("step", 10 ** unitArray[0])
				newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** -unitArray[0]) / (10 ** -unitArray[0])
				assign(SL2B, ValueStorepath, newConvertedValue)

			} else if (El.previousElementSibling.classList.contains("outputBox")) {
				El.previousElementSibling.setAttribute("data-round", unitArray[0])
			}

		} else if (kN_kg_switch.getAttribute("data-unit-toggle") == "kg") {
			newUnit = unitArray[3]
			// console.log(newUnit, storepath)
			assign(SL2B, unitStorepath, newUnit)
			if (El.previousElementSibling.classList.contains("inputBox")) {
				El.previousElementSibling.setAttribute("step", 10 ** unitArray[2])
				newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** -unitArray[2]) / (10 ** -unitArray[2])
				assign(SL2B, ValueStorepath, newConvertedValue)

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

		let retrivedValue = retrive(SL2B, storepath, command)
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
		El.innerHTML = retrive(SL2B, storepath)
	})
}

// H| function calculateAndUpdateResult
function calculateAndUpdateResult() {
	SL2B.oput.m = SL2B.iput.S / SL2B.iput.L
	if (SL2B.iput.L / SL2B.iput.S > 2) {
		SL2B.oput.onewayortwoway = "one way"
		SL2B.oput.VL[0] = SL2B.iput.wu[0] * SL2B.iput.S / 2
		SL2B.oput.VS[0] = 0
	} else {
		SL2B.oput.onewayortwoway = "two way"
		SL2B.oput.VL[0] = SL2B.iput.wu[0] * SL2B.iput.S / 3 * (3 - SL2B.oput.m ** 2) / 2
		SL2B.oput.VS[0] = SL2B.iput.wu[0] * SL2B.iput.S / 3
	}



	// console.log("finished calculating result")

	ResultPrintOutToOutputEl()
	console.log(SL2B)
}



function ResultPrintOutToOutputEl() {
	document.querySelectorAll(".outputBox").forEach(El => {
		if (El.getAttribute("data-round") != "") {
			const round = El.getAttribute("data-round") * 1
			El.innerHTML = Math.round(retrive(SL2B, El.getAttribute("data-storepath").split('ю')) * 10 ** round) / 10 ** round
		} else {
			El.innerHTML = retrive(SL2B, El.getAttribute("data-storepath").split('ю'))
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
	// const strokeWidth = Math.max(SL2B.dimension.height, SL2B.dimension.width) / 100
	svg.setAttribute("viewBox", `${-strokeWidth / 2} ${-20} ${SL2B.dimension.width + strokeWidth} ${SL2B.dimension.height + 40}`);

	const parameter_rect = svg.querySelector(".parameter-rect")
	parameter_rect.setAttribute("width", SL2B.dimension.width)
	parameter_rect.setAttribute("height", SL2B.dimension.height)
	parameter_rect.setAttribute("stroke-width", strokeWidth)
	parameter_rect.setAttribute("rx", 5)

	const outer_stirrup_rect = svg.querySelector(".outer-stirrup-rect")
	outer_stirrup_rect.setAttribute("width", SL2B.dimension.width - SL2B.dimension.covering * 2)
	outer_stirrup_rect.setAttribute("height", SL2B.dimension.height - SL2B.dimension.covering * 2)
	outer_stirrup_rect.setAttribute("x", SL2B.dimension.covering)
	outer_stirrup_rect.setAttribute("y", SL2B.dimension.covering)
	outer_stirrup_rect.setAttribute("rx", 17)

	const inner_stirrup_rect = svg.querySelector(".inner-stirrup-rect")
	inner_stirrup_rect.setAttribute("width", SL2B.dimension.width - SL2B.dimension.covering * 2 - SL2B.stirrup * 2)
	inner_stirrup_rect.setAttribute("height", SL2B.dimension.height - SL2B.dimension.covering * 2 - SL2B.stirrup * 2)
	inner_stirrup_rect.setAttribute("x", SL2B.dimension.covering + SL2B.stirrup)
	inner_stirrup_rect.setAttribute("y", SL2B.dimension.covering + SL2B.stirrup)
	inner_stirrup_rect.setAttribute("rx", 8)
}
function redrawSVGbar() {
	// console.log("start drawing SVG")

	const TB = ["topbar", "bottombar"]
	const FS = ["firstLayerList", "secondLayerList"]

	for (let i = 0; i < TB.length; i++) {
		for (let j = 0; j < FS.length; j++) {
			const svgBarLayerGroup = document.querySelector(`.section-svg g.${TB[i]}.${FS[j]}`)

			// console.log(SL2B[TB[i]][FS[j]])
			let string = ""
			for (let index = 0; index < SL2B[TB[i]][FS[j]].length; index++) {
				string += `<circle class='' cx='${SL2B[TB[i]][FS[j]][index].x * 1}' cy='${SL2B[TB[i]][FS[j]][index].y * 1}' r='${SL2B[TB[i]][FS[j]][index].diameter * 1 / 2}'
						data-storepath='${TB[i]}ю^${FS[j]}ю${index}юdiameter' />`
			}
			svgBarLayerGroup.innerHTML = string



			svgBarLayerGroup.querySelectorAll(`.section-svg g.${TB[i]}.${FS[j]} circle`).forEach(circleEl => {
				circleEl.addEventListener("click", function (e) {
					const storepath = circleEl.getAttribute("data-storepath").split("ю")

					let newDiameter = prompt("Please enter new diameter", retrive(SL2B, storepath));
					if (newDiameter != null) {
						assign(SL2B, storepath, newDiameter * 1)
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

	if (SL2B.positive.εt != NaN && SL2B.positive.c != NaN && SL2B.positive.dt != NaN && SL2B.positive.dt != 0) {
		trace1.x = [0, 0.003, 0, -SL2B.positive.εt, 0, 0]
		trace1.y = [0, 0, SL2B.positive.c, SL2B.positive.dt, SL2B.positive.dt, 0]
		trace1.text = ["", "", "", `ε=${Math.round(SL2B.positive.εt * 10000) / 10000}`, "", ""]
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
		y: [SL2B.positive.c],
		type: 'scatter',
		mode: 'text',
		text: [`c=${Math.round(SL2B.positive.c * 100) / 100}mm `],
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
	trace4.y = JSON.parse(`[${SL2B.dimension.height},${SL2B.dimension.height}]`)

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
	trace5.y = JSON.parse(`[${SL2B.dimension.height},${SL2B.dimension.height}]`)


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
	trace6.x = [0, -SL2B.materialStrength.εy]
	trace6.y = JSON.parse(`[${SL2B.dimension.height},${SL2B.dimension.height}]`)
	trace6.text = ["", `εy=${SL2B.materialStrength.εy}`]

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
	layout.yaxis.range = [SL2B.dimension.height + 20, -20]


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