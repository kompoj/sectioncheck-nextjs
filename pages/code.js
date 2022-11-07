export default function code() {
	return (
		<>

			<pre style={{ width: 1000, margin: "100px auto" }}>
				<code className="language-javascript" lang="javascript">
					import styles from '/componentStyles/Nav.module.css'{"\n"}import Link
					from 'next/link'{"\n"}
					{"\n"}import SidebarStyles from '/componentStyles/Sidebar.module.css'{"\n"}
					{"\n"}const Nav = () =&gt; {"{"}
					{"\n"}
					{"\n"}
					{"\t"}return ({"\n"}
					{"\t"}
					{"\t"}&lt;nav className={"{"}styles.nav{"}"}&gt;{"\n"}
					{"\t"}
					{"\t"}
					{"\t"}&lt;svg className={"{"}styles.hamburger{"}"}{" "}
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					strokeWidth="1.5" stroke="currentColor"&gt;{"\n"}
					{"\t"}
					{"\t"}
					{"\t"}
					{"\t"}&lt;path strokeLinecap="round" strokeLinejoin="round" d="M3.75
					6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /&gt;{"\n"}
					{"\t"}
					{"\t"}
					{"\t"}&lt;/svg&gt;{"\n"}
					{"\t"}
					{"\t"}
					{"\t"}&lt;Link id={"{"}styles.sectioncheck_logo{"}"} href="/"
					&gt;SectionCheck&lt;/Link&gt;{"\n"}
					{"\t"}
					{"\t"}
					{"\t"}&lt;Link href="/about"&gt;about&lt;/Link&gt;{"\n"}
					{"\t"}
					{"\t"}&lt;/nav &gt;{"\n"}
					{"\t"}){"\n"}
					{"}"}
					{"\n"}
					{"\n"}export default Nav{"\n"}
				</code>
			</pre>


		</>
	)
}