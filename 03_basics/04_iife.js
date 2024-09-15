// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife bcz chai name is given here
    console.log("DB Connected");
})(); // Problem is caused by global scope pollution sometimes therefore to remove pollution IIFE is used which is to wrap a function in ()
// ';' semicolon is necessary here to explicitly end previous function


( () => {
    console.log("DB CONECTED");
} )();

( (name) => {
    console.log(`DB CONECTED ${name}`);
} )("Pranay")
