import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import SwitchList from './components/SwitchList'
import SwitchDisplay from './components/SwitchDisplayAll'
import Browse from './components/Browse'
import SwitchPage from './components/SwitchPage'
import Home from './components/Home'
import AllLinear from './components/AllLinear'
import AllTactile from './components/AllTactile'
import Register from './components/Register'


export default (
    <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/browse' component={Browse} />
        <Route exact path='/switchpage' component={SwitchPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/linear' component={AllLinear} />
        <Route exact path='/tactile' component={AllTactile} />
        <Route exact path='/register' component={Register} />
    </Switch>
)