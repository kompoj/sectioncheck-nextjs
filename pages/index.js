import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Nav from "/components/Nav.js"
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
