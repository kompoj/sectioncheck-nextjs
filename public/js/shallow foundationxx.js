import { assign, retrive } from './utility/assign-retrive.js'

const shallow_foundation = {
	initial: {
		number1: 40,
		number2: 1.75,
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
		assign(shallow_foundation, storepath, El.value * 1, command)

		// console.log(shallow_foundation)
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
		let oldUnit = retrive(shallow_foundation, unitStorepath)

		//get current(old) value
		let ValueStorepath = [...unitStorepath]
		ValueStorepath[ValueStorepath.length - 1] = 0 //unit storepath is stored at materialstrengthюconcreteю1, meanwhile value is stored at materialstrengthюconcreteю0
		let oldValue = retrive(shallow_foundation, ValueStorepath)


		let unitArray = El.getAttribute("data-unit").split("ю")
		let newUnit

		if (kN_kg_switch.getAttribute("data-unitToggle") == "kN") {
			//get and set target(new) unit
			newUnit = unitArray[1]
			assign(shallow_foundation, unitStorepath, newUnit)

			if (El.previousElementSibling.classList.contains("inputBox")) {
				El.previousElementSibling.setAttribute("step", 10 ** -unitArray[0])
				newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** unitArray[0]) / (10 ** unitArray[0])
				assign(shallow_foundation, ValueStorepath, newConvertedValue)

			} else if (El.previousElementSibling.classList.contains("outputBox")) {
				El.previousElementSibling.setAttribute("data-round", unitArray[0])
			}

		} else if (kN_kg_switch.getAttribute("data-unitToggle") == "kg") {
			newUnit = unitArray[3]
			// console.log(newUnit, storepath)
			assign(shallow_foundation, unitStorepath, newUnit)
			if (El.previousElementSibling.classList.contains("inputBox")) {
				El.previousElementSibling.setAttribute("step", 10 ** -unitArray[2])
				newConvertedValue = Math.round(convertUnit(newUnit, oldValue, oldUnit) * 10 ** unitArray[2]) / (10 ** unitArray[2])
				assign(shallow_foundation, ValueStorepath, newConvertedValue)

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

		let retrivedValue = retrive(shallow_foundation, storepath, command)
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
	// 	El.innerHTML = retrive(shallow_foundation, storepath)
	// })
}

// H| function calculateAndUpdateResult
function calculateAndUpdateResult() {
	shallow_foundation.result.multiplication = shallow_foundation.initial.number1 * 1 * shallow_foundation.initial.number2 * 1;
	shallow_foundation.result.addition = shallow_foundation.initial.number1 * 1 + shallow_foundation.initial.number2 * 1;
	shallow_foundation.result.subtraction = shallow_foundation.initial.number1 * 1 - shallow_foundation.initial.number2 * 1;
	shallow_foundation.result.division = shallow_foundation.initial.number1 * 1 / shallow_foundation.initial.number2 * 1;


	// console.log("finished calculating result")

	ResultPrintOutToOutputEl()
	console.log(shallow_foundation)
}



function ResultPrintOutToOutputEl() {
	document.querySelectorAll(".outputBox").forEach(El => {
		const round = El.getAttribute("data-round") * 1
		El.innerHTML = Math.round(retrive(shallow_foundation, El.getAttribute("data-storepath").split('ю')) * 10 ** round) / 10 ** round
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
	// const strokeWidth = Math.max(shallow_foundation.dimension.height, shallow_foundation.dimension.width) / 100
	svg.setAttribute("viewBox", `${-strokeWidth / 2} ${-20} ${shallow_foundation.dimension.width + strokeWidth} ${shallow_foundation.dimension.height + 40}`);

	const parameter_rect = svg.querySelector(".parameter-rect")
	parameter_rect.setAttribute("width", shallow_foundation.dimension.width)
	parameter_rect.setAttribute("height", shallow_foundation.dimension.height)
	parameter_rect.setAttribute("stroke-width", strokeWidth)
	parameter_rect.setAttribute("rx", 5)

	const outer_stirrup_rect = svg.querySelector(".outer-stirrup-rect")
	outer_stirrup_rect.setAttribute("width", shallow_foundation.dimension.width - shallow_foundation.dimension.covering * 2)
	outer_stirrup_rect.setAttribute("height", shallow_foundation.dimension.height - shallow_foundation.dimension.covering * 2)
	outer_stirrup_rect.setAttribute("x", shallow_foundation.dimension.covering)
	outer_stirrup_rect.setAttribute("y", shallow_foundation.dimension.covering)
	outer_stirrup_rect.setAttribute("rx", 17)

	const inner_stirrup_rect = svg.querySelector(".inner-stirrup-rect")
	inner_stirrup_rect.setAttribute("width", shallow_foundation.dimension.width - shallow_foundation.dimension.covering * 2 - shallow_foundation.stirrup * 2)
	inner_stirrup_rect.setAttribute("height", shallow_foundation.dimension.height - shallow_foundation.dimension.covering * 2 - shallow_foundation.stirrup * 2)
	inner_stirrup_rect.setAttribute("x", shallow_foundation.dimension.covering + shallow_foundation.stirrup)
	inner_stirrup_rect.setAttribute("y", shallow_foundation.dimension.covering + shallow_foundation.stirrup)
	inner_stirrup_rect.setAttribute("rx", 8)
}
function redrawSVGbar() {
	// console.log("start drawing SVG")

	const TB = ["topbar", "bottombar"]
	const FS = ["firstLayerList", "secondLayerList"]

	for (let i = 0; i < TB.length; i++) {
		for (let j = 0; j < FS.length; j++) {
			const svgBarLayerGroup = document.querySelector(`.section-svg g.${TB[i]}.${FS[j]}`)

			// console.log(shallow_foundation[TB[i]][FS[j]])
			let string = ""
			for (let index = 0; index < shallow_foundation[TB[i]][FS[j]].length; index++) {
				string += `<circle class='' cx='${shallow_foundation[TB[i]][FS[j]][index].x * 1}' cy='${shallow_foundation[TB[i]][FS[j]][index].y * 1}' r='${shallow_foundation[TB[i]][FS[j]][index].diameter * 1 / 2}'
						data-storepath='${TB[i]}ю^${FS[j]}ю${index}юdiameter' />`
			}
			svgBarLayerGroup.innerHTML = string



			svgBarLayerGroup.querySelectorAll(`.section-svg g.${TB[i]}.${FS[j]} circle`).forEach(circleEl => {
				circleEl.addEventListener("click", function (e) {
					const storepath = circleEl.getAttribute("data-storepath").split("ю")

					let newDiameter = prompt("Please enter new diameter", retrive(shallow_foundation, storepath));
					if (newDiameter != null) {
						assign(shallow_foundation, storepath, newDiameter * 1)
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

	if (shallow_foundation.positive.εt != NaN && shallow_foundation.positive.c != NaN && shallow_foundation.positive.dt != NaN && shallow_foundation.positive.dt != 0) {
		trace1.x = [0, 0.003, 0, -shallow_foundation.positive.εt, 0, 0]
		trace1.y = [0, 0, shallow_foundation.positive.c, shallow_foundation.positive.dt, shallow_foundation.positive.dt, 0]
		trace1.text = ["", "", "", `ε=${Math.round(shallow_foundation.positive.εt * 10000) / 10000}`, "", ""]
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
		y: [shallow_foundation.positive.c],
		type: 'scatter',
		mode: 'text',
		text: [`c=${Math.round(shallow_foundation.positive.c * 100) / 100}mm `],
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
	trace4.y = JSON.parse(`[${shallow_foundation.dimension.height},${shallow_foundation.dimension.height}]`)

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
	trace5.y = JSON.parse(`[${shallow_foundation.dimension.height},${shallow_foundation.dimension.height}]`)


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
	trace6.x = [0, -shallow_foundation.materialStrength.εy]
	trace6.y = JSON.parse(`[${shallow_foundation.dimension.height},${shallow_foundation.dimension.height}]`)
	trace6.text = ["", `εy=${shallow_foundation.materialStrength.εy}`]

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
	layout.yaxis.range = [shallow_foundation.dimension.height + 20, -20]


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