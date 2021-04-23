import { Component } from 'react'
import SwitchList from './SwitchList'
import Header from './Header'
import axios from 'axios'

class Browse extends Component {

  constructor () {
    super()
    this.state = {
      switches: []
    }
  }

  componentDidMount () {
    axios.get('/api/switch')
    .then((res) => {
      this.setState({switches: res})
    })
  }

  render () {
    return (
      <div>
        Browse all switches!
        <SwitchList switches={this.state.switches}/>
      </div>
    )
  }
}

export default Browse;