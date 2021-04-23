import { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {getSwitchid} from '../redux/reducers/switchReducer'


class SwitchReview extends Component {

  constructor () {
    super()
    this.state = {
      reviews: [],
      reviewBody: ''
    }
  }

  componentDidMount () {
    const id = this.props.switchId
    console.log(id + 'why u no work')
    axios.get(`/api/review/${id}`, {id})
    .then(dbRes => {
        this.setState({reviews: dbRes.data})
        // console.log(dbRes)
    })
    .catch(e => console.log(e))
}

  postReview () {
      
  }

  handleReview = e => {
    this.setState({password: e.target.value})
  }

  render () {
    return (
      <div>
              <div>
        <h1 className='reviews'> { this.state.reviews.map(e =>
       
            <div>
              <li>{ e.review }</li>
          
            </div> 
            
          )}

        </h1>
      </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return reduxState.switchReducer
}

export default connect(mapStateToProps, {getSwitchid}) (SwitchReview)