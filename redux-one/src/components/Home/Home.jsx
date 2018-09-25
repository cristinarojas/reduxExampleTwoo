import React from 'react';

// 6) CONNECT THE COMPONENT.
// to validate the type of the prop that we will pass to this componet.
import { bool } from 'prop-types';

// connect our component to Redux or store.
import { connect } from 'react-redux';

const Home = props => {
  // As we have the state already in the props of this component...i can access.
  // access to the { node isMobile } of the props of this component.
  const { isMobile } = props;
  console.log('AL OBJECT OF PROPS OF THIS COMPONENT', props); // {match: {…}, location: {…}, history: {…}, staticContext: undefined, isMobile: false}
  console.log('NODE OF PROPS', { isMobile } ); // {isMobile: false}


  return (
    <div>
      <h1>Home componet</h1>
      <strong>{ isMobile ? 'You are using mobile': 'You are using desktop' }</strong>
    </div>
  );
};

// Validating the prop type passing.
Home.propTypes = {
  isMobile: bool
};


// here receive the redux store and add the state to props of this component.
function mapStateToProps(x) {
  console.log('state --->', x);
  return {
    isMobile: x.device.isMobile // isMobile is the name of the node that will be appear in general props.
  };
}


function mapDispatchToProps() {
  return {};
}

// Here im executing the functions.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
