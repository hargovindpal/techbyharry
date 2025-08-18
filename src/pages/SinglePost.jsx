
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import posts from "../data/posts";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaLink } from "react-icons/fa";

function SinglePost() {
  const { slug } = useParams();
  const postIndex = posts.findIndex((p) => p.slug === slug);
  const post = posts[postIndex];
  const [copied, setCopied] = useState(false);

  // Format date to "August 18, 2025"
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold">❌ Post Not Found</h2>
        <Link to="/blog" className="btn btn-primary mt-3">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Get related posts (same category, excluding current one)
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Current Post URL (for sharing)
  const currentUrl = window.location.href;

  // Copy link handler
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="container py-5">
      {/* Blog Card Layout */}
      <div className="card shadow-lg border-0 rounded-4 p-4">
        {/* Title */}
        <h1 className="fw-bold mb-3 text-center display-5">{post.title}</h1>

        {/* Meta Info */}
        <p className="text-muted text-center mb-4">
          📅 {formatDate(post.date)} {post.category && <>• 🏷️ {post.category}</>}
        </p>

        {/* Thumbnail */}
        {post.thumbnail && (
          <div className="text-center">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="img-fluid rounded-4 shadow-sm mb-4"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        )}

        {/* Blog content */}
        <div
          className="blog-content fs-5 lh-lg text-secondary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Buttons */}
        <div className="text-center mt-5">
          <h5 className="fw-bold mb-3">🔗 Share this post</h5>
          <div className="d-flex justify-content-center gap-3 flex-wrap">

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: "50px", height: "50px" }}
            >
              <FaFacebookF size={20} />
            </a>

            {/* Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                currentUrl
              )}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: "50px", height: "50px" }}
            >
              <FaTwitter size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                post.title + " " + currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: "50px", height: "50px" }}
            >
              <FaWhatsapp size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: "50px", height: "50px" }}
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* Copy Link */}
            <button
              onClick={handleCopy}
              className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: "50px", height: "50px" }}
            >
              <FaLink size={20} />
            </button>
          </div>

          {/* Small copied message */}
          {copied && <p className="text-success mt-2">✅ Link copied!</p>}
        </div>
   

        {/* Prev / Next Navigation */}
        <div className="d-flex justify-content-between mt-5">
          {postIndex > 0 ? (
            <Link
              to={`/blog/${posts[postIndex - 1].slug}`}
              className="btn btn-outline-secondary rounded-pill px-4 shadow-sm"
            >
              ← {posts[postIndex - 1].title}
            </Link>
          ) : (
            <span></span>
          )}

          {postIndex < posts.length - 1 ? (
            <Link
              to={`/blog/${posts[postIndex + 1].slug}`}
              className="btn btn-outline-secondary rounded-pill px-4 shadow-sm"
            >
              {posts[postIndex + 1].title} →
            </Link>
          ) : (
            <span></span>
          )}
        </div>

        {/* Back to Blog */}
        <div className="text-center mt-4">
          <Link
            to="/blog"
            className="btn btn-lg btn-outline-primary fw-bold px-4 py-2 rounded-pill shadow-sm"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-5">
          <h3 className="fw-bold mb-4 text-center">📰 Related Posts</h3>
          <div className="row">
            {relatedPosts.map((rp) => (
              <div className="col-md-4 mb-4" key={rp.slug}>
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  {rp.thumbnail && (
                    <img
                      src={rp.thumbnail}
                      alt={rp.title}
                      className="card-img-top rounded-top-4"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="fw-bold">{rp.title}</h5>
                    <p className="text-muted small">
                      {formatDate(rp.date)} • {rp.category}
                    </p>
                    <Link
                      to={`/blog/${rp.slug}`}
                      className="btn btn-sm btn-outline-primary rounded-pill mt-2"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SinglePost;
