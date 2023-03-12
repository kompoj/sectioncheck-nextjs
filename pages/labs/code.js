import Script from 'next/script'

export default function code() {

	const thisiscode = `import styles from '/components/Nav.module.css'
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
				<p>this method struck it&#39;s text into HTML view source</p>
				<pre>
					<code className="language-javascript">
						{thisiscode}
					</code>
				</pre>
			</div>

			<div style={{ width: 1000, margin: "50px auto" }}>
				<pre data-src="/js/RandChar.ahk" data-download-link className="language-autohotkey">
					<code className="language-autohotkey">
					</code>
				</pre>
			</div>

			<div style={{ width: 1000, height: 500, overflow: "auto", margin: "100px auto" }}>
				<pre data-src="/js/gui civil.ahk" data-download-link className="language-autohotkey">
					<code className="language-autohotkey">
					</code>
				</pre>
			</div>

			{/* <div suppressHydrationWarning={true}> */}
			{/* <Script src="https://pastebin.com/embed_js/wFN21Rrd" strategy="afterInteractive"></Script>
			<Script src="https://gist.github.com/kompoj/da371c847eeb91cc2b0dabdf3c0c14a4.js" strategy="afterInteractive"></Script> */}
			{/* generate ERROR : Text content does not match server-rendered HTML. */}
			{/* https://stackoverflow.com/questions/24297829/execute-write-on-doc-it-isnt-possible-to-write-into-a-document-from-an-asynchr */}
			{/* you can't use document.write() from such a script (well technically you can, but it won't do what you want).You will need to replace any document.write() statements in that script with explicit DOM manipulations by creating the DOM elements and then inserting them into a particular parent with .appendChild() or .insertBefore() or setting .innerHTML */}


			{/* </div> */}


			<div id="root"></div>
			{/* DOESN'T WORK */}
			{/* <script>document.getElementById("root").innerHTML = "HI HI HI"</script> */}
			{/* generate ERROR : Text content does not match server-rendered HTML. */}
			{/* เป็นเพราะว่า react มันยังไม่ hydrate เลยเหมือนกับใส่ innerHTML เร็วเกินไป ทำให้ DOM ของ client side กับ server side มีความแตกต่างกัน */}


			{/* DOESN'T WORK */}
			{/* <Script strategy="beforeInteractive">
				const text = "HI HI HI";
				document.getElementById("root").innerHTML = text
			</Script> */}

			{/* WORK! */}
			{/* <Script strategy="afterInteractive">
				const texts = "Hello";
				document.getElementById("root").innerHTML = texts
			</Script> */}

			<iframe src="https://pastebin.com/embed_iframe/wFN21Rrd" style={{ border: "none", width: "50%", height: 315 }}></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/Cb_OvX7_uMg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

			<blockquote className="imgur-embed-pub" lang="en" data-id="a/mDZrukN"  ><a href="//imgur.com/a/mDZrukN">Sea otters hold hands while sleeping, just a natural act so they don&#39;t drift apart.</a></blockquote>
			{/* <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
			<Script async src="//s.imgur.com/min/embed.js" charset="utf-8"></Script>

			<iframe src="https://i.imgur.com/pUbmp1d.mp4"></iframe>
			<video controls width="250">

				<source src="https://i.imgur.com/pUbmp1d.mp4"
					type="video/webm" />
			</video>
			<img src="https://i.imgur.com/oXVZv4K.gif"></img>
			<img src="https://i.imgur.com/NAcWuNb.gif"></img>
		</>
	)
}