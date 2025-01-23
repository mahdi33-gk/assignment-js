
function calculateTax(income, expenses) { 
    if((typeof income === 'number' || typeof expenses === 'number') && income>0 && expenses>0 && income >= expenses ){
        const defTwo = income - expenses;
        const tax =  defTwo * 0.2;
        return tax;
    }
    else{
        return 'error.';
    }
}

const tax= calculateTax(7000,70000);
console.log(tax);


