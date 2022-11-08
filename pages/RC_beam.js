import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import Nav from "/components/Nav.js"
import Sidebar from '../components/Sidebar.js'
import Footer from "../components/Footer.js"

import pagestyles from '../pageStyles/RC_beam.module.css'


import EachInput from '../components/EachInput.js'
import EachOutput from '../components/EachOutput.js'


export default function RC_beam() {

	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>RC beam-SectionCheck</title>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat&family=Open+Sans:wght@100;200;300;400;500;600;700&family=Sarabun:wght@100;200;300;400;500;600;700&display=swap"
					rel="stylesheet" />


			</Head>
			<Script src="https://cdn.plot.ly/plotly-2.12.1.min.js" strategy="beforeInteractive"></Script>
			<Script type="module" src="/js/RCbeamxx.js" strategy="afterInteractive"></Script>





			<Nav />

			<div className="not-nav-bar">
				<Sidebar />
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


					<EachOutput labelName="negative moment capacity" data_storepath="negativeюøMnю0" data_round="2" unit="kNm" data_unit="2юkNmю1юkgm" data_unit_storepath="negativeюøMnю1" />
					<EachOutput labelName="positive moment capacity" data_storepath="positiveюøMnю0" data_round="2" unit="kNm" data_unit="2юkNmю1юkgm" data_unit_storepath="positiveюøMnю1" />



					<div className="accordion">
						<h2 className="accordion-header" data-language='dimensionюขนาด'>dimension</h2>
						<div className="accordion-content">
							<div className={`accordion-content-inner ${pagestyles.input_output_grid}`}>
								<div className={pagestyles.input_grid}>

									<EachInput labelName="height" placeholder="height" data_storepath="dimensionюheight" min="0" step="10" unit="mm" />
									<EachInput labelName="width" placeholder="width" data_storepath="dimensionюwidth" min="0" step="10" unit="mm" />
									<EachInput labelName="covering" placeholder="covering" data_storepath="dimensionюcovering" min="0" step="5" unit="mm" />
									<EachInput labelName="clear distance between bar layer" placeholder="" data_storepath="dimensionюclearDistanceBetweenBarLayer" min="0" step="5" unit="mm" />

									<div className={pagestyles.output_grid}>
									</div>
								</div>
							</div>
						</div>
					</div>


					<div className="accordion">
						<h2 className="accordion-header" data-language='steel barюเหล็กเสริม'>steel bar</h2>
						<div className="accordion-content">
							<div className={`accordion-content-inner ${pagestyles.input_output_grid}`}>
								<div className={pagestyles.input_grid}>
									<h3>topbarFirstLayer</h3>

									<EachInput labelName="quantity" placeholder="quantity" data_storepath="topbarюfirstLayerList" data_command="changeArrayLength" min="0" max="20" />
									<EachInput labelName="diameter" placeholder="dia." data_storepath="topbarюfirstLayerList" data_command="changeBarDiameter" min="0" max="40" unit="mm" />


									<h3>topbarSecondLayer</h3>
									<EachInput labelName="quantity" placeholder="quantity" data_storepath="topbarюsecondLayerList" data_command="changeArrayLength" min="0" max="20" />
									<EachInput labelName="diameter" placeholder="dia." data_storepath="topbarюsecondLayerList" data_command="changeBarDiameter" min="0" max="40" unit="mm" />


									<h3>bottombarSecondLayer</h3>
									<EachInput labelName="quantity" placeholder="quantity" data_storepath="bottombarюsecondLayerList" data_command="changeArrayLength" min="0" max="20" />
									<EachInput labelName="diameter" placeholder="dia." data_storepath="bottombarюsecondLayerList" data_command="changeBarDiameter" min="0" max="40" unit="mm" />


									<h3>bottombarFirstLayer</h3>
									<EachInput labelName="quantity" placeholder="quantity" data_storepath="bottombarюfirstLayerList" data_command="changeArrayLength" min="0" max="20" />
									<EachInput labelName="diameter" placeholder="dia." data_storepath="bottombarюfirstLayerList" data_command="changeBarDiameter" min="0" max="40" unit="mm" />

									<h3>stirrup</h3>
									<EachInput labelName="diameter" placeholder="dia." data_storepath="stirrup" data_command="changeArrayLength" min="0" max="40" />


								</div>
								<div className={pagestyles.output_grid}>
									<EachOutput labelName="As&#39;" data_storepath="positiveюAs_prime" data_round="2" unit="mm2" />
									<EachOutput labelName="ρ&#39;" data_storepath="positiveюρ_prime" data_round="5" unit="" />
									<EachOutput labelName="As" data_storepath="positiveюAs" data_round="5" unit="" />
									<EachOutput labelName="ρ" data_storepath="positiveюρ" data_round="5" unit="" />
								</div>
							</div>
						</div>
					</div>


					<div className="accordion">
						<h2 className="accordion-header" data-language='material propertiesюวัสดุ'>material properties</h2>
						<div className="accordion-content">
							<div className={`accordion-content-inner ${pagestyles.input_output_grid}`}>
								<div className={pagestyles.input_grid}>
									<EachInput labelName="concrete strength" placeholder="f&#39;c" data_storepath="materialStrengthюconcreteю0" unit="MPa" min="0" step="0.1" data_unit="1юMPaю0юksc" data_unit_storepath="materialStrengthюconcreteю1" />
									<EachInput labelName="steel bar strength" placeholder="fy" data_storepath="materialStrengthюsteelю0" unit="MPa" min="0" step="1" data_unit="0юMPaю-1юksc" data_unit_storepath="materialStrengthюsteelю1" />
									<EachInput labelName="stirrup strength" placeholder="strength" data_storepath="materialStrengthюstirrupю0" unit="MPa" min="0" step="1" data_unit="0юMPaю-1юksc" data_unit_storepath="materialStrengthюstirrupю1" />



								</div>
								<div className={pagestyles.output_grid}>

									<EachOutput labelName="β1" data_storepath="materialStrengthюβ1" data_round="2" unit="" />
									<EachOutput labelName="εy" data_storepath="materialStrengthюεy" data_round="5" unit="" />

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
