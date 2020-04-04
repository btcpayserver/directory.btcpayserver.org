import React, { useState } from "react";
import "./NewEntry.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      description: "",
      type: "apps",
      errName: false,
      errUrl: false,
      errDescription: false,
      error: false,
      success: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    const capitalizedName =
      e.target.name.charAt(0).toUpperCase() + e.target.name.substring(1);

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      error: false,
      [`err${capitalizedName}`]: false
    });
  };

  evaluateInputs = () => {
    const result = {
      name: this.state.name.trim() === "",
      url: this.state.url.trim() === "",
      description: this.state.description.trim() === ""
    };
    return result;
  };

  handleSubmit = e => {
    e.preventDefault();
    const submitResult = this.evaluateInputs();
    if (submitResult.name || submitResult.url || submitResult.description) {
      this.setState({
        ...this.state,
        error: true,
        success: false,
        errName: submitResult.name,
        errUrl: submitResult.url,
        errDescription: submitResult.description
      });
    } else {
      this.setState({
        ...this.state,
        error: false,
        errName: false,
        errUrl: false,
        errDescription: false,
        success: true
      });

      const issueBody = `New submission:%0A%0AName: ${this.state.name}%0AUrl: ${this.state.url}%0ADescription: ${this.state.description}%0AType: ${this.state.type}`;

      const issueTitle = `New entry submission - ${this.state.name}`;

      const repoUrl = "https://github.com/joerlop/btcpay-directory/issues";

      const newPageUrl = `${repoUrl}/new?title=${issueTitle}&body=${issueBody}`;

      window.open(newPageUrl, "_blank");
    }
  };

  handleSelect = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      type: e.target.value
    });
  };

  render() {
    return (
      <div className="newentry-container">
        <p className="entry-title">
          Please provide your organization's details:
        </p>
        <div className="form-container">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="name">
              Name *
              <input
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                className={`input-error-${this.state.errName}`}
                id="name"
                name="name"
                type="text"
                placeholder="Your organization's name"
              />
            </label>
            <label htmlFor="url">
              URL *
              <input
                value={this.state.url}
                onChange={e => this.handleChange(e)}
                className={`input-error-${this.state.errUrl}`}
                id="url"
                name="url"
                type="url"
                placeholder="URL of your organization"
              />
            </label>
            <label htmlFor="type">
              Type *
              <div className="select-container">
                <select onChange={e => this.handleSelect(e)} id="type">
                  <option value="apps" defaultValue>
                    App
                  </option>
                  <option value="hosts">Host</option>
                  <option value="merchants">Merchant</option>
                  <option value="non-profits">Non-ptofit</option>
                </select>
              </div>
            </label>
            <label htmlFor="description">
              Description *
              <textarea
                value={this.state.description}
                onChange={e => this.handleChange(e)}
                className={`description input-error-${this.state.errDescription}`}
                id="description"
                name="description"
                maxLength="250"
              />
              <div className="max-characters">
                <p>{`${this.state.description.length} / 250`}</p>
              </div>
            </label>
            <button onClick={e => this.handleSubmit(e)}>Submit</button>
            <p className="note">
              Note: You'll need a Github account to be able to submit a new
              entry.
            </p>
            <div className="submission-result">
              <p className={`error error-${this.state.error}`}>
                Please fill all the required fields.
              </p>
              <p className={`success success-${this.state.success}`}>
                Please submit the new issue on Github.
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewEntry;
