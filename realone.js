
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
    if(gmail.includes('@')){
        const newone=gmail.split('@');
        const first= newone[0];
        const second= newone[1];
        
        const result = first + ' sent you an email. From '+ second;
        console.log(result)
    }
    else{
        console.log('add @ please.');
    }
}
notify(user);




// problem 3

function nameCheck(name){
    for(let letter of name){
        if(letter=='number'){
            return true;
        }
        else{
            return false;
        }
    }
}
const nidhu ='Jannat33';
const result = nameCheck(nidhu);
console.log(result);

// problem3 name,  testScore, schoolGrade, isFFamily

function selectVersity(information){
    if(typeof information !== 'object'){
        return 'invalid';
    }
    else{
        if(information.testScore <= 50 && information.schoolGrade <= 30  && information.isFFamily === true){
            return true;
        }
        else{
            return false;
        }
    }
}

const nithu = {name:'Ami',testScore: 50, schoolGrade:30, isFFamily:true};
const mehedii = {name:'Ami',testScore: 50, schoolGrade:30, isFFamily:false};
const aboni = {name:'Ami',testScore: 50, schoolGrade:300, isFFamily:true};

const realone= selectVersity(nithu);
const realone1= selectVersity(mehedii);
const realone2= selectVersity(aboni);
console.log(realone, realone1, realone2);