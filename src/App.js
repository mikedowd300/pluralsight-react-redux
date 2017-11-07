import React, { PropTypes, Component } from 'react';
import Header from './components/common/Header'

class App extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// App.propTypes = {
//   children:  PropTypes.objects.isRequired
// }

export default App;
