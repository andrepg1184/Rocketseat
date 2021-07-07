let family = {
    incomes:[2500,3200,250.43,460.65],
    expenses:[5320.24,128.56,145.56,1410]
}

function sum(array){
    let total = 0;

    for(let value of array ){
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    let balanceText = "Negativo"
    
    const itsOK = total >= 0
    
    if(itsOK){
        balanceText = "positivo"
        
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)

}

calculateBalance()