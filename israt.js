function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes)){
        return 'invalid.'
    }
    else{
        let sum = 0;
        for(let tiime of waitingTimes){
        sum += tiime;
        }
        const av = sum / waitingTimes.length;
        const herTime = serialNumber - waitingTime.length;
        const timeCome = herTime * av ;

        return timeCome + ' min later her tiime will come.'
    }
    
}
const times =[2,3,5,6,3];
const counting= waitingTime(times,10);
console.log(counting);