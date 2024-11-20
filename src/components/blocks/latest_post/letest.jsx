
import "./latest.css";

export const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      tag: "Trends",
      date: "May 10, 2022",
      title: "The 9 best homes in New York",
      description:
        "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
      image: "../src/components/images/png/IMAGE (4).png", 
    },
    {
      id: 2,
      tag: "DIY",
      date: "May 10, 2022",
      title: "How to easily buy a house with Realco",
      description:
        "Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet.",
      image: "../src/components/images/png/Frame.png", 
    },
    {
      id: 3,
      tag: "DIY",
      date: "May 10, 2022",
      title: "Renting houses - complete guide",
      description:
        "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.",
      image: "../src/components/images/png/IMAGE (3).png", 
    },
  ];

  return (
    <div className="blog-container">
      <header className="blog-header">
      <div className="text-side">
        <span className="blog-category">Blog</span>
            <h1>Latest posts</h1>
            <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Praesent efficitur nibh massa morbi sagittis
            ornare dui in ornare.
            </p>
      </div>
        <button className="view-all-btn">View all</button>
      </header>
      <div className="blog-grid">
        {posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-tag">{post.tag}</span>
              <span className="blog-date">{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href="#" className="read-more">
                Read more &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
