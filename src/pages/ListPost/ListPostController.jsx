import { useEffect, useState } from "react";
import ListPostView from "./ListPostView";
import axios from "axios";

const ListPostController = () => {
  const [postData, setPostData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        // API'den gelen veriyi ters çevirerek, en son eklenen gönderiyi listenin en başına getiriyoruz
        const reversedData = res.data.reverse();
        setPostData(reversedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ListPostView
        setUserName={setUserName}
        userName={userName}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
        postData={postData}
      />
    </div>
  );
};

export default ListPostController;
