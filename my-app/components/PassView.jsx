import React from 'react';

export default ({password}) => {

  function handleClick() {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="pass-container row">
      <span id="passwordView">{password}</span>
      <div class="copy-icon-container" onClick={handleClick}></div>
    </div>
  )
}