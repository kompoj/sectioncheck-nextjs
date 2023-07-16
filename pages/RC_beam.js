import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import Nav from "../components/Nav.js"
import Sidebar from '../components/Sidebar.js'
import Footer from "../components/Footer.js"

import pagestyles from './RC_beam.module.css'


import EachInput from '../components/EachInput.js'
import EachOutput from '../components/EachOutput.js'

import Accordion from '../components/Accordion.js'



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
			<Script type="module" src="/js/RC_beam_spt.js" strategy="afterInteractive"></Script>





			<Nav />

			<div className="grid grid-cols-1 lg:grid-cols-[13rem_1fr]">
				<Sidebar />
				<div className="main-content-area">
					<Accordion header_name="TRACKING WIDEST">
						<div class="tracking-widest">TRACKING-WIDEST</div>
					</Accordion>
					<div class="w-100 h-80 flex align-center justify-center items-center bg-teal-100">
						<div class="text-red-500 border-amber-300 w-80 text-center  bg-blue-200 place-content-center tracking-widest h-56 border-4">red text</div>
					</div>
					<div class="max-w-lg mx-auto p-8">
						<div class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
							<summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
								Why do they call it Ovaltine?
							</summary>
							<div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
								<p>The mug is round. The jar is round. They should call it Roundtine.</p>
							</div>
						</div>
					</div>
					<div id="accordion-collapse" data-accordion="collapse">
						<h2 id="accordion-collapse-heading-1">
							<button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
								<span>What is Flowbite?</span>
								<svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</button>
						</h2>
						<div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
							<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
								<p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
								<p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
							</div>
						</div>
						<h2 id="accordion-collapse-heading-2">
							<button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
								<span>Is there a Figma file available?</span>
								<svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</button>
						</h2>
						<div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
							<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
								<p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
								<p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
							</div>
						</div>
						<h2 id="accordion-collapse-heading-3">
							<button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
								<span>What are the differences between Flowbite and Tailwind UI?</span>
								<svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</button>
						</h2>
						<div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
							<div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
								<p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
								<p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
								<p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
								<ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
									<li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
									<li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
								</ul>
							</div>
						</div>
					</div>
					<button id="change-language">change language</button>
					<button id="calculateAndUpdateResult">calculateAndUpdateResult</button>
					<button id="redrawSVG">redrawSVG</button>
					{/* <!-- <br> --> */}

					<svg className="section-svg" width="225px" height="225px" viewBox="0 0 0 0">
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

					<div id="myDiv1" style={{ width: "135px", height: "225px", display: "inline-block" }}></div>
					<div id="myDiv2" style={{ width: "135px", height: "225px", display: "inline-block" }}></div>

					<label className="kN-kg-switch-container">
						<div>kN</div>
						<div className="kN-kg-switch" data-unit-toggle="kN">
							<div className="roundslider"></div>
						</div>
						<div>kg</div>
					</label>


					<EachOutput labelName="negative moment capacity" data_storepath="negativeюøMnю0" data_round="1" unit="kN.m" data_unit="1юkN.mю2юt.m" data_unit_storepath="negativeюøMnю1" />
					<EachOutput labelName="positive moment capacity" data_storepath="positiveюøMnю0" data_round="1" unit="kN.m" data_unit="1юkN.mю2юt.m" data_unit_storepath="positiveюøMnю1" />



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
									<EachOutput labelName="As" data_storepath="positiveюAs" data_round="2" unit="mm2" />
									<EachOutput labelName="ρ" data_storepath="positiveюρ" data_round="5" unit="" />
								</div>
							</div>
						</div>
					</div>



					<Accordion header_name="stlbar">
						<div class="grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
							<h3 class="flex items-center sm:col-span-full lg:col-span-1">topbarFirstLayer</h3>

							<EachInput labelName="quantity" placeholder="quantity" data_storepath="topbarюfirstLayerList" data_command="changeArrayLength" min="0" max="20" />
							<EachInput labelName="diameter" placeholder="dia." data_storepath="topbarюfirstLayerList" data_command="changeBarDiameter" min="0" max="40" unit="mm" />


							<h3 class="flex items-center sm:col-span-full lg:col-span-1">topbarSecondLayer</h3>
							<EachInput labelName="quantity" placeholder="quantity" data_storepath="topbarюsecondLayerList" data_command="changeArrayLength" min="0" max="20" />
							<EachInput labelName="diameter" placeholder="dia." data_storepath="topbarюsecondLayerList" data_command="changeBarDiameter" min="0" max="40" unit="mm" />


							<h3 class="flex items-center sm:col-span-full lg:col-span-1">bottombarSecondLayer</h3>
							<EachInput labelName="quantity" placeholder="quantity" data_storepath="bottombarюsecondLayerList" data_command="changeArrayLength" min="0" max="20" />
							<EachInput labelName="diameter" placeholder="dia." data_storepath="bottombarюsecondLayerList" data_command="changeBarDiameter" min="0" max="40" unit="mm" />


							<h3 class="flex items-center sm:col-span-full lg:col-span-1">bottombarFirstLayer</h3>
							<EachInput labelName="quantity" placeholder="quantity" data_storepath="bottombarюfirstLayerList" data_command="changeArrayLength" min="0" max="20" />
							<EachInput labelName="diameter" placeholder="dia." data_storepath="bottombarюfirstLayerList" data_command="changeBarDiameter" min="0" max="40" unit="mm" />

							<h3 class="flex items-center sm:col-span-full lg:col-span-1">stirrup</h3>
							<EachInput labelName="diameter" placeholder="dia." data_storepath="stirrup" data_command="changeArrayLength" min="0" max="40" />


						</div>
						<div className={pagestyles.output_grid}>
							<EachOutput labelName="As&#39;" data_storepath="positiveюAs_prime" data_round="2" unit="mm2" />
							<EachOutput labelName="ρ&#39;" data_storepath="positiveюρ_prime" data_round="5" unit="" />
							<EachOutput labelName="As" data_storepath="positiveюAs" data_round="2" unit="mm2" />
							<EachOutput labelName="ρ" data_storepath="positiveюρ" data_round="5" unit="" />
						</div>
					</Accordion>


					<div className="accordion">
						<h2 className="accordion-header" data-language='material propertiesюวัสดุ'>material properties</h2>
						<div className="accordion-content">
							<div className={`accordion-content-inner ${pagestyles.input_output_grid}`}>
								<div className={pagestyles.input_grid}>
									<EachInput labelName="concrete strength" placeholder="f&#39;c" data_storepath="materialStrengthюconcreteю0" unit="MPa" min="0" step="0.1" data_unit="-1юMPaю0юksc" data_unit_storepath="materialStrengthюconcreteю1" />
									<EachInput labelName="steel bar strength" placeholder="fy" data_storepath="materialStrengthюsteelю0" unit="MPa" min="0" step="1" data_unit="0юMPaю1юksc" data_unit_storepath="materialStrengthюsteelю1" />
									<EachInput labelName="stirrup strength" placeholder="strength" data_storepath="materialStrengthюstirrupю0" unit="MPa" min="0" step="1" data_unit="0юMPaю1юksc" data_unit_storepath="materialStrengthюstirrupю1" />



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
