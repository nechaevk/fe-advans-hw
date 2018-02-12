const topRowOne = 'qwertyuiop\[\]';
const middleRowTwo = 'asdfghjkl\;';
const bottomRowThree = 'zxcvbnm\,\.';

const topLength = topRowOne.length;
const middleLength = middleRowTwo.length;
const bottomLength = bottomRowThree.length;

const topCharatOne = topRowOne.charAt(1);
const middleCharatOne = middleRowTwo.charAt(1);
const bottomCharatOne = bottomRowThree.charAt(1);

const topCharatTwo = topRowOne.charAt(12);
const middleCharatTwo = middleRowTwo.charAt(10);
const bottomCharatTwo = bottomRowThree.charAt(9);

const findPositionOne = topRowOne.indexOf('[');
const findPositionTwo = topRowOne.indexOf(']');

console.log (`topRowOne = ${topRowOne} ${topLength} ${topCharatOne} ${topCharatTwo} ${findPositionOne} ${findPositionTwo}
middleRowTwo = ${middleRowTwo} ${middleLength} ${middleCharatOne} ${middleCharatTwo} 
bottomRowThree = ${bottomRowThree} ${bottomLength} ${bottomCharatOne} ${bottomCharatTwo}`);



