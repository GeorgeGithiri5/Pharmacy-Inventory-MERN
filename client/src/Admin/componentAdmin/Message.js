import { Component } from "react";
import styled from "styled-components";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }
  onChangeMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const PostMsg = {
      message: this.state.message,
    };
    console.log(PostMsg);
  };
  render() {
    return (
      <>
        <div className="header">
          <h2 className="text-center text-muted">Messages</h2>
        </div>
        <div className="m-4">
          <Card>
            <div className="card bg-dark ml-2 card-messages position-relative">
              <div className="card-body">
                <h2 className="card-t mt-1 text-muted">Employee Name</h2>
                <p className="lead mt-1">Hello bosses</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="card bg-info mr-2 card-messagesReply position-relative">
              <div className="card-body">
                <h2 className="card-t mt-1">Employee Name</h2>
                <p className="lead mt-1">Hello bosses</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="form-message">
          <form onSubmit={this.onSubmit}>
            <div className="form-group col-8 mx-auto">
              <div className="col-10">
                <input
                  className="form-control"
                  value={this.state.message}
                  onChange={this.onChangeMessage}
                  placeholder="Enter Message.."
                />
              </div>
              <div className="col-2">
                <button className="btn btn-success" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const Card = styled.div`
  .card {
    width: 40vw;
    border-radius: 20% 1%/ 40% 3% !important;
    color: #fff;
    border: 1px red solid;
  }
  .card-t {
    color: #fff;
    font-size: 10px;
  }
  .card-messagesReply {
    float: right;
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

export default Message;
