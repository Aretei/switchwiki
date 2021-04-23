import { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../redux/reducers/authReducer'
import { Link } from 'react-router-dom'


class Login extends Component {

  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = e => {
    this.setState({email: e.target.value})
  }

  handlePassword = e => {
    this.setState({password: e.target.value})
  }

  loginUser = () => {
    const { email, password } = this.state

    axios.post('/auth/login', {email, password})
    .then(res => {
      console.log(res.data)
      this.props.loginUser(res.data)
      
    })
    .catch(e => console.log(e))
  }

  render () {
    return (
      <div className='loginField'>
        <input placeholder='Email' onChange={this.handleEmail}></input>
        <input placeholder='Password' onChange={this.handlePassword}></input>
        <button onClick={this.loginUser}>Login</button>
        <button>
            <Link to='/register'>Not a member? Register here!</Link>
        </button>
      </div>
    )
  }
}



export default connect(null, { loginUser })(Login);