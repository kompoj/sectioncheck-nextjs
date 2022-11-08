// import styles from '/componentStyles/EachInput.module.css'


const EachInput = (props) => {
	// console.log(props)
	return (
		<div className="eachInput">
			<label>{props.labelName}:</label>
			<div className="flex-align-center">
				<input className="inputBox" type="number" placeholder={props.placeholder}
					data-storepath={props.data_storepath} data-command={props.data_command} min={props.min} max={props.max} step={props.step} />

				<label data-unit={props.data_unit} data-storepath={props.data_unit_storepath}>{props.unit}</label>
			</div>
		</div>
	)
}

export default EachInput