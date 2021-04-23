import { Component } from 'react'
import { connect } from 'react-redux'
import { allSwitches, linears, tactiles, saveSwitchId } from '../redux/reducers/switchReducer'
import { Link, withRouter } from 'react-router-dom'

class SwitchDisplayAll extends Component {

  constructor () {
    super()
    this.state  = {
      allSwitchList: []
    }
  }

  handleSwitchId = (id) => {
    this.props.saveSwitchId(id)
    this.props.history.push('/switchpage')
  }

  componentDidMount () {
  this.props.allSwitches()
  .then(dbRes => {
    this.setState({allSwitchList: dbRes.value.data})
  })
  }

  render () {
    // console.log(this.state.allSwitchList.map(e => e.id))
    console.log(this.props)
    return (
      <div>
        <h1 className='SwitchList'> { this.state.allSwitchList.map(e =>
       
            <div onClick={() => this.handleSwitchId(e.id)}>
              <li>{ e.pic }</li>
              <li>{ e.name }</li>
              <li>{ e.type }</li>
            </div> 
            
          )}

        </h1>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return reduxState.switchReducer
}

export default connect(mapStateToProps, {allSwitches, linears, tactiles, saveSwitchId}) (withRouter(SwitchDisplayAll));