import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

import Nav from "/components/Nav.js"
import Sidebar from '../components/Sidebar.js'
import Footer from "../components/Footer.js"


export default function RC_beam() {
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>SectionCheck</title>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat&family=Open+Sans:wght@100;200;300;400;500;600;700&family=Sarabun:wght@100;200;300;400;500;600;700&display=swap"
					rel="stylesheet" />

			</Head>
			<Script src="https://cdn.plot.ly/plotly-2.12.1.min.js" strategy="beforeInteractive"></Script>
			<Script type="text/javascript" src="/RCbeamxx.js" strategy="afterInteractive"></Script>





			<Nav />


			<div className="not-nav-bar">

				{/* <!-- side-bar-inject --> */}
				{/* <div id="sidebar-inject"></div> */}
				<Sidebar />
				{/* <link rel="stylesheet" href="/components/sidebar.css">
						<script src=" /components/sidebar-inject.js"></script> */}

				<div className="main-content-area">
					<button id="change-language">change language</button>
					<button id="calculateAndUpdateResult">calculateAndUpdateResult</button>
					<button id="redrawSVG">redrawSVG</button>
					{/* <!-- <br> --> */}

					<svg className="section-svg" width="250" height="250" viewBox="0 0 0 0">
						<rect className="parameter-rect" x="0" y="0" width="30" height="30" stroke="black" fill="transparent"
							strokeWidth="5" />
						<rect className="outer-stirrup-rect" x="0" y="0" width="30" height="30" stroke="black" fill="transparent"
							strokeWidth="1" />
						<rect className="inner-stirrup-rect" x="0" y="0" width="20" height="20" stroke="black" fill="transparent"
							strokeWidth="1" />
						<g className="topbar firstLayerList"></g>
						<g className="topbar secondLayerList"></g>
						<g className="bottombar secondLayerList"></g>
						<g className="bottombar firstLayerList"></g>
					</svg>

					<div id="myDiv1" style={{ width: "150px", height: "250px", display: "inline-block" }}></div>
					<div id="myDiv2" style={{ width: "150px", height: "250px", display: "inline-block" }}></div>

					<label className="kN-kg-switch-container">
						<div>kN</div>
						<div className="kN-kg-switch" data-unitToggle="kN">
							<div className="roundslider"></div>
						</div>
						<div>kg</div>
					</label>


					<div className="eachOutput">
						<label>negative moment capacity:</label>
						<div>
							<div id="height" className="outputBox" data-storepath='negativeюøMnю0' data-round="2"></div>
							<label data-unit="2юkNmю1юkgm" data-storepath='negativeюøMnю1'>kNm</label>
						</div>
					</div>
					<div className="eachOutput">
						<label>positive moment capacity:</label>
						<div>
							<div id="height" className="outputBox" data-storepath='positiveюøMnю0' data-round="2"></div>
							<label data-unit="2юkNmю1юkgm" data-storepath='positiveюøMnю1'>kNm</label>
						</div>
					</div>

					<div className="accordion">
						<h2 className="accordion-header" data-language='dimensionюขนาด'>dimension</h2>
						<div className="accordion-content">
							<div className="accordion-content-inner input-output-grid">
								<div className="input-grid">

									<div className="eachInput">
										<label data-language='heightюความสูง'>height:</label>
										<div>

											<input id="height" className="inputBox" type="number" placeholder="height"
												data-storepath='dimensionюheight' min="0" step="10" />

											<label>mm</label>
										</div>
									</div>

									<div className="eachInput">
										<label data-language='widthюความกว้าง'>width:</label>
										<div>
											<input id="width" className="inputBox" type="number" placeholder="width"
												data-storepath='dimensionюwidth' min="0" step="10" />
											<label>mm</label>
										</div>
									</div>

									<div className="eachInput">
										<label data-language='coveringюระยะหุ้ม'>covering:</label>
										<div>
											<input id="covering" className="inputBox" type="number" placeholder="covering"
												data-storepath='dimensionюcovering' min="0" step="5" />
											<label>mm</label>
										</div>
									</div>

									<div className="eachInput">
										<label data-language='clear distance between bar layerюระยะ'>clear distance between bar
											layer:</label>
										<div>
											<input id="covering" className="inputBox" type="number" placeholder="clear distance"
												data-storepath='dimensionюclearDistanceBetweenBarLayer' min="0" step="5" />
											<label>mm</label>
										</div>
									</div>
								</div>

								<div className="output-grid">
									{/* <!-- <div className="eachOutput">
											<label data-language='heightюความสูง'>height:</label>
											<div>
												<div id="height" className="outputBox" data-storepath='dimensionюheight'>gross area Ag=bd</div>
												<label>mm</label>
											</div> --> */}
								</div>
							</div>
						</div>
					</div>


					<div className="accordion">
						<h2 className="accordion-header" data-language='steel barюเหล็กเสริม'>steel bar</h2>
						<div className="accordion-content">
							<div className="accordion-content-inner input-output-grid">
								<div className="input-grid">
									<h3>topbarFirstLayer</h3>
									<div className=" eachInput">
										<label data-language='quantityюจำนวน'>quantity:</label>
										<div>
											<input id="topbarNumber" className="inputBox" type="number"
												data-storepath='topbarю^firstLayerList' data-command="changeArrayLength" min="0" max="20" />
											<label></label>
										</div>
									</div>
									<div className="eachInput">
										<label data-language='diameterюเส้นผ่านศูนย์กลาง'>diameter:</label>
										<div>
											<input id="topbarDiameter" className="inputBox" type="number"
												data-storepath='topbarю^firstLayerList' data-command="changeBarDiameter" min="0" max="40"
												placeholder="dia." />
											<label>mm</label>
										</div>
									</div>

									<h3>topbarSecondLayer</h3>
									<div className="eachInput">
										<label data-language='quantityюจำนวน'>quantity:</label>
										<div>
											<input id="topbarNumber" className="inputBox" type="number"
												data-storepath='topbarю^secondLayerList' data-command="changeArrayLength" min="0"
												max="20" />
											<label></label>
										</div>
									</div>
									<div className="eachInput">
										<label data-language='diameterюเส้นผ่านศูนย์กลาง'>diameter:</label>
										<div>
											<input id="topbarDiameter" className="inputBox" type="number"
												data-storepath='topbarю^secondLayerList' data-command="changeBarDiameter" min="0" max="40"
												placeholder="dia." />
											<label>mm</label>
										</div>
									</div>


									<h3>bottombarSecondLayer</h3>
									<div className="eachInput">
										<label data-language='quantityюจำนวน'>quantity:</label>
										<div>
											<input id="bottombarNumber" className="inputBox" type="number"
												data-storepath='bottombarю^secondLayerList' data-command="changeArrayLength" min="0"
												max="20" />
											<label></label>
										</div>
									</div>
									<div className="eachInput">
										<label data-language='diameterюเส้นผ่านศูนย์กลาง'>diameter:</label>
										<div>
											<input id="bottombarDiameter" className="inputBox" type="number"
												data-storepath='bottombarю^secondLayerList' data-command="changeBarDiameter" min="0"
												max="40" placeholder="dia." />
											<label>mm</label>
										</div>
									</div>

									<h3>bottombarFirstLayer</h3>
									<div className="eachInput">
										<label data-language='quantityюจำนวน'>quantity:</label>
										<div>
											<input id="bottombarNumber" className="inputBox" type="number"
												data-storepath='bottombarю^firstLayerList' data-command="changeArrayLength" min="0"
												max="20" />
											<label></label>
										</div>
									</div>
									<div className="eachInput">
										<label data-language='diameterюเส้นผ่านศูนย์กลาง'>diameter:</label>
										<div>
											<input id="bottombarDiameter" className="inputBox" type="number"
												data-storepath='bottombarю^firstLayerList' data-command="changeBarDiameter" min="0"
												max="40" placeholder="dia." />
											<label>mm</label>
										</div>
									</div>

									<h3>stirrup</h3>
									<div className="eachInput">
										<label data-language='diameterюเส้นผ่านศูนย์กลาง'>diameter:</label>
										<div>
											<input id="bottombarDiameter" className="inputBox" type="number" data-storepath='stirrup'
												data-command="changeBarDiameter" min="0" max="40" placeholder="dia." />
											<label>mm</label>
										</div>
									</div>
								</div>
								<div className="output-grid">
									<div className="eachOutput">
										<label data-language='heightюความสูง'>As':</label>
										<div>
											<div id="height" className="outputBox" data-storepath='positiveюAs_prime' data-round="2">
											</div>
											<label>mm2</label>
										</div>
									</div>
									<div className="eachOutput">
										<label data-language='heightюความสูง'>ρ':</label>
										<div>
											<div id="height" className="outputBox" data-storepath='positiveюρ_prime' data-round="5"></div>
											<label></label>
										</div>
									</div>
									<div className="eachOutput">
										<label data-language='heightюความสูง'>As:</label>
										<div>
											<div id="height" className="outputBox" data-storepath='positiveюAs' data-round="2"></div>
											<label>mm2</label>
										</div>
									</div>
									<div className="eachOutput">
										<label data-language='heightюความสูง'>ρ:</label>
										<div>
											<div id="height" className="outputBox" data-storepath='positiveюρ' data-round="5"></div>
											<label></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


					<div className="accordion">
						<h2 className="accordion-header" data-language='material propertiesюวัสดุ'>material properties</h2>
						<div className="accordion-content">
							<div className="accordion-content-inner input-output-grid">
								<div className="input-grid">
									<div className="eachInput">
										<label data-language='concrete strengthюกำลัง'>concrete strength:</label>
										<div>
											<input className="inputBox" type="number" data-storepath='materialStrengthюconcreteю0' min="0"
												step="0.1" placeholder="f'c" />
											<label className="unit-option" data-unit="1юMPaю0юksc"
												data-storepath='materialStrengthюconcreteю1'>MPa</label>
										</div>
									</div>
									<div className="eachInput">
										<label data-language='steel bar strengthюกำลังเหล็กหลัก'>steel bar strength:</label>
										<div>
											<input className="inputBox" type="number" data-storepath='materialStrengthюsteelю0' min="0"
												step="1" placeholder="fy" />
											<label className="unit-option" data-unit="0юMPaю-1юksc"
												data-storepath='materialStrengthюsteelю1'>MPa</label>
										</div>
									</div>
									<div className="eachInput">
										<label data-language='stirrup strengthюกำลังเหล็กปลอก'>stirrup strength:</label>
										<div>
											<input className="inputBox" type="number" data-storepath='materialStrengthюstirrupю0' min="0"
												step="1" placeholder="strength" />
											<label className="unit-option" data-unit="0юMPaю-1юksc"
												data-storepath='materialStrengthюstirrupю1'>MPa</label>
										</div>
									</div>

								</div>
								<div className="output-grid">
									<div className="eachOutput">
										<label>β1:</label>
										<div>
											<div id="height" className="outputBox" data-storepath='materialStrengthюβ1' data-round="2">
											</div>
											<label></label>
										</div>
									</div>
									<div className="eachOutput">
										<label>εy:</label>
										<div>
											<div id="height" className="outputBox" data-storepath='materialStrengthюεy' data-round="5">
											</div>
											<label></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				</div>
			</div>


			<Footer />


		</>
	)
}
