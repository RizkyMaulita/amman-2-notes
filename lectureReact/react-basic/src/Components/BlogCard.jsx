function BlogCard (props) {
  console.log(props)

  const blog = props?.data
  return (
    <div className="col">
      <div className="card card-blog">
        <img
          src={blog.img_url}
          className="card-img-top"
          alt="img-blog"
        />
        <div className="card-body">
          <h5 className="card-title">
          { blog.title }
          </h5>
          <a href="./detailBlog.html" className="btn bg-pink">
            Read More
          </a>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <div>
            <i className="fa-solid fa-user"></i>
            By {blog.author}
          </div>
          <div>
            <i className="fa-solid fa-calendar"></i>
            {blog.date}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard