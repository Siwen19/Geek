import React from "react";
import "./Comment.css";

export default function Comment(props) {
  const { style, commentList } = props;
  console.log(commentList);

  const time = (time = + new Date()) => {
    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
    return date.toJSON().substr(0, 19).replace("T", " ");
  };
  return (
    <div style={style}>
      comment
    </div>
  );
}
