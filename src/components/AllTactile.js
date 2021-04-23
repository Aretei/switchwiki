import { Component } from 'react'
import Header from './Header'
import SwitchList from './SwitchList'
import SwitchDisplayTactile from './SwitchDisplayTactile'

class AllTactile extends Component {
  render () {
    return (
      <div>
        <SwitchDisplayTactile />
      </div>
    )
  }
}

export default AllTactile;