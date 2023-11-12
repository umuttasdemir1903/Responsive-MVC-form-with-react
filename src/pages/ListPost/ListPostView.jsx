import PopupController from "../../components/Popup/PopupController";

const ListPostView = ({ postData, setShowPopup, showPopup , userName,setUserName }) => {
  return (
    <div className="container">
      {postData?.map((post) => (
        <div key={post.id} className="post">
          <div className="info">
            <h3>{post.title}</h3>
            <p onClick={() => {
              setUserName(post?.user)
              setShowPopup(true)
              }}>{post?.user}</p>
          </div>
          <p>{post?.text}</p>
        </div>
      ))}

      {showPopup && (<PopupController userName={userName} setShowPopup={setShowPopup}/>)}
    </div>
  );
};

export default ListPostView;
