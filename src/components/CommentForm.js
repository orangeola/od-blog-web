import '../styles/CommentForm.css'

function CommentForm() {
  return (
    <div className="CommentForm">
      <form>
        <p><i>Submit a comment!</i></p>
        <label>
          Name:
          <br></br>
          <input type="text" name="author" />
        </label>
        <label>
          Comment:
          <br></br>
          <textarea type="text" name="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>Comments</h3>
    </div>
  );
}

export default CommentForm;
