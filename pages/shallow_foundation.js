import Head from 'next/head'
import Script from 'next/script'

import Nav from "/components/Nav.js"
import Sidebar from '../components/Sidebar.js'
import Footer from '../components/Footer.js'

import EachInput from '../components/EachInput.js'
import EachOutput from '../components/EachOutput.js'


export default function shallow_foundation() {

	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>shallow foundation-SectionCheck</title>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat&family=Open+Sans:wght@100;200;300;400;500;600;700&family=Sarabun:wght@100;200;300;400;500;600;700&display=swap"
					rel="stylesheet" />


			</Head>
			{/* <Script src="https://cdn.plot.ly/plotly-2.12.1.min.js" strategy="beforeInteractive"></Script> */}
			<Script type="module" src="/js/shallow_foundation_spt.js" strategy="afterInteractive"></Script>

			<Nav />

			<div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
				<Sidebar />
				<div className="main-content-area">

					<label className="kN-kg-switch-container">
						<div>kN</div>
						<div className="kN-kg-switch" data-unit-toggle="kN">
							<div className="roundslider"></div>
						</div>
						<div>kg</div>
					</label>


					<EachInput labelName="fc" data_storepath="iputюfcю0" min="0" max="" step="0.1" unit="MPa" data_unit="-1юMPaю0юksc" data_unit_storepath="iputюfcю1" />
					<EachInput labelName="b0" data_storepath="iputюb0ю0" min="0" max="" step="0.1" unit="mm" data_unit="0юmmю0юcm" data_unit_storepath="iputюb0ю1" />
					<EachInput labelName="d" data_storepath="iputюdю0" min="0" max="" step="0.1" unit="mm" data_unit="0юmmю0юcm" data_unit_storepath="iputюdю1" />


					<EachOutput labelName="punchingShearCap" data_storepath="oputюpunchingShearCapю0" data_round="2" unit="kN" data_unit="4юkNю5юkg" data_unit_storepath="oputюpunchingShearCapю1" />
				</div>
			</div>
			<Footer />
		</>
	)
}