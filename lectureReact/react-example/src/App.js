import './assets/css/style.css' // kalau css tidak usah pakai 'from'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [ dataBlogs, setDataBlogs ] = useState([])

  function fetchData() {
    fetch('https://622b493e14ccb950d2356851.mockapi.io/blogs')
      .then(response => response.json())
      .then(data => {
        console.log(data, '<<< data di line 11')
        setDataBlogs(data)
      })
      .catch(err => console.log(err))
  }

  // fetchData()
  useEffect(() => {
    // hanya jalan sekali
    fetchData()
  }, [])

  return (
    <div>
      {/* <h1>React Example</h1> */}
      {/* Navbar */}
      {/* <Navbar /> */}
      <Navbar></Navbar>

      {/* Jumbotron */}
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col d-flex justify-content-center">
          <img 
            src="https://png.pngtree.com/png-vector/20200320/ourmid/pngtree-corona-virus-cartoon-vector-illustration-with-facial-expression-png-image_2163086.jpg" 
            class="card-img-top img-virus" 
            alt="img-virus"
            // height={'300px'}
            // width={'200px'}
            // style={{ height: '300px', width: '200px' }}
          />
        </div>
        <div class="col align-self-center">
          <h5>Stay Home and Read Bloving</h5>
          <h1>Stay Save From Covid-19</h1>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>

      {/* Blogs */}
      {/* {JSON.stringify(dataBlogs)} */}
      <h1 className='text-center'>Our Blogs</h1>
      <div className='container my-4'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {
            dataBlogs?.map(blog => (
              <div class="col" key={blog.id}>
                <div class="card">
                  <img src={blog.imgUrl} class="card-img-top" alt="img-blog"/>
                  <div class="card-body">
                    <h5 class="card-title">{blog.title}</h5>
                    <button className='btn btn-primary'>Read More</button>
                  </div>
                  <div className='card-footer d-flex justify-content-between'>
                    <div>
                      By {blog.author}
                    </div>
                    <div>
                      {blog.createdAt}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          {/* <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="img-blog"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <button className='btn btn-primary'>Read More</button>
              </div>
              <div className='card-footer d-flex justify-content-between'>
                <div>
                  By Author
                </div>
                <div>
                  Jan 01, 2022
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="img-blog"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <button className='btn btn-primary'>Read More</button>
              </div>
              <div className='card-footer d-flex justify-content-between'>
                <div>
                  By Author
                </div>
                <div>
                  Jan 01, 2022
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="img-blog"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <button className='btn btn-primary'>Read More</button>
              </div>
              <div className='card-footer d-flex justify-content-between'>
                <div>
                  By Author
                </div>
                <div>
                  Jan 01, 2022
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="img-blog"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <button className='btn btn-primary'>Read More</button>
              </div>
              <div className='card-footer d-flex justify-content-between'>
                <div>
                  By Author
                </div>
                <div>
                  Jan 01, 2022
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
    </div>
  );
}

export default App;
