const getStoreproductList=()=>{
     const storelistStr=localStorage.getItem('cart_list');
     if(storelistStr){
          const storeList = JSON.parse(storelistStr);
          return storeList;
     }
     else{
          return [];
     }
}
const getStoreWishList=()=>{
     const storelistStr=localStorage.getItem('wish_list');
     if(storelistStr){
          const storeList = JSON.parse(storelistStr);
          return storeList;
     }
     else{
          return [];
     }
}
const addTostoreProductList=(id)=>{
     const storeList=getStoreproductList();
     storeList.push(id);
     const storeListstr =JSON.stringify(storeList);
     localStorage.setItem('cart_list',storeListstr);


}
const addTostoreWishList=(id)=>{
     const storeList=getStoreWishList();
     storeList.push(id);
     const storeListstr =JSON.stringify(storeList);
     localStorage.setItem('wish_list',storeListstr);


}

export {addTostoreProductList,getStoreproductList,addTostoreWishList ,getStoreWishList}
