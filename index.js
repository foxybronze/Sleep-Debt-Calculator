// get sleep hours for each night
const getSleepHours = day =>{
  day=day.toLowerCase();
  if (day ==='sunday') {
    return 12;
  } else if 
    (day ==='monday') {
      return 8;
  } else if
   (day ==='tuesday') {
    return 7;
  } else if 
    (day ==='wednesday') {
      return 9;
  } else if 
    (day ==='thursday') {
      return 6;
  } else if
   (day ==='friday') {
    return 1;
  } else if 
    (day ==='saturday') {
      return 10;
    } else if 
    (day ==='sunday') {
      return 8;
  }
  else {
    return 'Error! Invalid day.';
  }
};

// get total hours slept
const getActualSleepHours = () => 
  getSleepHours('sunday') +
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') 
;

//get ideal sleep hours preferred
const getIdealSleepHours = () => {
  IdealHours = 8.5;
  return IdealHours*7;
};


//get sleep debt

const getSleepDebt = () =>{
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (idealSleepHours === actualSleepHours){
    return 'Amazing! You got the perfect amount of sleep!';
  } else if (idealSleepHours < actualSleepHours){
    return 'Wow, you are sleeping ' + (actualSleepHours - idealSleepHours) + 'too much.';
  } else if (idealSleepHours > actualSleepHours){
    return 'You poor thing. Go home and get ' + (idealSleepHours - actualSleepHours) +' hours of rest.';
  } 
};
getSleepDebt();

console.log(getSleepDebt());



console.log(getActualSleepHours());
console.log(getIdealSleepHours());


//calculate sleep debt, if any
  console.log(getSleepHours('monday'));
