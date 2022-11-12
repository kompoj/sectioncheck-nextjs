import styles from '/styles/components/Sidebar.module.css'
import Link from 'next/link'

import NavStyles from '/styles/components/Nav.module.css'

const Sidebar = () => {
	// console.log(document)

	setTimeout(() => {
		console.log("sidebar script loaded 💥", typeof document)
		typeof document !== 'undefined' && document.getElementsByClassName(NavStyles.hamburger)[0].addEventListener("click", () => {
			document.getElementById(styles.sidebar_inject).classList.add(styles.open)
		})

		typeof document !== 'undefined' && document.getElementsByClassName(styles.closebtn)[0].addEventListener("click", () => {
			document.getElementById(styles.sidebar_inject).classList.remove(styles.open)
		})
	}, 100);




	return (
		<div id={styles.sidebar_inject}>
			<div className={styles.closebtn}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>

			<a href="/RC_beam">RC beam (a tag)</a>
			<Link href="/RC_beam">RC beam (Link tag)</Link>
			<Link href="/steel_wide_flange">steel wide flange</Link>
			<a href="/shallow_foundation">shallow foundation (a tag)</a>

		</div>
	)
}

export default Sidebar