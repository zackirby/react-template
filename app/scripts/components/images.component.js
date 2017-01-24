import React from 'react';
import $ from 'jquery';

export default class images extends React.Component {

	static propTypes = {
		images: React.PropTypes.array
	};

	static defaultProps = {
		images: []
	}

	componentDidMount() {
		var jqxhr = $.getJSON( "http://www.apartmenttherapy.com/admin/galleries/sample.json", {
			crossDomain: true
		}, function() {
		  console.log( "success" );
		})
		  .done(function() {
		    console.log( "second success" );
		  })
		  .fail(function() {
		    console.log( "error" );
		  })
		  .always(function() {
		    console.log( "complete" );
		  });
	}


	render() {
		return (
			<div>
			{//this.state.images.map = ((image, index) => {
				//return (
				//	<img src={"http://atmedia.imgix.net/" + image[index]}/>
				//	)
				//})
			}
			</div>
		 );
	}
}
