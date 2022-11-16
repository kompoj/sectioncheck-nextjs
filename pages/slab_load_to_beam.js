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
			<Script type="module" src="/js/slab load to beamxx.js" strategy="afterInteractive"></Script>

			<Nav />

			<div className="not-nav-bar">
				<Sidebar />
				<div className="main-content-area">
					<EachInput labelName="S (shortside)" placeholder="S" data_storepath="initialюS" min="0" max="20" step="0.1" unit="m" />
					<EachInput labelName="L (longside)" placeholder="L" data_storepath="initialюL" min="0" max="20" step="0.1" unit="m" />
					<EachInput labelName="wu" placeholder="wu" data_storepath="initialюwu" min="0" max="1000" step="10" unit="kN/m2" />

					<EachOutput labelName="m" data_storepath="resultюm" data_round="2" unit="" />
					<EachOutput labelName="onewayortwoway" data_storepath="resultюonewayortwoway" data_round="" unit="" />
					<EachOutput labelName="VL transfer to long beam" data_storepath="resultюVL" data_round="2" unit="kN/m2" />
					<EachOutput labelName="VS transfer to short beam" data_storepath="resultюVS" data_round="2" unit="kN/m2" />
				</div>
			</div>
			<Footer />
		</>
	)
}