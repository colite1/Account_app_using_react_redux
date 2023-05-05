import axios from 'axios';
//action constant
export const inc = "account/increment";
//const init = "account/init";
export const dec = "account/decrement";
export const incByAmt = "account/incrementByAmount";
export const incBonus = "bonus/increment";
export const getAccUserPending = "account/pending";
export const getAccUserFullfilled = "account/fullfilled";
export const getAccUserRejected = "account/rejected";

//action creators
export function increment(){
    return {type: inc}
}
export function decrement(){
    return {type: dec}
}
export function getUserAccount(id){
    return async (dispatch,getState)=>{
    try{
        dispatch(getAccountUserPending())
        const {data} =  await axios.get(`http://localhost:8080/accounts/${id}`);
        dispatch(getAccountUserFullfilled(data.amount))
    }catch(error){
        dispatch(getAccountUserRejected(error.message))
    }
    
    }}

export function getAccountUserFullfilled(value){
    return {type:getAccUserFullfilled, payload:value}
}
export function getAccountUserPending(value){
    return {type:getAccUserPending, payload:value}
}
export function getAccountUserRejected(error){
    return {type:getAccUserRejected, error:error}
}
export function incrementByAmount(value){
    return {type:incByAmt,payload:value}
}
export function incrementBonus(){
    return {type:incBonus}
}