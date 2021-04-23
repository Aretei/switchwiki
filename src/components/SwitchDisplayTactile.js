import { Component } from 'react'
import { connect } from 'react-redux'
import { allSwitches, linears, tactiles, saveSwitchId } from '../redux/reducers/switchReducer'
import { withRouter } from 'react-router-dom'

class SwitchDisplayTactile extends Component {

  constructor () {
    super()
    this.state  = {
        TactileSwitchList: []
    }
  }

  handleSwitchId = (id) => {
    this.props.saveSwitchId(id)
    this.props.history.push('/switchpage')
  }


  componentDidMount () {
  this.props.tactiles()
  .then(dbRes => {
    this.setState({TactileSwitchList: dbRes.value.data})
  })
  }

  render () {
    return (
      <div>
        <h1 className='SwitchList'> { this.state.TactileSwitchList.map(e =>
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

export default connect(mapStateToProps, {allSwitches, linears, tactiles, saveSwitchId}) (withRouter(SwitchDisplayTactile));