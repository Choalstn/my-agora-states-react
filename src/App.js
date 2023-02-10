import { useEffect, useState } from "react";
import "./App.css";
import DisucussionContainer from "./Discussions_Wrapper";
import Modal from "./Modal.js";
import axios from "axios";

function App() {
  const [discussion, setDiscussion] = useState();
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
          <DisucussionContainer data={discussion} />
        </>
      )}
    </div>
  );
}

export default App;
