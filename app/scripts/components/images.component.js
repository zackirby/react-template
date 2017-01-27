import React from 'react';

export default class images extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			images: []
		}
		this.updateJson = this.updateJson.bind(this);
	}

	componentDidMount() {
		this.updateJson();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.state.images, this.state.imgCount);
	}

	updateJson(){
		fetch("http://www.apartmenttherapy.com/admin/galleries/sample.json")
        .then( (response) => {
            return response.json() })   
                .then( (json) => {
                    this.setState({images: json});
            }
        );
	}

	render() {
		let imgList = this.state.images.map ( (image, index) => {
			return <img key={index} src={"http://atmedia.imgix.net/" + image + "?w=400&h=300&fit=crop"} alt="some text" />
		});
		return (
			<div className="imgList">{imgList}</div>
		)
	}
}
