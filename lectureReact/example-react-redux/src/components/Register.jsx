import { useState } from "react"
import { useDispatch } from "react-redux"

function Register () {
  const [ form, setForm ] = useState({
    name: '',
    alamat: '',
    deposit: 0
  })
  const dispatch = useDispatch()

  const handleRegister = (e) => {
    e.preventDefault()
    // console.log(form)
    // dispatch() // seperti ini jadi error, karena membutuhkan object untuk action
    // dispatch({}) // error juga, karena harus membutuhkan object dengan key "type"
    dispatch({ 
      type: "register", // must be unique dan harus ada
      payload: form
    })
  }

  return (
    <div className="container my-5">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name"  placeholder="Enter name" 
          value={form.name}
          onChange={(e) => {
            // console.log(e.target?.value)
            setForm({
              ...form,
              name: e.target?.value
            })
          }}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="alamat">Alamat</label>
        <input type="text" className="form-control" id="alamat" placeholder="Input alamat" value={form.alamat}
          onChange={(e) => {
            // console.log(e.target?.value)
            setForm({
              ...form,
              alamat: e.target?.value
            })
          }}
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="deposit">Deposit</label>
        <input type="number" className="form-control" id="deposit" placeholder="Input deposit" value={form.deposit}
            onChange={(e) => {
            // console.log(e.target?.value)
            setForm({
              ...form,
              deposit: e.target?.value
            })
          }}
        />
      </div>
      <button type="click" className="btn btn-primary" onClick={handleRegister}>Submit</button>
    </div>
  )
}

export default Register