import {UserType} from "../HW8";


export type SortUP_AC_Type = { type: 'sort', payload: 'up' }
export type SortDown_AC_Type = { type: 'sort', payload: 'down' }
export type SortCheck_AC_Type = { type: 'check', payload: '18' }
export type FilterCheck_AC_Type = { type: 'filter', payload: string }

export type Sort_AC_Type = SortUP_AC_Type | SortDown_AC_Type | SortCheck_AC_Type | FilterCheck_AC_Type
export type Filter_AC_Type = SortUP_AC_Type | SortDown_AC_Type | SortCheck_AC_Type | FilterCheck_AC_Type

export const SortUP_AC = (): SortUP_AC_Type => ({type: 'sort', payload: 'up'})
export const SortDown_AC = (): SortDown_AC_Type => ({type: 'sort', payload: 'down'})
export const SortCheck_AC = (): SortCheck_AC_Type => ({type: 'check', payload: '18'})
export const FilterUsers_AC = (filter: string): FilterCheck_AC_Type => ({type: 'filter', payload: filter})

export const homeWorkReducer = (state: UserType, action: Sort_AC_Type): UserType => { // need to fix any
    switch (action.type) {
        case 'sort':
            let copy = [...state]
            copy = copy.sort((a, b) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            )
            return action.payload === 'up' ? copy : copy.reverse();
        case 'check': {
            let copy = [...state]
            copy = copy.filter(f => f.age >= 18)
            return copy
        }
        case 'filter': {
            if (action.payload.trim() === '') {
                return [...state]
            } else {
                return state.filter(user => user.name.toLocaleLowerCase().includes(action.payload))
            }
        }
            //if (action.payload[0].name.length > 0) return [...action.payload]
            //return state
        default:
            return state
    }
}

