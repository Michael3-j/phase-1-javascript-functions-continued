saturdayFun(activity);
function saturdayFun(activity ="roller-skate" ){ 
    return `This Saturday, I want to ${activity}!`;
}



mondayWork(activity);
function mondayWork(activity ="go to the office"){
    return `This Monday, I will ${activity}.`
}



wrapAdjective(adjective);
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}