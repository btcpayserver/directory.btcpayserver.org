import React from "react";
import "./NewEntry.scss";

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

      const repoUrl = "https://github.com/btcpayserver/directory.btcpayserver.org/issues";

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
    const { colorMode } = this.props;

    return (
      <div className={`newentry-container newentry-container-${colorMode}`}>
        <p className="entry-title">
          Please provide your organization's details:
        </p>
        <div className="form-container">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="name">
              Company/Project Name *
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
                  <option value="App" defaultValue>
                    App
                  </option>
                  <option value="Host">Host</option>
                  <option value="Non-profit">Non-profit</option>
                  <option value="Merchant - 3D Printing">Merchant - 3D Printing</option>
                  <option value="Merchant - Adult">Merchant - Adult</option>
                  <option value="Merchant - Appliances and Furniture">Merchant - Appliances and Furniture</option>
                  <option value="Merchant - Art">Merchant - Art</option>
                  <option value="Merchant - Books">Merchant - Books</option>
                  <option value="Merchant - Electronics">Merchant - Electronics</option>
                  <option value="Merchant - Cryptocurrency Paraphernalia">Merchant - Cryptocurrency Paraphernalia</option>
                  <option value="Merchant - Domain Names, Hosting and VPNs">Merchant - Domain Names, Hosting and VPNs</option>
                  <option value="Merchant - Education">Merchant - Education</option>
                  <option value="Merchant - Fashion">Merchant - Fashion</option>
                  <option value="Merchant - Food">Merchant - Food</option>
                  <option value="Merchant - Gambling">Merchant - Gambling</option>
                  <option value="Merchant - Gift Cards">Merchant - Gift Cards</option>
                  <option value="Merchant - Health and Household">Merchant - Health and Household</option>
                  <option value="Merchant - Holiday and Travel">Merchant - Holiday and Travel</option>
                  <option value="Merchant - Jewelry">Merchant - Jewelry</option>
                  <option value="Merchant - Pets">Merchant - Pets</option>
                  <option value="Merchant - Services">Merchant - Services</option>
                  <option value="Merchant - Software and Video Games">Merchant - Software and Video Games</option>
                  <option value="Merchant - Sports">Merchant - Sports</option>
                  <option value="Merchant - Streaming">Merchant - Streaming</option>
                  <option value="Merchant - Tools">Merchant - Tools</option>
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
