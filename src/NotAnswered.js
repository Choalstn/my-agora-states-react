import React from "react";
import "./App.css";

function NotAnswered() {
  return (
    <section className="discussion__wrapper_notAnswered">
      <div className="discussion_notAnswered_head">
        <h3>In Progress</h3>
        <div className="count_notAnswered">4</div>
      </div>
      <div className="scroll">
        <ul className="discussions__container__notAnswered"></ul>
      </div>
    </section>
  );
}

export default NotAnswered;
