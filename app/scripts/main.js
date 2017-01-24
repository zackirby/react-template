import React from 'react';
import ReactDOM from 'react-dom';
import Images from './components/images.component';

export default class Main extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Images /></div>
    );
  }
}


//attaches transfer funds component to the html
ReactDOM.render(<Main />, document.querySelector('#main'));