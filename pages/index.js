import Head from 'next/head'
import Image from 'next/image'

import Nav from "../components/Nav.js"
import Sidebar from "../components/Sidebar.js"
import Footer from "../components/Footer.js"

export default function Home() {
	return (
		<>

			<Nav />
			<div className="not-nav-bar">
				<Sidebar />
				<div>WELCOME</div>
			</div>
			<Footer />

		</>
	)
}
