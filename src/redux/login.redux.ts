const ADD_NUM= 'ADD_NUM';
const REDUCE_NUM = 'REDUCE_NUM';
const initState = {
    num:10
};
export function login(state=initState,action:any):object{
    switch(action.type){
        case ADD_NUM:
          return{...state,num:state.num+1};
        case REDUCE_NUM:
          return{...state};
        default:
          return state  
    }
}
export function addNum():object{

  return { type:ADD_NUM}
}

export function setAddNum():any{
   return (dispatch:any)=>{
     setTimeout(()=>{
      dispatch(addNum())
     },2000)

   }
}