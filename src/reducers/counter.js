const counter =(state=0,action={})=>{//創了兩個參數
  switch(action.type){//什麼需求返回什麼內容
    case 'INCREMENT':
    return state+1; 
    // Switch 來判斷接受到的 Action 是什麼
    case 'DECREMENT':
    return state-1; 
    default:return state;
    
  }
}
export default counter