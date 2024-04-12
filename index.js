// Code your solution in this file!

// Function selectDifferentDrivers that returns either the first two or last two drivers based on the function argument provided
const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers);
};

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);