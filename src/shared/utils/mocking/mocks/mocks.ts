import { faker } from "@faker-js/faker";

export const dashboard = {
  opportunities: range(100).map((i) => newOpportunity()),
};

function range(len: number) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
}

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
function getRandomFromRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function newOpportunity() {
  return {
    oppId: `#${getRandomFromRange(1000, 9999)}`,
    dataSubmitted: randomDate(new Date(2012, 0, 1), new Date()),
    datePlaced: randomDate(new Date(2012, 0, 1), new Date()),
    farmerName: faker.name.fullName(),
    shipToAddress: `${faker.address.streetAddress()}, ${faker.address.zipCode()}`,
    totalCost: `${Math.floor(Math.random() * 100)} Eur`,
  };
}
