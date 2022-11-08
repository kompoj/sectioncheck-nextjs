// import styles from '/componentStyles/EachInput.module.css'


const EachInput = (props) => {
	console.log(props)
	return (
		<div className="eachInput">
			<label>{props.label}</label>
			<div>

				<input className="inputBox" type="number" placeholder={props.placeholder}
					data-storepath={props.data_storepath} min={props.min} max={props.max} step={props.step} />

				<label>{props.unit}</label>
			</div>
		</div>
	)
}

export default EachInput