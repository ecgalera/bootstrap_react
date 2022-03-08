import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <ul className="nav justify-content-end">

  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="https://reactjs.org/">Active</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="https://reactjs.org/">Link</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="https://reactjs.org/">Link</a>
  </li>

  <li className="nav-item">
    <a className="nav-link disabled" href="https://reactjs.org/" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>

</ul>
    </div>
  )
}

export default Navbar