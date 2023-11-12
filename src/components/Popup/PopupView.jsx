const PopupView = ({ setShowPopup, userName, userPost }) => {
  // Eğer userPost tanımsız veya null ise boş bir dizi ata.
  const posts = userPost || [];

  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            Posts by user <span>{userName}</span>
          </h4>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>

        {/* userPost bir dizi ise ve boş değilse map fonksiyonunu kullan. */}
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => (
            <div className="post" key={post.id}>
              {/* post.title ve post.text tanımlı ise ekrana yazdır. */}
              {post.title && <h2>{post.title}</h2>}
              {post.text && <p>{post.text}</p>}
            </div>
          ))
        ) : (
          // userPost bir dizi değilse veya boşsa hata mesajı göster.
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default PopupView;
