const initState: StateType = {
    loading: false
}
type StateType = {loading: boolean}
type Loading_Type = {type: 'LOAD_LOAD', loading: true}
type UnLoading_Type = {type: 'FINISH_LOAD', loading: false}
type LoadingReducerType = Loading_Type | UnLoading_Type

export const loadingReducer = (state = initState, action: LoadingReducerType): StateType => { // fix any
    switch (action.type) {
        case 'LOAD_LOAD': {
            return {...state, loading: action.loading}
        };
        case 'FINISH_LOAD': {
            return {...state, loading: action.loading}
        };

        default: return state
    }
}

export const loadingAC = (): any => ({type: 'LOAD_LOAD', loading: true}) // fix any
export const unLoadingAC = (): any => ({type: 'FINISH_LOAD', loading: false}) // fix any