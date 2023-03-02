import { useEffect, useState } from "react";
import "./App.css";
import DisucussionContainer from "./Discussions_Wrapper";
import Modal from "./Modal.js";
import axios from "axios";

function App() {
  const [discussion, setDiscussion] = useState();
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // 모달 관련 state 관리
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 서버로부터 데이터 받아오기 state
  const setData = (data) => {
    setDiscussion(data);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/discussions/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading,,, </div>
      ) : (
        <>
          <div className="form__container">
            <h1>My Agora States</h1>

            <h1 id="popup_open_btn" onClick={openModal}>
              질문 등록하기
            </h1>
          </div>

          <Modal
            open={modalOpen}
            close={closeModal}
            header="질문하기"
            data={setData}
          />
          <DisucussionContainer data={discussion} discussion={setData} />
        </>
      )}
    </div>
  );
}

export default App;
