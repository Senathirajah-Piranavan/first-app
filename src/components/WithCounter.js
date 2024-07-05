import React from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent {...this.props} name="Piranavan" />;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
