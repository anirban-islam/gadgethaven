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
const removeTostoreProductList=(id)=>{
     const storeList=getStoreproductList();
     storeList.pop(id);
     const storeListstr =JSON.stringify(storeList);
     localStorage.setItem('cart_list',storeListstr);


}
const getStoreWishList=()=>{
     const wishistStr=localStorage.getItem('wish_list');
     if(wishistStr){
          const storeList = JSON.parse(wishistStr);
          return storeList;
     }
     else{
          return [];
     }
}
const removeTosWishList=(id)=>{
     const storeList=getStoreWishList();
     storeList.pop(id);
     const storeListstr =JSON.stringify(storeList);
     localStorage.setItem('wish_list',storeListstr);


}
export {removeTostoreProductList ,removeTosWishList}