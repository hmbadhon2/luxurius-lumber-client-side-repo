import React, { Children } from 'react';

const PrimaryButton = ({ children, classes, handler }) => {
    return (
        <div>
            <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white ${classes}`}
    >
      {children}
    </button>
        </div>
    );
};

export default PrimaryButton;