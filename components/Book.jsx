function Book({ name, author, imgURL }) {
  return (
    <div className="book-item">
      <div className="min-h-18">
        <img src={imgURL} alt={name} srcset="" />
      </div>
      {/* <h6>{name}</h6> */}
    </div>
  );
}

export default Book;
