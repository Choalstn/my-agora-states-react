import React, { useState } from "react";
import "./App.css";
import axios from "axios";

import Answered from "./Answered.js";
import NotAnswered from "./NotAnswered";

function DisucussionContainer(props) {
  const data = props.data;
  const discussions = props.discussion;

  const getData = () => {
    axios.get("http://localhost:4000/discussions/").then((res) => {
      console.log(res.data);
      discussions(res.data);
    });
  };

  const handleDelete = (title) => {
    console.log("title : ", title);
    axios
      .delete(`http://localhost:4000/discussions/delete/${title}`, {
        data: { title: title },
      })
      .then((res) => getData());
  };

  const answerFilter = data.filter((el) => el.answer !== null);
  const notAnswerFilter = data.filter((el) => el.answer === null);

  return (
    <section className="discussion_wrapper1">
      <section className="discussion__wrapper__answered">
        <div className="discussion_answered_head">
          <h3>Done</h3>
          <div className="count_answered">{answerFilter.length}</div>
        </div>

        <ul className="discussions__answered__container">
          {answerFilter.map((el) => {
            return (
              <li
                className="discussion__container"
                key={answerFilter.indexOf(el)}
              >
                <div className="discussion__avatar--wrapper">
                  <img
                    alt=""
                    src={el.avatarUrl}
                    className="discussion__avatar--image"
                  ></img>
                </div>

                <div className="discussion__content">
                  <h2 className="discussion__title">
                    <a href={el.url}>{el.title}</a>
                  </h2>

                  <div className="discussion__information">
                    <span className="author">{el.author}</span>
                    <span className="createdAt">{el.createdAt}</span>
                    <span
                      className="delete"
                      onClick={(e) => {
                        handleDelete(el.title, e);
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="discussion__wrapper_notAnswered">
        <div className="discussion_notAnswered_head">
          <h3>In Progress</h3>
          <div className="count_notAnswered">{notAnswerFilter.length}</div>
        </div>
        <div className="scroll">
          <ul className="discussions__container__notAnswered">
            {notAnswerFilter.map((el) => {
              return (
                <li
                  className="discussion__container"
                  key={notAnswerFilter.indexOf(el)}
                >
                  <div className="discussion__avatar--wrapper">
                    <img
                      src={el.avatarUrl}
                      className="discussion__avatar--image"
                    ></img>
                  </div>

                  <div className="discussion__content">
                    <h2 className="discussion__title">
                      <a href={el.url}>{el.title}</a>
                    </h2>

                    <div className="discussion__information">
                      <span className="author">{el.author}</span>
                      <span className="createdAt">{el.createdAt}</span>
                      <span
                        className="delete"
                        onClick={(e) => {
                          handleDelete(el.title, e);
                        }}
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default DisucussionContainer;
