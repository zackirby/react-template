import React from 'react';

export default class images extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getData();
	}

	render() {
		let imgList = this.props.imgSrc.slice(this.props.imgPos, this.props.imgPos + 2).map ( (image, index) => {
			return <img key={index} src={"http://atmedia.imgix.net/" + image + "?w=400&h=300&fit=crop"} />
		});
		return (
			<div className="imgList">{imgList}</div>
		)
	}
}
