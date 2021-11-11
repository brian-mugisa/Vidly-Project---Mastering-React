import React from "react";
import Form from "./common/form";

class SearchBar extends Form {
  render() {
    return (
      <form>{this.renderInput("search", "Search", "text", "Search...")}</form>
    );
  }
}

export default SearchBar;
