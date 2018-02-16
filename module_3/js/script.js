const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const keybord = alphabet.split('');

console.log(keybord);

const one = keybord.slice(0,12);
const two = keybord.slice(12,23);
const tree = keybord.slice(23,33);

console.log(one);
console.log(two);
console.log(tree);

const oneTwoTree = [one,two,tree];
console.log(oneTwoTree);

const first = keybord[17] + keybord[2] +keybord[20] + keybord[20] + keybord[8]; 
console.log(first);

const second = keybord[18] + keybord[12] + keybord[26] + keybord[12] + keybord[13] + keybord[25] + keybord[3] + keybord[7] + keybord[9] + keybord[4];
console.log(second);

const thrid = keybord[4] + keybord[3] + keybord[12] + keybord[7] + keybord[28] + keybord[2] + keybord[3];  
console.log(thrid);