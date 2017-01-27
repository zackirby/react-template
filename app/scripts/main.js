import React from 'react';
import ReactDOM from 'react-dom';
import Images from './components/images.component';
import Like from './components/like.component';

export default class Main extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      imgCount: 5
    }
  }

  render() {
    return (
      <div className="container">
        <Images/>
        <Like/>
      </div>
    );
  }
}


//attaches transfer funds component to the html
ReactDOM.render(<Main />, document.querySelector('#main'));