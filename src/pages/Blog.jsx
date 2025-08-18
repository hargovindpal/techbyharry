// src/pages/Blog.jsx
import { Link } from "react-router-dom";
import posts from "../data/posts";

function Blog() {
  // Function to format date from ISO -> "August 18, 2025"
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-5 fw-bold text-center display-5">📝 My Blog</h2>
      <div className="row g-4">
        {posts.map((post, index) => (
          <div key={index} className="col-md-6">
            <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h3 className="fw-bold">{post.title}</h3>
                <p className="text-muted small">
                  {formatDate(post.date)} • {post.category}
                </p>
                <p className="text-secondary">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="btn btn-outline-primary fw-bold mt-auto align-self-start"
                >
                  Read More →
                </Link>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
