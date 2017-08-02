var Item = React.createClass({
	render() {
		return (
			<div>
				<h3>{ this.props.item.name }</h3>
				<p>{ this.props.item.description }</p>
				<button onClick={this.props.handleEdit}>Edit</button>
				<button onClick={this.props.handleDelete}>Delete</button>
			</div>
			
		)
	}
})