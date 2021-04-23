import { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Link to='/home'><li>Home</li></Link>
        <Link to='/login'><li>Login</li></Link>
        <Link to='/browse'><li>All Switches</li></Link>
        <Link to='/linear'><li>Linears</li></Link>
        <Link to='/tactile'><li>Tactiles</li></Link>
      </div>
    )
  }
}

export default Header;