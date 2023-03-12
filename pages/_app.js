import './globalstyles/accordion.css'
import './globalstyles/globals.css'
import './globalstyles/my-theme typora.css'
import './globalstyles/prism.css'

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