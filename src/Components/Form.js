import React, { Component } from "react";

class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      comment: "",
      names: "sheldon",
    };
  }

  HandlerUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  HandleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  HandlerNamesChange = (event) => {
    this.setState({
      names: event.target.value,
    });
  };

  HandlerSubmitChange = (event) => {
    alert(
      `USERNAME - ${this.state.userName}, COMMENTS - ${this.state.comment}, OPTION - ${this.state.names}`
    );
    event.preventDefault();
  };

  render() {
    const { userName, comment, names } = this.state; //Destructing
    return (
      <form onSubmit={this.HandlerSubmitChange}>
        {/* -------------------------------------------------------------------- */}
        <div>
          <label>UserName</label>
          <input value={userName} onChange={this.HandlerUserNameChange}></input>
        </div>
        {/* -------------------------------------------------------------------- */}
        <div>
          <label>Comments</label>
          <textarea
            value={comment}
            onChange={this.HandleCommentChange}
          ></textarea>
        </div>
        {/* -------------------------------------------------------------------- */}
        <div>
          <select value={names} onChange={this.HandlerNamesChange}>
            <option value="sheldon">Sheldon Cooper</option>
            <option value="lenord">Lenord Hofstader</option>
            <option value="howard">Howard Wolowitz</option>
            <option value="raj">Rajesh Koothrapalli</option>
          </select>
        </div>
        {/* -------------------------------------------------------------------- */}
        <div>
          <button value="submit">SUBMIT</button>
        </div>
        {/* -------------------------------------------------------------------- */}
      </form>
    );
  }
}
export default FormClass;
