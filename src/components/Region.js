import React from "react";

const Region = () => {
  return(
    <form className="radio-btn">
      <label className="radio-input"><input type="radio" name="optradio"/>US</label>
      <label className="radio-input"><input type="radio" name="optradio"/>EU</label>
      <label className="radio-input"><input type="radio" name="optradio"/>KR</label>
    </form>
  )
}

export default Region;
