import { useSelector } from 'react-redux';

function Navbar () {
  // cara akses data di redux
  const stateRedux = useSelector((state) => state)

  console.log(stateRedux, '<<< state redux di navbar')

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li  className="nav-item">
            {/* <a className="nav-link">Register</a> */}
            {
              stateRedux?.name
              ? <a className="nav-link">{stateRedux?.name}</a>
              : <a className="nav-link">Register</a>
            }          
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar