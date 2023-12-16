import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 11,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
        <h2>Name: {this.props.name} </h2>
        <h2>Location: Pune</h2>
        <h2>Contact: 9049345336</h2>
      </div>
    );
  }
}

export default UserClass;
