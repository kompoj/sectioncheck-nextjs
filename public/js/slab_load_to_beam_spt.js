import { assign, retrive } from './utility/assign-retrive.js'
import kN_kg_switch from './utility/kN_kg_switch.js'
import retriveAllDataFromDatabaseToInputEl from './core_function/retriveAllDataFromDatabaseToInputEl.js'
import { calculateAndUpdateResult } from './core_function/calculateAndUpdateResult.js'
import { assignValueFromInputElToDatabase } from './core_function/assignValueFromInputElToDatabase.js'


// import styles from '/styles/components/Nav.module.css'
// GET http://localhost:3000/styles/components/Nav.module.css net::ERR_ABORTED 404 (Not Found)


const SL2B = {
	name: "SL2B",
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
	kN_kg_switch(SL2B)
	retriveAllDataFromDatabaseToInputEl(SL2B)
	calculateAndUpdateResult(SL2B)
	// redrawSVG()
}

assignValueFromInputElToDatabase(SL2B)






document.querySelectorAll(".accordion").forEach(El => {
	El.querySelector(".accordion-header").addEventListener("click", () => {
		El.classList.toggle("collapsed")
	})
})






















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
	over")
				})

			})
		}
	}

}

function redrawPositiveStrainDiagram() {

	const trace1 = {
		x: [],
		type: 'scatter',
		
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