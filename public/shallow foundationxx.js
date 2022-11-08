const shallow_foundation = {
	dimension: {
		height: 400,
		width: 200,
		covering: 30,
		clearDistanceBetweenBarLayer: 20
	},
	topbar: {
		firstLayerList: [{ diameter: 16, x: "", y: "" }, { diameter: 16, x: "", y: "" }],
		secondLayerList: [],
	},
	bottombar: {
		firstLayerList: [{ diameter: 20, x: "", y: "" }, { diameter: 20, x: "", y: "" }],
		secondLayerList: [],
	},
	stirrup: 9,
	materialStrength: {
		concrete: [28, "MPa"],
		steel: [400, "MPa"],
		stirrup: [240, "MPa"]
	},
	positive: {
		øMn: [0, "kNm"],
	},
	negative: {
		øMn: [0, "kNm"],
	}


}


// inititialize()
// function inititialize() {
// 	retriveAllDataFromDatabaseToInputEl()
// 	calculateAndUpdateResult()
// 	redrawSVG()
// }






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

	// El.addEventListener("input", function (e) {
	// 	const storepath = El.getAttribute("data-storepath").split('ю')
	// 	const command = El.getAttribute("data-command")
	// 	assign(shallow_foundation, storepath, El.value * 1, command)


	// 	retriveAllDataFromDatabaseToInputEl()
	// 	calculateAndUpdateResult()
	// 	redrawSVG()
	// })

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

	document.querySelectorAll('[data-unit]').forEach(El => {
		const storepath = El.getAttribute('data-storepath').split('ю')
		// const command = El.getAttribute('data-command')
		El.innerHTML = retrive(shallow_foundation, storepath)
	})
}

