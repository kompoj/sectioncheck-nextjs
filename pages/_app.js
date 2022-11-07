import '../pageStyles/globals.css'
// import '../pageStyles/base.css'
import '../pageStyles/my-theme typora.css'
import '../pageStyles/prism.css'

import Script from 'next/script'


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script type="text/javascript" src="/prism.js" strategy="afterInteractive"></Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp