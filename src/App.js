import { useEffect, useState } from "react";
import "./App.css";
import DisucussionContainer from "./Discussions_Wrapper";
import axios from "axios";

function App() {
  const [discussion, setDiscussion] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/discussions/").then((res) => {
      setDiscussion(res.data);
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

            <h1 className="popup_open_btn">질문 등록하기</h1>
          </div>

          <DisucussionContainer data={discussion} />
        </>
      )}
    </div>
  );
}

export default App;