// H| function calculateAndUpdateResult
function calculateAndUpdateResult() {
	shallow_foundation.dimension.area = shallow_foundation.dimension.height * 1 * shallow_foundation.dimension.width * 1;
	shallow_foundation.dimension.parameter = 2 * (shallow_foundation.dimension.height * 1 + shallow_foundation.dimension.width * 1);
	const fy_MPa = convertUnit("MPa", shallow_foundation.materialStrength.steel[0], shallow_foundation.materialStrength.steel[1])
	shallow_foundation.materialStrength.εy = Math.round(fy_MPa / (2 * 10 ** 5) * 100000) / 100000

	const FS = ["firstLayerList", "secondLayerList"]
	let topFirstLayerMaxDia = 0
	let topbarTotalArea = 0
	let topbarSumProductofYandA = 0

	FS.forEach(layer => {
		for (let i = 0; i < shallow_foundation.topbar[layer].length; i++) {
			// x position calculation
			if (shallow_foundation.topbar[layer].length == 1) {
				shallow_foundation.topbar[layer][i].x = shallow_foundation.dimension.width / 2
			} else if (shallow_foundation.topbar[layer].length >= 2) {
				let horizontalLength = shallow_foundation.dimension.width - shallow_foundation.dimension.covering * 2 - shallow_foundation.stirrup * 2 - shallow_foundation.topbar[layer][0].diameter / 2 - shallow_foundation.topbar[layer].at(-1).diameter / 2
				let horizontalBarSpacing = horizontalLength / (shallow_foundation.topbar[layer].length - 1)

				shallow_foundation.topbar[layer][i].x = shallow_foundation.dimension.covering + shallow_foundation.stirrup + shallow_foundation.topbar[layer][0].diameter / 2 + horizontalBarSpacing * i
			}


			// y position calculation
			if (layer == "firstLayerList" && shallow_foundation.topbar.firstLayerList[i].diameter * 1 > topFirstLayerMaxDia) {
				topFirstLayerMaxDia = shallow_foundation.topbar[layer][i].diameter * 1
			}
			if (layer == "firstLayerList") {
				shallow_foundation.topbar[layer][i].y = shallow_foundation.dimension.covering * 1 + shallow_foundation.stirrup + shallow_foundation.topbar[layer][i].diameter * 1 / 2
			} else if (layer == "secondLayerList") {
				shallow_foundation.topbar[layer][i].y = shallow_foundation.dimension.covering * 1 + shallow_foundation.stirrup + topFirstLayerMaxDia + shallow_foundation.dimension.clearDistanceBetweenBarLayer * 1 + shallow_foundation.topbar.secondLayerList[i].diameter * 1 / 2
			}

			topbarTotalArea += Math.PI * shallow_foundation.topbar[layer][i].diameter ** 2 / 4
			topbarSumProductofYandA += shallow_foundation.topbar[layer][i].y * (Math.PI * shallow_foundation.topbar[layer][i].diameter ** 2 / 4)

		}
	})
	if (topbarTotalArea != 0) {
		shallow_foundation.topbar.centroid = topbarSumProductofYandA / topbarTotalArea
	} else {
		shallow_foundation.topbar.centroid = null
	}
	shallow_foundation.topbar.area = topbarTotalArea





	let bottomFirstLayerMaxDia = 0
	let bottombarTotalArea = 0
	let bottombarSumProductofYandA = 0

	FS.forEach(layer => {
		for (let i = 0; i < shallow_foundation.bottombar[layer].length; i++) {
			// x position calculation
			if (shallow_foundation.bottombar[layer].length == 1) {
				shallow_foundation.bottombar[layer][i].x = shallow_foundation.dimension.width / 2
			} else if (shallow_foundation.bottombar[layer].length >= 2) {
				let horizontalLength = shallow_foundation.dimension.width - shallow_foundation.dimension.covering * 2 - shallow_foundation.stirrup * 2 - shallow_foundation.bottombar[layer][0].diameter / 2 - shallow_foundation.bottombar[layer].at(-1).diameter / 2
				let horizontalBarSpacing = horizontalLength / (shallow_foundation.bottombar[layer].length - 1)

				shallow_foundation.bottombar[layer][i].x = shallow_foundation.dimension.covering + shallow_foundation.stirrup + shallow_foundation.bottombar[layer][0].diameter / 2 + horizontalBarSpacing * i
			}


			// y position calculation
			if (layer == "firstLayerList" && shallow_foundation.bottombar.firstLayerList[i].diameter * 1 > bottomFirstLayerMaxDia) {
				bottomFirstLayerMaxDia = shallow_foundation.bottombar[layer][i].diameter * 1
			}
			if (layer == "firstLayerList") {
				shallow_foundation.bottombar[layer][i].y = shallow_foundation.dimension.height - (shallow_foundation.dimension.covering * 1 + shallow_foundation.stirrup + shallow_foundation.bottombar[layer][i].diameter * 1 / 2)
			} else if (layer == "secondLayerList") {
				shallow_foundation.bottombar[layer][i].y = shallow_foundation.dimension.height - (shallow_foundation.dimension.covering * 1 + shallow_foundation.stirrup + bottomFirstLayerMaxDia + shallow_foundation.dimension.clearDistanceBetweenBarLayer * 1 + shallow_foundation.bottombar.secondLayerList[i].diameter * 1 / 2)
			}

			bottombarTotalArea += Math.PI * shallow_foundation.bottombar[layer][i].diameter ** 2 / 4
			bottombarSumProductofYandA += shallow_foundation.bottombar[layer][i].y * (Math.PI * shallow_foundation.bottombar[layer][i].diameter ** 2 / 4)

		}
	})
	if (bottombarTotalArea != 0) {
		shallow_foundation.bottombar.centroid = bottombarSumProductofYandA / bottombarTotalArea
	} else {
		shallow_foundation.bottombar.centroid = null
	}
	shallow_foundation.bottombar.area = bottombarTotalArea



	const fc_MPa = convertUnit("MPa", shallow_foundation.materialStrength.concrete[0], shallow_foundation.materialStrength.concrete[1])
	if (fc_MPa <= 28) {
		shallow_foundation.materialStrength.β1 = 0.85
	} else if (fc_MPa > 28 && fc_MPa < 56) {
		shallow_foundation.materialStrength.β1 = 0.85 - 0.2 * (fc_MPa - 28) / 28
	} else if (fc_MPa >= 56) {
		shallow_foundation.materialStrength.β1 = 0.65
	}

	// console.log("[isTopbarYielded, a, c, εt, ø, øMn]")
	calculateMoment("positive")
	// console.log(positiveMomentArray)
	calculateMoment("negative")
	// console.log(negativeMomentArray)



	// console.log("finished calculating result")

	ResultPrintOutToOutputEl()
	console.log(shallow_foundation)
}

