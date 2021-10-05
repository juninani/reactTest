import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: '',
    userName:''
  }
  constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e){
      this.setState({[e.target.name]:e.target.value});
  }
  handleClick(e){
      alert(this.state.userName + ':' + this.state.message);
      this.setState({
          message:'',
          userName:''
    
    });
  }
  render() {
    return (
      <div>
        <h1>event exam</h1>
        <input
          type="text"
          name="userName"
          placeholder="이름"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="내용"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
