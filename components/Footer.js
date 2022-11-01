
import Link from 'next/link'



const Footer = () => {

	const FooterStyles = {
		height: "400px",
		background: `url("/bgnoise-lightblue.png")`
	}

	return (
		<div id="footer_inject" className="footer_inject" style={FooterStyles}>
			this is footer
		</div >

	)
}

export default Footer