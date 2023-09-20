export default async function npv(invest, profit, r, long){
    let npv = 0
    let value
    console.log('Invest:' + invest + ', Profit: ' + profit + ', Disk: ' + r + ', Long: ' + long)
    for(let i = 0; i < long + 1; i++){
        if(i == 0){
            value = invest
        }
        else{
            value = profit  
        }
        let price = value / (Math.pow((1 + r), i))
        npv = npv + price
        console.log('T' + i +  ' / ' + price.toFixed(2))
    }
    return npv.toFixed(2)
}