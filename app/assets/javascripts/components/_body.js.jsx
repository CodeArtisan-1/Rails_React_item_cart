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

	handleDelete(id) {
		console.log('in handle delete');
		$.ajax({
			url: `api/v1/items/${id}`,
			type: 'DELETE',
			success: (response) => {
				console.log('successfully removed item')
				this.removeItemClient(id);
			}
		})
	},

	removeItemClient(id) {
		var newItems = this.state.items.filter((item) => {
			return item.id != id;
		});

		this.setState({ items: newItems })
	},

	render() {
		return (
			<div>
				<NewItem handleSubmit={this.handleSubmit} />
				<AllItems items={this.state.items} handleDelete={this.handleDelete} />
			</div>
		)
	}
})