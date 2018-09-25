// Dependencies
import React from 'react';

// Props types Dependencies i need bool to validate that the data is a boolean.
import { bool } from 'prop-types';

// connec from react-redux to connect the component to the state.
import { connect } from 'react-redux';

const Content = (props) => {
  const { isMobile } = props; // obtaining the node of the props of this component.

  return (
    <div>
      <h1>Content component</h1>
      <strong>{ isMobile ? 'ESTAS EN MOBILES': 'ESTAS EN DESKTOP'}</strong>
    </div>
  ); // return is ;
}; // const is ;

Content.propTypes = {
  isMobile: bool
};


function mapStateToProps(x) {
  return {
    isMobile: x.device.isMobile
  }; // return is ;
} // function NO ;

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
