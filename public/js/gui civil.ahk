; H| gui, civil

civilguiconstruct:
gui, civil:margin, 10, 5
Gui, civil:Add, Tab3, Choose1 , structure | soil | Settings
Gui, civil:Tab, 1
gui, civil:font, s9, Segoe UI

gui, civil:add, text, x20 y30, st. analysis
gui, civil:add, button, gcivilbuttonclick, ★mech mat
gui, civil:add, button, gcivilbuttonclick, beam diagram
gui, civil:add, button, left gcivilbuttonclick, unit and`ntypical value

gui, civil:add, text, y+30,trial หน้าตัด, (input if in software)`nst. analysis, design
gui, civil:add, button, gcivilbuttonclick, rc design
gui, civil:add, button, gcivilbuttonclick, rc lab
gui, civil:add, button, y+15 gcivilbuttonclick, steel design
gui, civil:add, button, gcivilbuttonclick, excel ตารางเหล็ก



gui, civil:add, text, x220 y30,trial หน้าตัด, (input if in software)`nst. analysis, design
gui, civil:add, button, gcivilbuttonclick, st software
gui, civil:add, button, gcivilbuttonclick, etab
gui, civil:add, button, gcivilbuttonclick, prota


gui, civil:add, text, y+30,#######################`nadvanced load and build design
gui, civil:add, button, gcivilbuttonclick, มยผ แผ่นดินไหว
gui, civil:add, button, gcivilbuttonclick, dr amorn EQ load
gui, civil:add, button, gcivilbuttonclick, dynamic struct
gui, civil:add, button, gcivilbuttonclick, มยผ แรงลม

gui, civil:add, button, y+15 gcivilbuttonclick, build design





Gui, civil:Tab, 2
gui, civil:add, text, x20 y30, foundation engineering
gui, civil:add, button, gcivilbuttonclick, ปฐพีกลศาสตร์ ผศ.ปิยะ
gui, civil:add, button, gcivilbuttonclick, foundation engineering
gui, civil:add, button, gcivilbuttonclick, sheet pile อ.วันชัย






civilfiledirectory := {"★mech mat":"E:\gdrive\civil engineering\1.structure\1.1 structural analysis\note mech mat.pdf"
,"beam diagram":"E:\gdrive\civil engineering\1.structure\1.1 structural analysis\beam diagram.pdf"
,"unit and`ntypical value":"E:\gdrive\civil engineering\1.structure\1.1 structural analysis\struct unit and typical value.pdf"

,"rc design":"E:\gdrive\civil engineering\1.structure\2.1 RC design\!note rc design.pdf"
,"rc lab":"E:\gdrive\civil engineering\1.structure\2.1 RC design\!note rc lab.pdf"
,"excel ตารางเหล็ก":"E:\gdrive\civil engineering\1.structure\2.2 steel design\ตารางเหล็ก\excel ตารางเหล็ก โดยฉัน.xlsx"
,"steel design":"E:\gdrive\civil engineering\1.structure\2.2 steel design\!note steel design.pdf"

,"st software":"E:\gdrive\civil engineering\1.structure\st.analysis software\note st software.pdf"
,"etab":"E:\gdrive\civil engineering\1.structure\st.analysis software\2 etab\note etab.pdf"
,"prota":"E:\gdrive\civil engineering\1.structure\st.analysis software\2 etab\note prota.pdf"

,"มยผ แผ่นดินไหว":"E:\gdrive\civil engineering\1.structure\3.1 wind and earthquake\มยผ แผ่นดินไหว 1301_1302_61.pdf"
,"dr amorn EQ load":"E:\gdrive\civil engineering\1.structure\3.1 wind and earthquake\dr amorn EQ load.pdf"
,"dynamic struct":"E:\gdrive\civil engineering\1.structure\3.1 wind and earthquake\dynamic struct.pdf"
,"มยผ แรงลม":"E:\gdrive\civil engineering\1.structure\3.1 wind and earthquake\มยผ แรงลม.pdf"
,"build design":"E:\gdrive\civil engineering\1.structure\2.3 build design"

,"ปฐพีกลศาสตร์ ผศ.ปิยะ":"E:\gdrive\civil engineering\soil\!ปฐพีกลศาสตร์ (Soil Mechanics) -ผศ.ปิยะ.pdf"
,"foundation engineering":"E:\gdrive\civil engineering\soil\note foundation engineering.pdf"
,"sheet pile อ.วันชัย":"E:\gdrive\civil engineering\soil\sheet pile อ.วันชัย.pdf"}
return


!s::
; CoordMode, mouse, screen
; mousegetpos, p_MouseX, p_MouseY
; diffMouseX := 50
; diffMouseY := 25
; p_MouseX -= diffMouseX
; p_MouseY -= diffMouseY
; gui, civil:show, autosize x%p_MouseX% y%p_MouseY%, civil

; WinGet, thisisid_WinFollowMouse, ID, civil
; SetTimer, WindowFollowMouse, 10
CoordMode, mouse, screen
mousegetpos, mouseX, mouseY


if WinActive("civil gui") {
   ;  WinMinimize
	 WinClose
} else {
	SysGet, thisistotalnumberofmon, monitorcount	

	if (thisistotalnumberofmon = 1) {
		gui, civil:show, autosize center, civil gui
	} else {
		sysget, CurMonCor, Monitor, % ThisCoordinateInWhichMonitor(mouseX,mouseY)

		CurMonCorLeft += 700
		CurMonCorBottom -= 750

		gui, civil:show, autosize x%CurMonCorLeft% y%CurMonCorBottom%, civil gui
}
}
return



civilbuttonclick:
gui, civil:hide
run, % civilfiledirectory[A_GuiControl]
return