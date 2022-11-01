import styles from '/styles/Sidebar.module.css'
import Link from 'next/link'

import NavStyles from '../styles/Nav.module.css'

const Sidebar = () => {
	console.log(styles.closebtn)
	console.log(NavStyles.hamburger)
	// console.log(document)

	setTimeout(() => {
		document.getElementsByClassName(NavStyles.hamburger)[0].addEventListener("click", () => {
			document.getElementById(styles.sidebar_inject).classList.add(styles.open)
		})

		document.getElementsByClassName(styles.closebtn)[0].addEventListener("click", () => {
			document.getElementById(styles.sidebar_inject).classList.remove(styles.open)
		})
	}, 1000);




	return (
		<div id={styles.sidebar_inject}>
			<div className={styles.closebtn}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>

			<a href="/RC_beam">RC beam (a tag)</a>
			<Link href="/RC_beam">RC beam (Link tag)</Link>
			{/* <Link href="/steel wide flange.html">steel wide flange</Link> */}
		</div>
	)
}

export default Sidebar