import React, { useState } from "react";
import "./modal.css";
import "./App.css";
import axios from "axios";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, data } = props;
  const [submit, setSubmit] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [discussion, setDiscussion] = useState();
  const date = new Date();

  // 새로 작성한 질문 state
  const handelAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handelTitle = (e) => {
    setTitle(e.target.value);
  };

  const handelContent = (e) => {
    setContent(e.target.value);
  };

  // 질문 작성하고 다시 데이터 받아오기
  const getData = () => {
    axios.get("http://localhost:4000/discussions/").then((res) => {
      console.log(res.data);
      data(res.data);
    });
  };

  const newDisucussion = () => {
    axios
      .post("http://localhost:4000/discussions/submit", {
        id: "105564451",
        createdAt: date.toLocaleDateString("ko-kr"),
        title: title,
        url: "",
        author: author,
        answer: null,
        bodyHTML: content,
        avatarUrl: "https://avatars.githubusercontent.com/u/105564451?v=4",
      })
      .then((res) => getData());

    close();
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <div>
            <header>
              {header}
              <p className="headerP1">
                Start your <br /> study with us
              </p>

              <p className="headerP2">
                Discover the world's best community if freelancers and business
                owners
              </p>
            </header>

            <main>
              <form className="form">
                <div className="form__input--wrapper">
                  <p className="inputHeader">Register your Problem</p>
                  <div className="form__input--name">
                    <p>name </p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      onChange={handelAuthor}
                    />
                  </div>
                  <br />

                  <div className="form__input--title">
                    <p>title </p>
                    <input
                      type="text"
                      name="name"
                      id="title"
                      required
                      onChange={handelTitle}
                    />
                  </div>
                  <br />
                  <div className="form__textbox">
                    <p>Description </p>
                    <textarea
                      id="story"
                      name="story"
                      placeholder="질문을 작성하세요"
                      required
                      onChange={handelContent}
                    ></textarea>
                  </div>
                  <br />
                </div>
              </form>

              <footer>
                <button className="submit" onClick={newDisucussion}>
                  submit
                </button>
                <button className="close" onClick={close}>
                  close
                </button>
              </footer>
            </main>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
