import '/styles/globals/globals.css'
// import '../styles/globals/base.css'
import '/styles/globals/my-theme typora.css'
import '/styles/globals/prism.css'

import Script from 'next/script'


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script type="text/javascript" src="/js/prism.js" strategy="afterInteractive"></Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp