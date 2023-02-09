import React, { useState } from "react";
import "./App.css";

import Answered from "./Answered.js";
import NotAnswered from "./NotAnswered";

function DisucussionContainer(props) {
  const data = props.data;

  const answerFilter = data.filter((el) => el.answer !== null);
  const notAnswerFilter = data.filter((el) => el.answer === null);

  return (
    <section className="discussion_wrapper1">
      <section class="discussion__wrapper__answered">
        <div class="discussion_answered_head">
          <h3>Done</h3>
          <div class="count_answered">{answerFilter.length}</div>
        </div>

        <ul class="discussions__answered__container">
          {answerFilter.map((el) => {
            return (
              <li className="discussion__container">
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
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section class="discussion__wrapper_notAnswered">
        <div class="discussion_notAnswered_head">
          <h3>In Progress</h3>
          <div class="count_notAnswered">{notAnswerFilter.length}</div>
        </div>
        <div class="scroll">
          <ul class="discussions__container__notAnswered">
            {notAnswerFilter.map((el) => {
              return (
                <li className="discussion__container">
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
