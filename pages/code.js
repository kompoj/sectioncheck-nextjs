export default function code() {

	const thisiscode = `import styles from '/componentStyles/Nav.module.css'
import Link from 'next/link'

import SidebarStyles from '/componentStyles/Sidebar.module.css'

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

export default Nav`
	return (
		<>
			<div style={{ width: 1000, margin: "50px auto" }}>
				<pre >
					<code className="language-javascript" lang="javascript">
						import styles from &#39;/componentStyles/Nav.module.css&#39;{"\n"}import Link
						from &#39;next/link&#39;{"\n"}
						{"\n"}import SidebarStyles from &#39;/componentStyles/Sidebar.module.css&#39;{"\n"}
						{"\n"}const Nav = () =&gt; {"{"}
						{"\n"}
						{"\n"}
						{"\t"}return ({"\n"}
						{"\t"}
						{"\t"}&lt;nav className={"{"}styles.nav{"}"}&gt;{"\n"}
						{"\t"}
						{"\t"}
						{"\t"}&lt;svg className={"{"}styles.hamburger{"}"}{" "}
						xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot;
						strokeWidth=&quot;1.5&quot; stroke=&quot;currentColor&quot;&gt;{"\n"}
						{"\t"}
						{"\t"}
						{"\t"}
						{"\t"}&lt;path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; d=&quot;M3.75
						6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5&quot; /&gt;{"\n"}
						{"\t"}
						{"\t"}
						{"\t"}&lt;/svg&gt;{"\n"}
						{"\t"}
						{"\t"}
						{"\t"}&lt;Link id={"{"}styles.sectioncheck_logo{"}"} href=&quot;/&quot;
						&gt;SectionCheck&lt;/Link&gt;{"\n"}
						{"\t"}
						{"\t"}
						{"\t"}&lt;Link href=&quot;/about&quot;&gt;about&lt;/Link&gt;{"\n"}
						{"\t"}
						{"\t"}&lt;/nav &gt;{"\n"}
						{"\t"}){"\n"}
						{"}"}
						{"\n"}
						{"\n"}export default Nav{"\n"}
					</code>
				</pre>
			</div>

			<div style={{ width: 1000, margin: "50px auto" }}>
				<p>this method struck it&#39;npm s text into HTML view source</p>
				<pre>
					<code className="language-javascript">
						{thisiscode}
					</code>
				</pre>
			</div>

			<div style={{ width: 1000, margin: "50px auto" }}>
				<pre data-src="/RandChar.ahk" data-download-link className="language-autohotkey">
					<code className="language-autohotkey">
					</code>
				</pre>
			</div>

			<div style={{ width: 1000, height: 500, overflow: "auto", margin: "100px auto" }}>
				<pre data-src="/gui civil.ahk" data-download-link className="language-autohotkey">
					<code className="language-autohotkey">
					</code>
				</pre>
			</div>

			<script defer src="https://gist.github.com/kompoj/da371c847eeb91cc2b0dabdf3c0c14a4.js"></script>
		</>
	)
}