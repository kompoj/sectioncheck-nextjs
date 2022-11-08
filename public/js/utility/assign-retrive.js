export function assign(returnObj, storepath, value, command) {
	// const unreplacedstorepath = storepath


	for (let i = 0; i < storepath.length - 1; i++) {


		if (!(storepath[i] in returnObj)) {
			returnObj[storepath[i]] = {}
		}
		returnObj = returnObj[storepath[i]]
		// console.log(returnObj)

	}

	// go to deepest level of storepath
	const deepestPathName = storepath.at(-1).toString()
	// → returnObj[deepestPathName]
	if (!(Array.isArray(returnObj[deepestPathName]))) {
		returnObj[deepestPathName] = value
		// console.log(returnObj[deepestPathName])
		// console.log(beamObj)
	} else {

		if (command == "changeBarDiameter") {
			for (let i = 0; i < returnObj[deepestPathName].length; i++) {
				returnObj[deepestPathName][i].diameter = value
			}

		} else if (command == "changeArrayLength") {
			while (returnObj[deepestPathName].length < value) {
				if (returnObj[deepestPathName].length != 0) {
					returnObj[deepestPathName].push({ diameter: returnObj[deepestPathName].at(-1).diameter })
				} else {
					// console.log(unreplacedstorepath.join("ю"))
					if (document.querySelectorAll(`[data-storepath= '${storepath.join("ю")}'][data-command='changeBarDiameter']`)[0].value * 1 > 0) {
						returnObj[deepestPathName].push({ diameter: document.querySelectorAll(`[data-storepath= '${storepath.join("ю")}'][data-command='changeBarDiameter']`)[0].value * 1 })
					} else {
						returnObj[deepestPathName].push({ diameter: 20, x: "", y: "" })
					}
				}
			}

			while (returnObj[deepestPathName].length > value) {
				returnObj[deepestPathName].pop()
			}

		}
	}
	// console.log(beamObj)

}


export function retrive(returnObj, storepath, command) {
	for (let i = 0; i < storepath.length - 1; i++) {
		storepath[i] = storepath[i].toString()
		returnObj = returnObj[storepath[i]]
	}

	// go to deepest level of storepath
	const deepestPathName = storepath.at(-1).toString()
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
		// console.log(beamObj)
	}
}