function calculateMoment(positiveOrNegative) {
	const fc_MPa = convertUnit("MPa", shallow_foundation.materialStrength.concrete[0], shallow_foundation.materialStrength.concrete[1])
	const fy_MPa = convertUnit("MPa", shallow_foundation.materialStrength.steel[0], shallow_foundation.materialStrength.steel[1])

	let As, d, dt, As_prime, d_prime
	if (positiveOrNegative == "positive") {
		As = shallow_foundation.bottombar.area
		d = shallow_foundation.bottombar.centroid

		const FS = ["firstLayerList", "secondLayerList"]
		let maxy = 0
		FS.forEach(layer => {
			for (let i = 0; i < shallow_foundation.bottombar[layer].length; i++) {
				if (shallow_foundation.bottombar[layer][i].y > maxy) {
					maxy = shallow_foundation.bottombar[layer][i].y
				}
			}
		})
		dt = maxy
		As_prime = shallow_foundation.topbar.area
		d_prime = shallow_foundation.topbar.centroid

	} else if (positiveOrNegative == "negative") {
		As = shallow_foundation.topbar.area
		d = shallow_foundation.dimension.height - shallow_foundation.topbar.centroid

		const FS = ["firstLayerList", "secondLayerList"]
		let miny = shallow_foundation.dimension.height
		FS.forEach(layer => {
			for (let i = 0; i < shallow_foundation.topbar[layer].length; i++) {
				if (shallow_foundation.topbar[layer][i].y < miny) {
					miny = shallow_foundation.topbar[layer][i].y
				}
			}
		})
		dt = shallow_foundation.dimension.height - miny
		As_prime = shallow_foundation.bottombar.area
		d_prime = shallow_foundation.dimension.height - shallow_foundation.bottombar.centroid
	}

	let ρ, ρ_prime
	if (d != null) {
		ρ = As / (shallow_foundation.dimension.width * d)
		ρ_prime = As_prime / (shallow_foundation.dimension.width * d)
	} else if (d_prime != null) {
		ρ = As / (shallow_foundation.dimension.width * (shallow_foundation.dimension.height - d_prime))
		ρ_prime = As_prime / (shallow_foundation.dimension.width * (shallow_foundation.dimension.height - d_prime))
	} else {
		ρ = 0
		ρ_prime = 0
	}


	const lastpartofformula = 0.85 * shallow_foundation.materialStrength.β1 * fc_MPa / fy_MPa * d_prime / d * (0.003 / (0.003 - fy_MPa / (2 * 10 ** 5))) + ρ_prime
	let isTopbarYielded
	if (shallow_foundation.materialStrength.εy < 0.003) {
		isTopbarYielded = ρ > lastpartofformula
	} else {
		isTopbarYielded = false
	}




	let a, Mn, c
	if (isTopbarYielded || As_prime == 0) {
		a = (ρ - ρ_prime) * fy_MPa * d / (0.85 * fc_MPa)
		Mn = 0.85 * fc_MPa * a / 1000 * shallow_foundation.dimension.width / 1000 * (d - a / 2) + As_prime * fy_MPa * (d - d_prime) / 1000 / 1000
		c = a / shallow_foundation.materialStrength.β1



	} else {
		let firstCoeff, secondCoeff, thirdCoeff

		firstCoeff = 0.85 * shallow_foundation.materialStrength.β1 * fc_MPa * shallow_foundation.dimension.width
		secondCoeff = As_prime * 0.003 * 2 * 10 ** 5 - As * fy_MPa
		thirdCoeff = -As_prime * 0.003 * 2 * 10 ** 5 * d_prime

		// = IF(A20 = FALSE, (-M23 + SQRT(M23 ^ 2 - 4 * M22 * M24)) / (2 * M22), 0)
		c = (-secondCoeff + Math.sqrt(secondCoeff ** 2 - 4 * firstCoeff * thirdCoeff)) / (2 * firstCoeff)
		a = shallow_foundation.materialStrength.β1 * c
		// =0.85*f.c*a/1000*b/1000*(d-a/2)+As.*2*10^5*(0.003/c*(c-d.))*(d-d.)/1000/1000
		Mn = 0.85 * fc_MPa * a / 1000 * shallow_foundation.dimension.width / 1000 * (d - a / 2) + As_prime * 2 * 10 ** 5 * (0.003 / c * (c - d_prime)) * (d - d_prime) / 1000 / 1000

	}

	let εs_prime = 0.003 / c * (c - d_prime)
	let εs = 0.003 / c * (d - c)

	let εt = 0.003 / c * (dt - c)
	let ø
	if (εt > 0.005) {
		ø = 0.9
	}
	else if (εt > 0.002 && εt < 0.005) {
		ø = 0.65 + (εt - 0.002) / 0.003 * 0.25
	}
	else if (εt < 0.002) {
		ø = 0.65
	}
	let øMn = ø * Mn


	let Cc = 0.85 * fc_MPa * a * shallow_foundation.dimension.width / 1000
	let Cs_prime
	let is_εs_prime_yielded = εs_prime >= shallow_foundation.materialStrength.εy
	if (is_εs_prime_yielded) {
		Cs_prime = fy_MPa * As_prime / 1000
	} else {
		Cs_prime = 2 * 10 ** 5 * εs_prime * As_prime / 1000
	}
	let Cs
	if (εs >= shallow_foundation.materialStrength.εy) {
		Cs = fy_MPa * As / 1000
	} else {
		Cs = 2 * 10 ** 5 * εs * As / 1000
	}
	let is_C_equal_T = Math.abs(Cc + Cs_prime - Cs) < 0.01

	shallow_foundation[positiveOrNegative].As = As
	shallow_foundation[positiveOrNegative].d = d
	shallow_foundation[positiveOrNegative].dt = dt
	shallow_foundation[positiveOrNegative].As_prime = As_prime
	shallow_foundation[positiveOrNegative].d_prime = d_prime
	shallow_foundation[positiveOrNegative].ρ = ρ
	shallow_foundation[positiveOrNegative].ρ_prime = ρ_prime
	shallow_foundation[positiveOrNegative].isTopbarYielded = isTopbarYielded
	shallow_foundation[positiveOrNegative].a = a
	shallow_foundation[positiveOrNegative].c = c
	shallow_foundation[positiveOrNegative].εt = εt
	shallow_foundation[positiveOrNegative].εs_prime = εs_prime
	shallow_foundation[positiveOrNegative].is_εs_prime_yielded = is_εs_prime_yielded
	shallow_foundation[positiveOrNegative].ø = ø
	shallow_foundation[positiveOrNegative].Mn = Mn
	shallow_foundation[positiveOrNegative].øMn[0] = convertUnit(shallow_foundation[positiveOrNegative].øMn[1], øMn, "kNm")
	shallow_foundation[positiveOrNegative].Cc = Cc
	shallow_foundation[positiveOrNegative].Cs_prime = Cs_prime
	shallow_foundation[positiveOrNegative].Cs = Cs
	shallow_foundation[positiveOrNegative].is_C_equal_T = is_C_equal_T

	let k
	k = Math.sqrt((9 * ρ) ** 2 + 2 * ρ * 9) - 9 * ρ
	// console.log(k * d, "k ver1")
	k = (Math.sqrt((9 * ρ) ** 2 + 4 * 0.63875 * 9 * ρ) - 9 * ρ) / (2 * 0.63875)
	// console.log(k * d, "k ver2")
	// return [ρ, ρ_prime, lastpartofformula, isTopbarYielded, a, Mn, c, εt, ø, øMn]
	// return [isTopbarYielded, a, c, εt, ø, øMn]
}

