import Navbar from "../Components/Navbar"
import Jumbotron from "../Components/Jumbotron"
import virusGif from '../assets/images/virus.gif'
import dataBlogs from "../assets/js/data-blogs.js"
import BlogCard from "../Components/BlogCard"

// function Blogs () {
//   const num = ..
//   return (
//     ...
//   )
// }

function Home () {
  console.log(dataBlogs)

  return (
    <div>
      <Navbar />
      {/* <Jumbotron /> */}
      <section id="home" className="mb-3 my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={virusGif}
              className="card-img-top w-100"
              alt="img-virus"
            />
          </div>
          <div className="col-md-6 text-center">
            <h5>Stay Home And Read Bloving</h5>
            <h1>Stay Safe From Covid-19</h1>
            <a href="#about" className="btn mt-3 px-4 bg-pink"> Get Started </a>
          </div>
        </div>
      </section>

      {/* <!-- Section Blogs --> */}
    <section id="blogs" className="pt-5">
      <h2 className="text-center pt-3 mb-5">Our Latest Blogs</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4" id="card-blogs-group">

        {
          dataBlogs?.map((blog, index) => (
            <BlogCard 
              data={blog} 
              key={blog.id}
              // key={index} // wajib dikasih key ketika mapping data
            />
            // <h1>text 1...{blog.id + 10}</h1>
            // <div class="col">
            //   <div class="card card-blog">
            //     <img
            //       src={blog.img_url}
            //       class="card-img-top"
            //       alt="img-blog"
            //     />
            //     <div class="card-body">
            //       <h5 class="card-title">
            //       { blog.title }
            //       </h5>
            //       <a href="./detailBlog.html" class="btn bg-pink">
            //         Read More
            //       </a>
            //     </div>
            //     <div class="card-footer d-flex justify-content-between">
            //       <div>
            //         <i class="fa-solid fa-user"></i>
            //         By {blog.author}
            //       </div>
            //       <div>
            //         <i class="fa-solid fa-calendar"></i>
            //         {blog.date}
            //       </div>
            //     </div>
            //   </div>
            // </div> 
          ))
        }

        {/* {
          dataBlogs?.map(blog => {
            const num = blog.id + 10
            return (
              <h2>text 2....{num}</h2>
            )
          })
        } */}

        {/* <!-- Card 1 --> */}
        {/* <div class="col">
          <div class="card card-blog">
            <img
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="img-blog"
            />
            <div class="card-body">
              <h5 class="card-title">
                This Relentless Pandemic Can Tax Your Mental Health. Here’s
                How To Cope
              </h5>
              <a href="./detailBlog.html" class="btn bg-pink">
                Read More
              </a>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <div>
                <i class="fa-solid fa-user"></i>
                By Stephanie
              </div>
              <div>
                <i class="fa-solid fa-calendar"></i>
                15 Sep, 2021
              </div>
            </div>
          </div>
        </div>  */}

        {/* Card 2 */}
        {/* <div class="col">
          <div class="card card-blog">
            <img
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="img-blog"
            />
            <div class="card-body">
              <h5 class="card-title">
                How Is Flu Season Different During The COVID-19 Pandemic?
              </h5>
              <a href="./detailBlog.html" class="btn bg-pink">
                Read More
              </a>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <div>
                <i class="fa-solid fa-user"></i>
                By Stephanie
              </div>
              <div>
                <i class="fa-solid fa-calendar"></i>
                15 Sep, 2021
              </div>
            </div>
          </div>
        </div>  */}

        {/* Card 3 */}
        {/* <div class="col">
          <div class="card card-blog">
            <img
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="img-blog"
            />
            <div class="card-body">
              <h5 class="card-title">
                If You’re Tired All The Time, It Could Be Chronic Fatigue
                Syndrome
              </h5>
              <a href="./detailBlog.html" class="btn bg-pink">
                Read More
              </a>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <div>
                <i class="fa-solid fa-user"></i>
                By Stephanie
              </div>
              <div>
                <i class="fa-solid fa-calendar"></i>
                15 Sep, 2021
              </div>
            </div>
          </div>
        </div> */}

      </div>
      <div className="text-center my-4">
        <a className="btn bg-pink px-4" href="./blogs.html"> See All <i class="fa-solid fa-arrow-right mx-1"></i> </a>
      </div>
    </section>
    </div>
  )
}

export default Home