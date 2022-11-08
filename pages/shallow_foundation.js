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
			<Script type="text/javascript" src="/js/shallow foundationxx.js" strategy="afterInteractive"></Script>

			<Nav />

			<div className="not-nav-bar">
				<Sidebar />
				<div className="main-content-area">
					<EachInput label="number1" placeholder="PH1" data_storepath="initialюnumber1" min="0" max="120" step="10" unit="N" />
					<EachInput label="number2" placeholder="PH2" data_storepath="initialюnumber2" min="0" max="20" step="0.25" unit="m" />
					<EachOutput label="multiplication" data_storepath="resultюmultiplication" data_round="2" unit="Nm" />
					<EachOutput label="addition" data_storepath="resultюaddition" data_round="2" unit="N+m" />
					<EachOutput label="subtraction" data_storepath="resultюsubtraction" data_round="2" unit="N-m" />
					<EachOutput label="division" data_storepath="resultюdivision" data_round="2" unit="N/m" />
				</div>
			</div>
			<Footer />
		</>
	)
}