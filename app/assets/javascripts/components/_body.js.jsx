var Body = React.createClass({
	componentDidMount() {
		$.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
	},

	getInitialState() {
		return { items: [] }
	},

	handleSubmit(item) {
		var newState = this.state.items.concat(item);
		this.setState({ items: newState })
	},

	render() {
		return (
			<div>
				<NewItem handleSubmit={this.handleSubmit} />
				<AllItems items={this.state.items} />
			</div>
		)
	}
})