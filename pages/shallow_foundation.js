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

				{/* <script src="https://cdn.plot.ly/plotly-2.12.1.min.js"></script>
				<script defer src={scriptpath}></script> */}

			</Head>
			{/* <Script src="https://cdn.plot.ly/plotly-2.12.1.min.js" strategy="beforeInteractive"></Script> */}
			<Script type="text/javascript" src="/shallow foundationxx.js" strategy="afterInteractive"></Script>

			<Nav />

			<div className="not-nav-bar">
				<Sidebar />
				<div className="main-content-area">
					<div className="eachInput">
						<label data-language='heightюความสูง'>height:</label>
						<div>

							<input id="height" className="inputBox" type="number" placeholder="height"
								data-storepath='dimensionюheight' min="0" step="10" />

							<label>mm</label>
						</div>
					</div>
					<EachInput label="number1" placeholder="PH1" data_storepath="number1ю" min="0" max="20" step="0.25" unit="N" />
					<EachInput label="number2" placeholder="PH2" data_storepath="number2ю" min="0" max="120" step="10" unit="m" />
					<EachOutput label="multiplication" data_storepath="multiplicationю" data_round="2" unit="Nm" />
					<EachOutput label="add" data_storepath="addю" data_round="2" unit="N+m" />
				</div>
			</div>
			<Footer />
		</>
	)
}