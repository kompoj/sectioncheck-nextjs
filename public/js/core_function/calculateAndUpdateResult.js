import ResultPrintOutToOutputEl from './ResultPrintOutToOutputEl.js'
import SL2BcalculationInDatabaseHandler from '../calculationInDatabaseHandler/SL2BcalculationInDatabaseHandler.js'

// H| function calculateAndUpdateResult
export function calculateAndUpdateResult(obj) {

	if (obj.name === "SL2B") {
		SL2BcalculationInDatabaseHandler(obj)
	}




	// console.log("finished calculating result")

	ResultPrintOutToOutputEl(obj)
	console.log(obj)
	console.log(obj.name)
}