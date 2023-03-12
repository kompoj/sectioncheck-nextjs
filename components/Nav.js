import styles from './Nav.module.css'
import Link from 'next/link'

import SidebarStyles from './Sidebar.module.css'

import { assign, retrive } from '/public/js/utility/assign-retrive.js'
// console.log(assign)

const Nav = () => {

	return (
		<nav className={styles.nav}>
			<svg className={styles.hamburger} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
			<Link id={styles.sectioncheck_logo} href="/" >SectionCheck</Link>
			<Link href="/about">about</Link>
		</nav >
	)
}

export default Nav