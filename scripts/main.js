var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({

	render: function() {
		return (
			<div>Hello</div>
		)
	}

});

//attaches transfer funds component to the html
ReactDOM.render(<Main />, document.querySelector('#main'));