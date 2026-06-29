import { useParams, Link } from "react-router";

function PostDetail({ posts }) {
  const { id } = useParams();

  console.log(id);

  const post = posts.find(p => p.id === Number(id));

  return (
    <>
      <h2>{post.title}</h2>

      <small>{post.createdAt}</small>

      <p>{post.content}</p>

      <div className="controls">
        <Link to={`post/edit/${post.id}`}>수정하기</Link>

        <button>삭제하기</button>
      </div>
    </>
  );
}

export default PostDetail;
