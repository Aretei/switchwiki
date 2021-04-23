import { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import routes from './routes'
import { connect } from 'react-redux'
import { allSwitches, linears, tactiles } from './redux/reducers/switchReducer'


class App extends Component {

  componentDidMount () {
    this.props.allSwitches()
    this.props.linears()
    this.props.tactiles()
    // console.log(this.props.allSwitches())
  }

  render () {
    return (
      <div className='main'>
        <Header>
          <Home />
        </Header>
        {routes}
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default connect(mapStateToProps, {allSwitches, linears, tactiles}) (App);
