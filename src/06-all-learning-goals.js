const weeklySalesDataExample = [
    {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
    {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
    {date: '2023-09-27', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-09-28', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-09-29', sales: [{item: 'Apple', quantity: 10, price: 1}, {item: 'Banana', quantity: 35, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-09-30', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-01', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-02', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-03', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-04', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-05', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-10-06', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-07', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-08', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-09', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-10', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-11', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-10-12', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-13', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-14', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]}
];


/**
 * This function generates a sales report for a given week.
 *
 * @param {array} salesData - An array of objects, each representing a day's sales.
 * Each object contains a date, and an array of items sold with their quantities and prices.
 * @returns {object} - An object containing total sales, best selling item, and the day with the highest sales.
 *
 * Usage:
 * const weeklySalesData = [
 *     {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
 *     {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
 *     // ... other days
 * ];
 * const report = generateSalesReport(weeklySalesData);
 * console.log(report);
 * // Outputs { totalSales: 55, bestSellingItem: 'Banana', highestSalesDay: {date: '2023-09-26', totalSales: 30} }
 */

function generateSalesReport(weeklySalesData) {

 var outputObj = { 
    totalSales: 0, 
    bestSellingItem: "", 
    highestSalesDay: {
        date: "", 
        totalSales: 0
        } 
    }
    var itemSales = {};
    var weeklySalesByDay = [];

    for (let i = 0; i < weeklySalesData.length; i++) {
        var dailySales = 0;
        for (let sale = 0; sale < weeklySalesData[i].sales.length; sale++) {
            const quantity = weeklySalesData[i].sales[sale].quantity;
            const price = weeklySalesData[i].sales[sale].price;

            outputObj.totalSales += quantity * price;
            dailySales += quantity * price;

            if (weeklySalesData[i].sales[sale].item in itemSales) {
                itemSales[weeklySalesData[i].sales[sale].item] += quantity;
            }
            else {
                itemSales[weeklySalesData[i].sales[sale].item] = quantity;
            }
        }
        weeklySalesByDay.push( {date: weeklySalesData[i].date, totalSales: dailySales});

    }

    const highestSales = findMax(Object.values(itemSales));
    // Get Key from value
    let highestSellingItem = Object.keys(itemSales).find(key => itemSales[key] === highestSales);
    outputObj.bestSellingItem = highestSellingItem;

    var highestWeeklySale = {date: "", totalSales: 0};
    for (let i = 0; i < weeklySalesByDay.length; i++) {
        if (weeklySalesByDay[i].totalSales > highestWeeklySale.totalSales) {
            highestWeeklySale.date = weeklySalesByDay[i].date;
            highestWeeklySale.totalSales = weeklySalesByDay[i].totalSales;
        }
    }
    outputObj.highestSalesDay = highestWeeklySale;

    return outputObj;
}

