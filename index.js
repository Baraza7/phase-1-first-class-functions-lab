
const returnFirstTwoDrivers = function (drivers) {
   let firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
};

const returnLastTwoDrivers = function (drivers) {
    let lastTwoDrivers = drivers.slice(-2);
     return lastTwoDrivers;
 };

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, fn) {
    return fn(drivers);
};