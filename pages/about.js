import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Nav from "/components/Nav.js"
import Sidebar from "/components/Sidebar.js"

export default function about() {
	return (
		<>
			<Nav />
			<div class="not-nav-bar">
				<Sidebar />
				about
			</div>
		</>
	)
}