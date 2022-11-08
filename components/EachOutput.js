// import styles from '/componentStyles/EachInput.module.css'


const EachOutput = (props) => {
	console.log(props)
	return (
		<div className="eachOutput">
			<label>{props.label}</label>
			<div className="flex-align-center">
				<div className="outputBox" data-storepath={props.data_storepath} data-round={props.data_round} />
				<label data-unit={props.data_unit} data-storepath={props.data_storepath_unit}>{props.unit}</label>
			</div>
		</div>
	)
}

export default EachOutput