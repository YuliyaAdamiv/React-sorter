import React from 'react';
import './Button.module.css';

const Button = (props) => {
  return (
    <div className="button-toolbar">
      <button
        type="button"
        className="btn btn-primary d-block mx-5 my-2 fs-5 font-monospace apply"
      >
        Apply
      </button>
    </div>
  );
};
export default Button;
