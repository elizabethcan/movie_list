import React from 'react';

function Button(props) {
  if (props.watched === true) {
    return (
      <button>Watched!</button>
    );
  } else {
    return (
      <button>test</button>
    )
  }
}

export default Button;