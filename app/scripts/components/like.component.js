import React from 'react';
import cx from 'classnames';

export default class Like extends React.Component {

  constructor(props) {
    super(props);
	this.likeClick = this.likeClick.bind(this);
	this.dislikeClick = this.dislikeClick.bind(this);

    this.state = {
    	rating: null,
		like: false,
		dislike: false,
    }
  };

	likeClick() {
		this.setState({
			like: !this.state.like
		});
	}

	dislikeClick() {
		this.setState({
			dislike: !this.state.dislike 
		});
	}

  render() {
  	let likeClasses = cx("fa-stack fa-lg like", {active: this.state.like});
  	let dislikeClasses = cx("fa-stack fa-lg dislike", {active: this.state.dislike});
    return (
      <div className="rating">
      	<a href="#" className={likeClasses} ref="liked" onClick={this.likeClick}>
      		<i className="fa fa-circle fa-stack-2x"></i>
      		<i className="fa fa-thumbs-up fa-inverse fa-stack-1x"></i>
      		<span>Like</span>
      	</a>
      	<a href="#" className={dislikeClasses} ref="disliked" onClick={this.dislikeClick}>
      		<i className="fa fa-circle fa-stack-2x"></i>
      		<i className="fa fa-thumbs-down fa-inverse fa-stack-1x"></i>
      		<span>Like</span>
      	</a>
      </div>
    );
  }
}
