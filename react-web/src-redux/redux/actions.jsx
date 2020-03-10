import  {INCREAMENT,DECREAMENT} from './action-types'

export const  add = (count) => ({type: INCREAMENT, count})

export const  sub = (count) => ({type: DECREAMENT, count})
