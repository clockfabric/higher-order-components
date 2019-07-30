import React from "react";

const withData = (WrappedComponent, dataSource) => {
	class WithData extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				sourcedData: []
			};
		}

		componentDidMount() {
			fetch(this.props.dataSource)
				.then(response => response.json())
				.then(data => this.setState({ sourcedData: data.slice(0, 4) }))
				.catch(error => console.log(error.message));
		}

		render() {
			return (
				<WrappedComponent
					data={this.state.sourcedData}
					{...this.props}
				/>
			);
		}
	}

	return WithData;
};

export default withData;
