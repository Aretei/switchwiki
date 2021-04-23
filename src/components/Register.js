import { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { registerUser } from '../redux/reducers/authReducer'
import { Link  } from 'react-router-dom'
import nodemailer from 'nodemailer'



// async function main () {
//   nodemailer.createTransport ({
//     host: "smtp.gmail.com",
//     post: 587,
//     secure: false,
//     auth: {
//       user: 'sammmmthompson@gmail.com',
//       password: 'work4luck'
//     }
//   })
// }


class Register extends Component {

  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  sendEmail = async (email, username) => {
    let testAccount = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      // host: 'smtp.gmail.com',
      // port: 587,
      // secure: false,
      auth: {
        user: 'sammmthompson@gmail.com',
        pass: 'work4luck'
      }
    })

    let info = await transporter.sendMail({
      from: '"Sam" <sammmthompson@gmail.com>',
      to: 'sam.thompson@devmounta.in',
      text: `Hello ${username}! Thanks for registering for Switch Wiki!`
    })

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

  }

  handleEmail = e => {
    this.setState({email: e.target.value})
  }

  handlePassword = e => {
    this.setState({password: e.target.value})
  }

  handleUsername = e => {
    this.setState({username: e.target.value})
  }

  registerUser = () => {
    const { username, email, password } = this.state

    axios.post('/auth/register', {username, email, password})
    .then(res => {
      console.log(res.data)
      this.props.registerUser(res.data)
      axios.post('/api/email', {email, username})
      .then(()=> console.log('please work'))
    })
    .catch(e => console.log(e))
  }

  render () {
    return (
      <div className='loginField'>
        <input placeholder='Username' onChange={this.handleUsername}></input>
        <input placeholder='Email' onChange={this.handleEmail}></input>
        <input placeholder='Password' onChange={this.handlePassword}></input>
        <button onClick={this.registerUser}>Register</button>
        <button>
            <Link to='/login'>Already a member? Sign in here!</Link>
        </button>
      </div>
    )
  }
}



export default connect(null, { registerUser })(Register);