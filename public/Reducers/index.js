export const addcart=(product)=>{
    console.log(product,"pro");
    return{
     type:"ADDITEM",
     payload:product,
    }
}
export const delcart=(product)=>{
    return{
     type:"DELITEM",
     payload:product,
    }
}