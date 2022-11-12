import Head from 'next/head'
import Image from 'next/image'


import Nav from "/components/Nav.js"
import Sidebar from "/components/Sidebar.js"
import Footer from "../components/Footer.js"

export default function about() {
	return (
		<>
			<Nav />
			<div className="not-nav-bar">
				<Sidebar />
				<div className="container">
					<div id="write">
						<h1>typora example</h1>
						<p>เพราะว่าเราต้องการที่จะ</p>
						<ol>
							<li>ก็</li>
							<li>คือ</li>
							<li>เรา</li>
						</ol>
						<p>ฉะนั้น ดังนี้ เราจึงต้อง</p>
						<h2>ego is enemy</h2>
						<p>
							<a href="https://www.youtube.com/watch?v=AFkVh9Sv2Jk&ab_channel=THESECRETSAUCE">
								Ego is the enemy ตัวคุณคือศัตรู ศิลปะการบริหารอีโก้ | The Secret Sauce
								EP.430 - YouTube
							</a>
						</p>
						<p>
							<a href="https://support.typora.io/Links/" target="_blank" rel="noreferrer" className="url">
								https://support.typora.io/Links/
							</a>
						</p>
						<p>
							<a
								href="https://www.youtube.com/watch?v=_bQSL3q5S34&ab_channel=TNNOnline"
								target="_blank" rel="noreferrer"
								className="url"
							>
								https://www.youtube.com/watch?v=_bQSL3q5S34&amp;ab_channel=TNNOnline
							</a>
						</p>
						<h3>what am i doing wrong</h3>
						<p>เพราะว่าเราก็ต้องการเงินเพื่อใช้จ่าย</p>
						<ol>
							<li>kjkjk</li>
							<li>kjkjk</li>
							<li>kjkj</li>
						</ol>
						<div
							spellCheck="false"
							className="mathjax-block md-end-block md-math-block md-rawblock"
							id="mathjax-n24"
							cid="n24"
							mdtype="math_block"
							data-math-tag-before={0}
							data-math-tag-after={0}
							data-math-labels="[]"
						>
							<div
								className="md-rawblock-container md-math-container"
								tabIndex={-1}
							>
								<mjx-container
									className="MathJax"
									jax="SVG"
									display="true"
									style={{ position: "relative" }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24.671ex"
										height="9.689ex"
										role="img"
										focusable="false"
										viewBox="0 -1862.3 10904.7 4282.3"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										style={{ verticalAlign: "-5.475ex" }}
										className="in-text-selection"
									>
										<defs>
											<path
												id="MJX-3-TEX-SO-222B"
												d="M113 -244Q113 -246 119 -251T139 -263T167 -269Q186 -269 199 -260Q220 -247 232 -218T251 -133T262 -15T276 155T297 367Q300 390 305 438T314 512T325 580T340 647T361 703T390 751T428 784T479 804Q481 804 488 804T501 805Q552 802 581 769T610 695Q610 669 594 657T561 645Q542 645 527 658T512 694Q512 705 516 714T526 729T538 737T548 742L552 743Q552 745 545 751T525 762T498 768Q475 768 460 756T434 716T418 652T407 559T398 444T387 300T369 133Q349 -38 337 -102T303 -207Q256 -306 169 -306Q119 -306 87 -272T55 -196Q55 -170 71 -158T104 -146Q123 -146 138 -159T153 -195Q153 -206 149 -215T139 -230T127 -238T117 -242L113 -244Z"
											/>
											<path
												id="MJX-3-TEX-N-33"
												d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
											/>
											<path
												id="MJX-3-TEX-N-35"
												d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"
											/>
											<path
												id="MJX-3-TEX-I-1D465"
												d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"
											/>
											<path
												id="MJX-3-TEX-I-1D458"
												d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"
											/>
											<path
												id="MJX-3-TEX-N-3D"
												d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
											/>
											<path
												id="MJX-3-TEX-N-30"
												d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"
											/>
											<path
												id="MJX-3-TEX-N-32"
												d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
											/>
											<path
												id="MJX-3-TEX-I-1D450"
												d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"
											/>
											<path
												id="MJX-3-TEX-I-1D456"
												d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"
											/>
											<path
												id="MJX-3-TEX-I-1D45F"
												d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"
											/>
											<path
												id="MJX-3-TEX-I-1D459"
												d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"
											/>
											<path
												id="MJX-3-TEX-I-1D452"
												d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"
											/>
											<path
												id="MJX-3-TEX-N-2B"
												d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"
											/>
											<path
												id="MJX-3-TEX-N-38"
												d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z"
											/>
											<path
												id="MJX-3-TEX-I-1D466"
												d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"
											/>
											<path
												id="MJX-3-TEX-N-221A"
												d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"
											/>
											<path
												id="MJX-3-TEX-I-1D467"
												d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"
											/>
											<path
												id="MJX-3-TEX-S3-221A"
												d="M424 -948Q422 -947 313 -434T202 80L170 31Q165 24 157 10Q137 -21 137 -21Q131 -16 124 -8L111 5L264 248L473 -720Q473 -717 727 359T983 1440Q989 1450 1001 1450Q1007 1450 1013 1445T1020 1433Q1020 1425 742 244T460 -941Q458 -950 439 -950H436Q424 -950 424 -948Z"
											/>
											<path
												id="MJX-3-TEX-N-39"
												d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z"
											/>
											<path
												id="MJX-3-TEX-N-34"
												d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"
											/>
										</defs>
										<g
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											transform="scale(1,-1)"
										>
											<g data-mml-node="math">
												<g data-mml-node="mfrac">
													<g data-mml-node="mrow" transform="translate(220,858.8)">
														<g data-mml-node="msubsup">
															<g data-mml-node="mo" transform="translate(0 0.5)">
																<use data-c="222B" xlinkHref="#MJX-3-TEX-SO-222B" />
															</g>
															<g
																data-mml-node="TeXAtom"
																transform="translate(699.9,532.6) scale(0.707)"
																data-mjx-texclass="ORD"
															>
																<g data-mml-node="mn">
																	<use data-c={33} xlinkHref="#MJX-3-TEX-N-33" />
																	<use
																		data-c={35}
																		xlinkHref="#MJX-3-TEX-N-35"
																		transform="translate(500,0)"
																	/>
																</g>
																<g data-mml-node="mi" transform="translate(1000,0)">
																	<use data-c="1D465" xlinkHref="#MJX-3-TEX-I-1D465" />
																</g>
															</g>
															<g
																data-mml-node="TeXAtom"
																transform="translate(505,-340.9) scale(0.707)"
																data-mjx-texclass="ORD"
															>
																<g data-mml-node="mi">
																	<use data-c="1D458" xlinkHref="#MJX-3-TEX-I-1D458" />
																</g>
																<g data-mml-node="mo" transform="translate(521,0)">
																	<use data-c="3D" xlinkHref="#MJX-3-TEX-N-3D" />
																</g>
																<g data-mml-node="mn" transform="translate(1299,0)">
																	<use data-c={30} xlinkHref="#MJX-3-TEX-N-30" />
																</g>
															</g>
														</g>
														<g data-mml-node="mn" transform="translate(2028.1,0)">
															<use data-c={32} xlinkHref="#MJX-3-TEX-N-32" />
															<use
																data-c={33}
																xlinkHref="#MJX-3-TEX-N-33"
																transform="translate(500,0)"
															/>
														</g>
														<g data-mml-node="msub" transform="translate(3028.1,0)">
															<g data-mml-node="mi">
																<use data-c="1D465" xlinkHref="#MJX-3-TEX-I-1D465" />
															</g>
															<g
																data-mml-node="TeXAtom"
																transform="translate(605,-150) scale(0.707)"
																data-mjx-texclass="ORD"
															>
																<g data-mml-node="mi">
																	<use data-c="1D450" xlinkHref="#MJX-3-TEX-I-1D450" />
																</g>
																<g data-mml-node="mi" transform="translate(433,0)">
																	<use data-c="1D456" xlinkHref="#MJX-3-TEX-I-1D456" />
																</g>
																<g data-mml-node="mi" transform="translate(778,0)">
																	<use data-c="1D45F" xlinkHref="#MJX-3-TEX-I-1D45F" />
																</g>
																<g data-mml-node="mi" transform="translate(1229,0)">
																	<use data-c="1D450" xlinkHref="#MJX-3-TEX-I-1D450" />
																</g>
																<g data-mml-node="mi" transform="translate(1662,0)">
																	<use data-c="1D459" xlinkHref="#MJX-3-TEX-I-1D459" />
																</g>
																<g data-mml-node="mi" transform="translate(1960,0)">
																	<use data-c="1D452" xlinkHref="#MJX-3-TEX-I-1D452" />
																</g>
															</g>
														</g>
														<g data-mml-node="mo" transform="translate(5620.8,0)">
															<use data-c="2B" xlinkHref="#MJX-3-TEX-N-2B" />
														</g>
														<g data-mml-node="mn" transform="translate(6621,0)">
															<use data-c={33} xlinkHref="#MJX-3-TEX-N-33" />
															<use
																data-c={38}
																xlinkHref="#MJX-3-TEX-N-38"
																transform="translate(500,0)"
															/>
														</g>
														<g data-mml-node="msup" transform="translate(7621,0)">
															<g data-mml-node="mi">
																<use data-c="1D466" xlinkHref="#MJX-3-TEX-I-1D466" />
															</g>
															<g
																data-mml-node="TeXAtom"
																transform="translate(523,400) scale(0.707)"
																data-mjx-texclass="ORD"
															>
																<g data-mml-node="mn">
																	<use data-c={32} xlinkHref="#MJX-3-TEX-N-32" />
																</g>
																<g data-mml-node="msqrt" transform="translate(500,0)">
																	<g transform="translate(853,0)">
																		<g data-mml-node="msub">
																			<g data-mml-node="mi">
																				<use
																					data-c="1D467"
																					xlinkHref="#MJX-3-TEX-I-1D467"
																				/>
																			</g>
																			<g
																				data-mml-node="TeXAtom"
																				transform="translate(498,-317.8) scale(0.707)"
																				data-mjx-texclass="ORD"
																			>
																				<g data-mml-node="msqrt">
																					<g transform="translate(853,0)">
																						<g data-mml-node="mn">
																							<use
																								data-c={38}
																								xlinkHref="#MJX-3-TEX-N-38"
																							/>
																							<use
																								data-c={33}
																								xlinkHref="#MJX-3-TEX-N-33"
																								transform="translate(500,0)"
																							/>
																						</g>
																					</g>
																					<g
																						data-mml-node="mo"
																						transform="translate(0,59.5)"
																					>
																						<use
																							data-c="221A"
																							xlinkHref="#MJX-3-TEX-N-221A"
																						/>
																					</g>
																					<rect
																						width={1000}
																						height={30}
																						x={853}
																						y="829.5"
																					/>
																				</g>
																			</g>
																		</g>
																	</g>
																	<g data-mml-node="mo" transform="translate(0,-227)">
																		<use data-c="221A" xlinkHref="#MJX-3-TEX-N-221A" />
																	</g>
																	<rect width="1858.3" height="42.4" x={853} y="530.5" />
																</g>
															</g>
														</g>
													</g>
													<g data-mml-node="mrow" transform="translate(2309.3,-1675.6)">
														<g data-mml-node="msqrt">
															<g transform="translate(1020,0)">
																<g data-mml-node="mfrac">
																	<g
																		data-mml-node="msup"
																		transform="translate(555.3,394) scale(0.707)"
																	>
																		<g data-mml-node="mi">
																			<use
																				data-c="1D465"
																				xlinkHref="#MJX-3-TEX-I-1D465"
																			/>
																		</g>
																		<g
																			data-mml-node="TeXAtom"
																			transform="translate(605,483.9) scale(0.707)"
																			data-mjx-texclass="ORD"
																		>
																			<g data-mml-node="mfrac">
																				<g
																					data-mml-node="mn"
																					transform="translate(220,394)"
																				>
																					<use data-c={32} xlinkHref="#MJX-3-TEX-N-32" />
																				</g>
																				<g
																					data-mml-node="mn"
																					transform="translate(220,-506)"
																				>
																					<use data-c={35} xlinkHref="#MJX-3-TEX-N-35" />
																				</g>
																				<rect width={700} height={60} x={120} y={220} />
																			</g>
																		</g>
																	</g>
																	<g
																		data-mml-node="mrow"
																		transform="translate(220,-345) scale(0.707)"
																	>
																		<g data-mml-node="mn">
																			<use data-c={39} xlinkHref="#MJX-3-TEX-N-39" />
																		</g>
																		<g data-mml-node="mi" transform="translate(500,0)">
																			<use
																				data-c="1D466"
																				xlinkHref="#MJX-3-TEX-I-1D466"
																			/>
																		</g>
																		<g data-mml-node="mo" transform="translate(990,0)">
																			<use data-c="2B" xlinkHref="#MJX-3-TEX-N-2B" />
																		</g>
																		<g data-mml-node="mn" transform="translate(1768,0)">
																			<use data-c={34} xlinkHref="#MJX-3-TEX-N-34" />
																		</g>
																	</g>
																	<rect width="1803.7" height={60} x={120} y={220} />
																</g>
															</g>
															<g data-mml-node="mo" transform="translate(0,205.6)">
																<use data-c="221A" xlinkHref="#MJX-3-TEX-S3-221A" />
															</g>
															<rect width="2043.7" height={60} x={1020} y="1595.6" />
														</g>
														<g data-mml-node="mo" transform="translate(3285.9,0)">
															<use data-c="2B" xlinkHref="#MJX-3-TEX-N-2B" />
														</g>
														<g data-mml-node="mn" transform="translate(4286.2,0)">
															<use data-c={38} xlinkHref="#MJX-3-TEX-N-38" />
															<use
																data-c={39}
																xlinkHref="#MJX-3-TEX-N-39"
																transform="translate(500,0)"
															/>
															<use
																data-c={39}
																xlinkHref="#MJX-3-TEX-N-39"
																transform="translate(1000,0)"
															/>
															<use
																data-c={30}
																xlinkHref="#MJX-3-TEX-N-30"
																transform="translate(1500,0)"
															/>
														</g>
													</g>
													<rect width="10664.7" height={60} x={120} y={220} />
												</g>
											</g>
										</g>
									</svg>
								</mjx-container>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
							gravida sapien. Donec semper volutpat interdum. Ut placerat sagittis
							rhoncus. Aliquam fringilla, neque eu dictum ultrices, lorem orci maximus
							lorem, eget aliquam augue erat id metus. Ut non libero sed nulla egestas
							volutpat. Vestibulum consectetur vitae eros et egestas. Nulla malesuada
							efficitur ante at fringilla. Sed odio elit, mattis eu justo ac, mattis
							malesuada nisl. Donec malesuada turpis commodo, dapibus purus nec, hendrerit
							ex. Ut suscipit auctor ex non molestie. Nullam at lorem laoreet, egestas
							justo a, ultricies mauris.
						</p>
						<p>
							Lorem ipsum dolor sit <code>amet, consectetur adipiscing elit.</code>{" "}
							Suspendisse eu gravida sapien. Donec semper volutpat interdum. Ut placerat
							sagittis rhoncus. Aliquam fringilla, neque eu dictum ultrices, lorem orci
							maximus lorem, eget aliquam augue erat id metus. Ut non libero sed nulla
							egestas volutpat. Vestibulum consectetur vitae eros et egestas. Nulla
							malesuada efficitur ante at fringilla. Sed odio elit, mattis eu justo ac,
							mattis malesuada nisl. Donec malesuada turpis commodo, dapibus purus nec,
							hendrerit ex. Ut suscipit auctor ex non molestie. Nullam at lorem laoreet,
							egestas justo a, ultricies mauris.
						</p>
						<h1>h1</h1>
						<h2>h2</h2>
						<h3>h3</h3>
						<h4>h4</h4>
						<h5>h5</h5>
						<h6>h6</h6>
						<p>
							kjkjkjkj <code>เพราะดังนั้น</code> <strong>เราจึงต้องการ</strong>
						</p>
						<pre>
							<code>
								า่า่า่าาา{"  "}code fence{"\n"}
							</code>
						</pre>
						<p>
							<code>jhj</code>
						</p>
						<h1>บทนำ</h1>
						<h2>นี่คือ h2 ของบทนำ</h2>
						<h3>นี่คือ h3 ของบทนำ</h3>
						<h1>บทที่ 1 การเติบโตขึ้น</h1>
						<h2>การที่เราต้องออกไปทำงาน</h2>
						<p>มันเป็นการทำให้เราได้ออกไปเรียนรู้สิ่งใหม่ๆ และยังได้เงินด้วย</p>
						<h3>การเตรียมตัวไปทำงาน</h3>
						<ul>
							<li>
								<p>รองเท้า</p>
								<ul>
									<li>รองเท้าผ้าใบ</li>
									<li>รองเท้าแตะ</li>
								</ul>
							</li>
							<li>
								<p>กางเกง</p>
								<ul>
									<li>
										<p>กางเกงขายาว</p>
										<ul>
											<li>
												<p>สามส่วน</p>
												<ul>
													<li>สีดำ</li>
													<li>สีเทา</li>
												</ul>
											</li>
											<li>
												<p>สี่ส่วน</p>
											</li>
										</ul>
									</li>
									<li>
										<p>กางเกงขาสั้น</p>
									</li>
								</ul>
							</li>
						</ul>
						<h3>การไปทำงาน</h3>
						<h4>การแต่งกาย</h4>
						<p>ควรสวมใส่กางเกงขายาว</p>
						<h1>บทที่ 2 ตาราง และ blockquote</h1>
						<h2>ลองพิมพ์ตาราง</h2>
						<div className="table">
							<table>
								<thead>
									<tr>
										<th>aa</th>
										<th>a</th>
										<th style={{ textAlign: "left" }}>aa</th>
										<th>bbb</th>
										<th>ccc</th>
										<th>ddd</th>
										<th>eee</th>
										<th>fff</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>aa</td>
										<td>aa</td>
										<td style={{ textAlign: "left" }}>a</td>
										<td>kjkj kjkjkjkj kjkkkkkk kkkkkkk kkkk kkkk kkk kk</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
									<tr>
										<td>dfddfdfdfdfdfd</td>
										<td>aa</td>
										<td style={{ textAlign: "left" }}>kkkkkkkk</td>
										<td>dd dd ddd dddd dddddd ddd ddd</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
									<tr>
										<td>asdf</td>
										<td>jjjhhhh</td>
										<td style={{ textAlign: "left" }}>kkjkjkjkj</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
									<tr>
										<td>asdf</td>
										<td>&nbsp;</td>
										<td style={{ textAlign: "left" }}>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
								</tbody>
							</table>
						</div>
						<h2>blockquote</h2>
						<blockquote>
							<p>การบ้าน</p>
							<p>การโรงเรียน</p>
							<p>hghghghgh</p>
						</blockquote>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}