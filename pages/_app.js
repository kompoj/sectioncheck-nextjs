import '../pageStyles/globals.css'
// import '../pageStyles/base.css'
import '../pageStyles/my-theme typora.css'

import Script from 'next/script'


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
