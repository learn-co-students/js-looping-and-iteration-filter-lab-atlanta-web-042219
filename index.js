// Code your solution in this file

function findMatching(collection, name){
   const newArray = collection.filter(element => element.toLowerCase() === name.toLowerCase());
   {
    return newArray
  }
}

function fuzzyMatch(collection, name){
  const newArray = collection.filter(element => element[0] === name[0]);
  {
   return newArray
 }
}

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
function matchName(collection, name){
  const newArray = collection.filter(element => element.name === name);
  {
   return newArray
 }
}
