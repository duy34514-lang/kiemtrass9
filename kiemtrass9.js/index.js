let orders = ["dơn hàng a","đơn hàng b","đơn hàng c","đơn hàng d","đơn hàng e"] ;
let revenues = [1500,2800,1200,-500,3200] ;

let flag = revenues.some((p) => {
    return p <=0 ;
});
let flag1 = revenues.every((p) => {
    return p >= 500 ;
}) ;
if (flag) {
    console.log("có đơn hàng âm", flag);
    
}
if (flag1) {
    console.log("tất cả đơn hàng trên 500", !flag1);
    
}
let netProfits = revenues.map((p) =>{
    return p - p*0.1 ;
}) ;
console.log(netProfits);
