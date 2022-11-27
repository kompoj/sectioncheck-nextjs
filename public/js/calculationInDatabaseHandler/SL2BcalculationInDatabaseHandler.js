


export default function SL2BcalculationInDatabaseHandler(obj) {
	obj.oput.m = obj.iput.S / obj.iput.L
	if (obj.iput.L / obj.iput.S > 2) {
		obj.oput.onewayortwoway = "one way"
		obj.oput.VL[0] = obj.iput.wu[0] * obj.iput.S / 2
		obj.oput.VS[0] = 0
	} else {
		obj.oput.onewayortwoway = "two way"
		obj.oput.VL[0] = obj.iput.wu[0] * obj.iput.S / 3 * (3 - obj.oput.m ** 2) / 2
		obj.oput.VS[0] = obj.iput.wu[0] * obj.iput.S / 3
	}
}