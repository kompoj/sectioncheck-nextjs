import Head from 'next/head'
import Image from 'next/image'

import Nav from "../components/Nav.js"
import Sidebar from "../components/Sidebar.js"
import Footer from "../components/Footer.js"

export default function Home() {
	return (
		<>
			<link
				href="https://fonts.googleapis.com/css2?family=Caveat&family=Open+Sans:wght@100;200;300;400;500;600;700&family=Sarabun:wght@100;200;300;400;500;600;700&display=swap"
				rel="stylesheet" />
			<Nav />
			<div className="not-nav-bar">
				<Sidebar />
				<div>WELCOME TO first page</div>
			</div>
			<Footer />

		</>
	)
}
