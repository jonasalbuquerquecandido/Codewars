// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Retornar um valor boleano
const boolToWord = (n) => n ? "yes" : "No"
// Ou
function boolToWord(n){
    if(n){
        return 'Yes'
    } else {
        return 'No'
    }
}