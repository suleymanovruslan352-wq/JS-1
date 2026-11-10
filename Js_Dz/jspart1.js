
let option;
let balance = 1000;
let trial = 3;
let pincode;
const pincode_2 = "1234";
let counter = 0;
let amount;
let flag = true;

while (trial>0)
{
    pincode = prompt("Input pin:");
    if (pincode === pincode_2) {
        alert("Welcome!");
        break;
    }
    trial = trial - 1;
    alert("Wrong pin!");
    if (trial == 0)
    {
    flag = false;

    }
}

while (flag)
{
    alert("1.Balance 2.Take Money 3.Put Money 0.Exit");
    option = Number(prompt("Input option: "));
    switch (option)
    {
        case 0:
            alert("Exit")
            alert("Counter of actions: " + counter)
            flag = false;
            break;
        case 1:
            alert("Balance: " + balance);
            break;
        case 2:
            amount = Number(prompt("Input amount: "));
            if (amount > balance)
            {
                alert("You cant!");
                break;
            }
            if (amount <= 0 || amount % 5 != 0)
            {
                alert("You cant!");
                break;
            }
            alert("You took: " + amount);
            balance = balance - amount;
            alert("Balance left: " + balance);
            counter++;
            break;
        case 3:
            amount = Number(prompt("Input amount: "));
            if (amount <= 0 || amount % 5 != 0)
            {
                alert("You cant!");
                break;
            }
            alert("You put: " + amount);
            balance = balance + amount;
            alert("Balance left: " + balance);
            counter++;
            break;
        default:
            alert("Invalid option");
    }
    
}