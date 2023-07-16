const Accordion = (props) => {


	return (
		<div className="accordion">
			<h2 className="accordion-header" data-language='steel barюเหล็กเสริม'>{props.header_name}</h2>
			<div className="accordion-content">
				<div className="accordion-content-inner">
					<div class="grid grid-cols-[3fr_1fr] items-start gap-x-10">
						{props.children}
					</div>
				</div>
			</div>
		</div >
	)
}

export default Accordion