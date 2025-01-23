
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



// we have a make a fucking function for generating notificationn who sent you faking mail..

const user= 'sajjatAhmed@gmail.com';

function notify(gmail){
    const newone=gmail.split('@gmail.com');
    
    const result = newone + ' sent you an email.'
    console.log(result);
}
notify(user);

const tri = 'mehedi#mail.com';
const rival= tri.slice('#');
console.log(rival);
