import React from 'react';
import "./Spinner.css";
const Spinner = () => {
    return (
        <div className="flex flex-col items-center space-y-2">
           <div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
            <p className="text-bgDark text-lg font-semibold">LOading...</p>
        </div>
        
    );
};

export default Spinner;
