import styles from './Sidebar.module.css'
import Link from 'next/link'

import NavStyles from './Nav.module.css'

const Sidebar = () => {
	// console.log(document)

	setTimeout(() => {
		// console.log("sidebar script loaded 💥", typeof document)
		typeof document !== 'undefined' && document.getElementsByClassName(NavStyles.hamburger)[0].addEventListener("click", () => {
			// document.getElementById(styles.sidebar_inject).classList.add(styles.open)
			document.getElementById("sidebar_maincontainer").setAttribute("aria-expanded", "true")
		})

		typeof document !== 'undefined' && document.getElementById("sidebar_closebtn").addEventListener("click", () => {
			// document.getElementById(styles.sidebar_inject).classList.remove(styles.open)
			document.getElementById("sidebar_maincontainer").setAttribute("aria-expanded", "false")
		})
	}, 100);




	return (
		<div id="sidebar_maincontainer" aria-expanded="false" class="fixed lg:sticky w-0 aria-expanded:w-52 lg:w-52 left-0 top-0 lg:top-10 z-30 lg:z-10 overflow-hidden h-screen bg-[url('/img/bgnoise-lightblueslate.png')]">
			<div id="sidebar_closebtn" class="block pointer w-8 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>
			<div class="divide-y-2 space-y-1">
				<a href="/RC_beam" class="block border-yellow-500 pt-1">RC beam (a tag)</a>
				<Link href="/RC_beam" class="block border-yellow-500 pt-1">RC beam (Link tag)</Link>
				<Link href="/steel_wide_flange" class="block border-yellow-500 pt-1">steel wide flange</Link>
				<a href="/shallow_foundation" class="block border-yellow-500 pt-1">shallow foundation (a tag)</a>
				<a href="/slab_load_to_beam" class="block border-yellow-500 pt-1">slab load to beam (a tag)</a>
			</div>
		</div>
	)
}

export default Sidebar