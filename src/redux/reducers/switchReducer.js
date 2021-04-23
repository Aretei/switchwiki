import axios from 'axios'

//initial state
const initialState = {
    allSwitch: [],
    linear: [],
    tactile: [],
    switchId: null
}

//action types
const ALL_SWITCHES = 'ALL_SWITCHES'
const LINEARS = 'LINEARS'
const TACTILES = 'TACTILES'
const SWITCH = 'SWITCH'
const GET_SWITCH_ID = 'GET_SWITCH_ID'

//action creators
export function getSwitchid () {
    return {
        type: GET_SWITCH_ID,
    }
}

export function saveSwitchId (id) {
    return {
        type: SWITCH,
        payload: id
    }
}

export function allSwitches () {
    return {
        type: ALL_SWITCHES,
        payload: axios.get('/api/switch')
    }
}

export function linears () {
    return {
        type: LINEARS,
        payload: axios.get('/api/linear')
    }
}

export function tactiles () {
    return {
        type: TACTILES,
        payload: axios.get('/api/tactile')
    }
}

//reducer
export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ALL_SWITCHES + "_FULFILLED":
            return {
                ...state,
                allSwitch: action.payload.data
            }

        case LINEARS + "_FULFILLED":
            return {
                ...state,
                linear: action.payload.data
            }

        case TACTILES + "_FULFILLED":
            return {
                ...state,
                tactile: action.payload.data
            }
        
        case SWITCH:
            return {
                ...state,
                switchId: action.payload
            }

        case GET_SWITCH_ID:
            return state.switchId

        default: return state
    }
}

