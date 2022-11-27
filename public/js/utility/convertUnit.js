﻿export default function convertUnit(newUnit, oldValue, oldUnit) {
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