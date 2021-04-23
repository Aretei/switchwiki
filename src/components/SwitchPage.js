import axios from 'axios'
import { Component } from 'react'
import { connect } from 'react-redux'
import {getSwitchid} from '../redux/reducers/switchReducer'
import SwitchReview from './SwitchReview'


class SwitchPage extends Component {
    
    constructor () {
        super()
        this.state = {
            switchId: [],
            theId: ''
        }
    }

    componentDidMount () {
        const id = this.props.switchId
        console.log(id)
        axios.get(`/api/switch/${id}`, {id})
        .then(dbRes => {
            this.setState({switchId: dbRes.data})
            // console.log(dbRes)
        })
        .catch(e => console.log(e))
    }



   

    render () {
        const {switchId} = this.state
        // console.log(this.state.switchId)
        return (
            <div>
                <section className='switchPage'> {this.state.switchId.map(e =>
                <section>
                  <div>{e.pic}</div>  
                  <div>
                    <li>{e.name}</li>
                    <li>{e.type}</li>
                    <li>{e.weight}</li>
                    <li>{e.sound_profile}</li>
                      
                  </div>
                  </section>
                    )}
                <SwitchReview />
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState.switchReducer
}

export default connect(mapStateToProps, {getSwitchid}) (SwitchPage)