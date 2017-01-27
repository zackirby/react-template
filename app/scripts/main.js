import React from 'react';
import ReactDOM from 'react-dom';
import Images from './components/images.component';
import Rate from './components/rate.component';
import Liked from './components/liked.component';

export default class Main extends React.Component {
  static propTypes = {
    imgCount: React.PropTypes.func,
    imgPos: React.PropTypes.func,
    images: React.PropTypes.array,
    likedImgs: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.nextImg = this.nextImg.bind(this);
    this.updateJson = this.updateJson.bind(this);
    this.state = {
      imgCount: 0,
      imgPos: 0,
      images: [],
      likedImgs: [],
    }
  }

  updateJson(){
    if(this.state.images == '') {
      fetch('http://www.apartmenttherapy.com/admin/galleries/sample.json', {mode: 'cors'})
          .then( (response) => {
              return response.json() })   
                  .then( (json) => {
                      this.setState({images: json, imgCount: json.length-1});
              }
          )
          .catch( (err) => {
            console.log('Fetch error: ', err);
          });
      } else {
        let lastImg = this.state.images[this.state.imgCount];
        fetch('http://www.apartmenttherapy.com/admin/galleries/sample.json', {mode: 'cors'})
          .then( (response) => {
              return response.json();
          })   
          .then( (json) => {
            json.unshift(lastImg);
            this.setState({ images: json, imgCount: json.length-1 });
          })
          .then ( () => {
            this.setState({ imgPos: 0 });
          })
          .catch( (err) => {
            console.log('Fetch error: ', err);
          });
     }
  }

  nextImg(e) {
    console.log(e.target.parentNode.className);
    if(e.target.parentNode.classList.contains('like')) {
      this.setState({
        likedImgs: this.state.images[this.state.imgPos]
      });
      console.log(this.state.likedImgs);
    }
    if (this.state.imgPos < this.state.imgCount-1) {
      this.setState({
        imgPos: this.state.imgPos + 1 
      });
    } else {
      this.updateJson();
    }
    console.log(this.state.images);
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Images ref="images" imgPos={this.state.imgPos} imgSrc={this.state.images} getData={this.updateJson}/>
        <Rate rateClick={this.nextImg}/>
        <Liked likedImages={this.state.likedImgs}/>
      </div>
    );
  }
}


//attaches transfer funds component to the html
ReactDOM.render(<Main />, document.querySelector('#main'));