function Jumbotron () {
  return (
    <section id="home" className="mb-3 mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="./assets/images/virus.gif"
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
  )
}

export default Jumbotron