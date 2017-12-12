import React from 'react';
import { Input } from "semantic-ui-react";
import "./Search.css";

const SearchField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <Input {...input}
        size="small"
        type="text"
        autoComplete="off"
        className="battletag-input"
        placeholder="battletag-number"
      />
    </div>
  )
}

export default SearchField;