function ResultPrintOutToOutputEl() {
	document.querySelectorAll(".outputBox").forEach(El => {
		const round = El.getAttribute("data-round") * 1
		El.innerHTML = Math.round(retrive(shallow_foundation, El.getAttribute("data-storepath").split('ю')) * 10 ** round) / 10 ** round
	})
}




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










function assign(returnObj, storepath, value, command) {
	const unreplacedstorepath = storepath


	for (let i = 0; i < storepath.length - 1; i++) {

		if (storepath[i][0] != "^") {

			if (!(storepath[i] in returnObj)) {
				returnObj[storepath[i]] = {}
			}
			returnObj = returnObj[storepath[i]]
			// console.log(returnObj)


		} else if (storepath[i][0] === "^") {
			storepath[i] = storepath[i].toString().replace("^", "")
			// console.log(storepath[i])
			if (!(storepath[i] in returnObj)) {
				returnObj[storepath[i]] = []
			}
			returnObj = returnObj[storepath[i]]
		}
	}

	// go to deepest level of storepath
	const deepestPathName = storepath[storepath.length - 1].toString().replace("^", "")
	// → returnObj[deepestPathName]
	if (!(Array.isArray(returnObj[deepestPathName]))) {
		returnObj[deepestPathName] = value
		// console.log(returnObj[deepestPathName])
		// console.log(shallow_foundation)
	} else {

		if (command == "changeBarDiameter") {
			for (let i = 0; i < returnObj[deepestPathName].length; i++) {
				returnObj[deepestPathName][i].diameter = value
			}

		} else if (command == "changeArrayLength") {
			while (returnObj[deepestPathName].length < value) {
				if (returnObj[deepestPathName].length != 0) {
					returnObj[deepestPathName].push({ diameter: returnObj[deepestPathName][returnObj[deepestPathName].length - 1].diameter })
				} else {
					// console.log(unreplacedstorepath.join("ю"))
					if (document.querySelectorAll(`[data-storepath= '${unreplacedstorepath.join("ю")}'][data-command='changeBarDiameter']`)[0].value * 1 > 0) {
						returnObj[deepestPathName].push({ diameter: document.querySelectorAll(`[data-storepath= '${unreplacedstorepath.join("ю")}'][data-command='changeBarDiameter']`)[0].value * 1 })
					} else {
						returnObj[deepestPathName].push({ diameter: 20, x: "", y: "" })
					}
				}
			}

			while (returnObj[deepestPathName].length > value) {
				returnObj[deepestPathName].pop()
			}

			// console.log(returnObj[deepestPathName].length)

			// returnObj[deepestPathName][storepath[storepath.length - 1]].forEach(item => {
			// 	item = value
			// })
		}
	}
	// console.log(shallow_foundation)

}


function retrive(returnObj, storepath, command) {
	for (let i = 0; i < storepath.length - 1; i++) {
		storepath[i] = storepath[i].toString().replace("^", "")
		returnObj = returnObj[storepath[i]]
	}

	// go to deepest level of storepath
	const deepestPathName = storepath[storepath.length - 1].toString().replace("^", "")
	if (!(Array.isArray(returnObj[deepestPathName]))) {
		return returnObj[deepestPathName]
	} else {
		if (command == "changeBarDiameter") {
			let boolean = true
			for (let i = 0; i < returnObj[deepestPathName].length - 1; i++) {
				if (returnObj[deepestPathName][i].diameter != returnObj[deepestPathName][i + 1].diameter) {
					boolean = false
					break
				}
			}

			if (boolean) {
				if (returnObj[deepestPathName].length == 0) {
					return "don't have any value to be retrived"
				} else {
					return returnObj[deepestPathName][0].diameter
				}
			} else {
				return -1
			}


		} else if (command == "changeArrayLength") {
			return returnObj[deepestPathName].length.toString() + "bars"
		}
		// console.log(shallow_foundation)
	}
}

*/