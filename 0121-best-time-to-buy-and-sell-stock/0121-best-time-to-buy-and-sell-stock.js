/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length;i++){
        const newPrice = prices[i];
        buyPrice =newPrice > buyPrice ? buyPrice : newPrice;
        profit = Math.max(profit,newPrice - buyPrice );
    }

    return profit;
};