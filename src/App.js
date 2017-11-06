import React, { PropTypes, Component } from 'react';

class App extends Component {
  render() {
    return(
      <div className="container-fluid">
        <p>Header here ...</p>
        {this.props.children}
      </div>
    );
  }
}

// App.propTypes = {
//   children:  PropTypes.objects.isRequired
// }

export default App;
