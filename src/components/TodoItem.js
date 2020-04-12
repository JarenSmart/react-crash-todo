import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      backgroundColor: "#a6a6a6",
      padding: "10px",
      borderBottom: "1px #cccccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      //THIS CODE IS THE SAME AS BELOW TO GET OUR 'COMPLETED' FUNCTIONALITY
    };
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

//prop-types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
