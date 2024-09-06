//Calculating the Tip//

bill = 200
let tip =  bill > 50;300 ? bill * 0.15: bill * 0.20;

//Output Details//

let total_amount = bill + tip; 
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total_amount}`) 

//Create Function//

function calculate_Tip(bill_amount){
    let tippercentage;
 
    if(bill_amount < 50)
        tippercentage = 0.2;
    else if(bill_amount <= 300 && bill_amount >= 50)  // Using if esle if statements proved to be easier than ? //
        tippercentage = 0.15;
    else 
    tippercentage = 0.2;
    let Tip = bill_amount * tippercentage;
    return Tip;
}
    let bill_amount = 100;
    let Tip = calculate_Tip(bill)
    console.log(`Tip for ${bill_amount} bill is ${Tip}`)
    
// Utilize Arrays

    let bills = [275,40,430];           
    let tips = bills.map(bill => calculate_Tip(bill));
    let total_Amount = bills.map((bill, index) => bill + tips[index]);

    console.log("bills",bills);
    console.log("tips",tips);
    console.log("total per bill",total_Amount);


    
    


    








 
