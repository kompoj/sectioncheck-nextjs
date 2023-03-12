// import styles from '/componentStyles/EachInput.module.css'

// eachoutput and eachinput cannot be .module.css because this class is used by javascipt selector

const EachOutput = (props) => {
	return (
		<div className="eachOutput">
			<label>{props.labelName}:</label>
			<div className="flex-align-center">
				<div className="outputBox" data-storepath={props.data_storepath} data-round={props.data_round} />
				<label data-unit={props.data_unit} data-storepath={props.data_unit_storepath}>{props.unit}</label>
			</div>
		</div>
	)
}

export default EachOutput