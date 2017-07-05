import React, { PropTypes } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default App;
