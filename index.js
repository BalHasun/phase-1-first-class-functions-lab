const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length - 2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
  return () => Math.pow(num, 2)
}

const fareDoubler = (fare) => {
  return fare * 2
}

const fareTripler = (fare) => {
  return fare * 3
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(arrayOfDrivers)
}
