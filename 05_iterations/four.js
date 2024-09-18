const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
//    console.log(`${key} shortcut is for ${myObj[key]}`);
// console.log(key);
} 

const programming = ['js', 'ruby', 'python', 'java', 'cpp']
for (const key in programming) {
    console.log(programming[key]);
}