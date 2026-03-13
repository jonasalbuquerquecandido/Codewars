// ========================================
// JAVASCRIPT - GUIA DE REFERÊNCIA RÁPIDA
// ========================================

// ========================================
// 1. VARIÁVEIS E TIPOS DE DADOS
// ========================================

// Declarar variáveis
let nome = "João"           // Pode ser reatribuída (recomendado)
const idade = 25            // Não pode ser reatribuída
var cidade = "São Paulo"    // Antigo, evitar usar

// Tipos de dados
typeof "texto"              // "string"
typeof 42                   // "number"
typeof true                 // "boolean"
typeof undefined            // "undefined"
typeof null                 // "object" (bug do JS)
typeof {}                   // "object"
typeof []                   // "object" (arrays são objetos)

// Conversão de tipos
Number("123")               // 123
String(123)                 // "123"
Boolean(1)                  // true
Boolean(0)                  // false
parseInt("42")              // 42
parseFloat("3.14")          // 3.14

// ========================================
// 2. OPERADORES
// ========================================

// Aritméticos
10 + 5                      // 15 (soma)
10 - 5                      // 5 (subtração)
10 * 5                      // 50 (multiplicação)
10 / 5                      // 2 (divisão)
10 % 3                      // 1 (módulo - resto)
2 ** 3                      // 8 (potência)

// Comparação
5 == "5"                    // true (compara valor)
5 === "5"                   // false (compara tipo também)
5 != "5"                    // false
5 !== "5"                   // true (diferente em tipo e valor)
5 > 3                       // true
5 < 3                       // false
5 >= 5                      // true
5 <= 5                      // true

// Lógicos
true && false               // false (E lógico)
true || false               // true (OU lógico)
!true                       // false (NÃO lógico)

// Atribuição
let x = 10
x += 5                      // x = x + 5 (x = 15)
x -= 3                      // x = x - 3 (x = 12)
x *= 2                      // x = x * 2 (x = 24)
x /= 4                      // x = x / 4 (x = 6)

// ========================================
// 3. ESTRUTURAS DE CONTROLE
// ========================================

// IF / ELSE IF / ELSE
if (idade >= 18) {
    console.log("Maior de idade")
} else if (idade >= 13) {
    console.log("Adolescente")
} else {
    console.log("Criança")
}

// SWITCH
let dia = 1
switch (dia) {
    case 1:
        console.log("Segunda")
        break           // Importante! Sai do switch
    case 2:
        console.log("Terça")
        break
    default:            // Se nenhum case combinar
        console.log("Dia inválido")
}

// OPERADOR TERNÁRIO (forma curta de if/else)
const resultado = idade >= 18 ? "Maior" : "Menor"

// Ternário aninhado (múltiplas condições)
const nota = 85
const conceito = 
    nota >= 90 ? "A" :
    nota >= 80 ? "B" :
    nota >= 70 ? "C" :
    "D"

// ========================================
// 4. LOOPS
// ========================================

// FOR LOOP (forma mais comum)
// Estrutura: for (inicialização ; condição ; incremento)
for (let i = 0; i < 5; i++) {
    console.log(i)          // 0, 1, 2, 3, 4
}

// FOR reverso
for (let i = 5; i > 0; i--) {
    console.log(i)          // 5, 4, 3, 2, 1
}

// FOR pulando números
for (let i = 0; i < 10; i += 2) {
    console.log(i)          // 0, 2, 4, 6, 8
}

// FOR percorrendo array
const frutas = ["maçã", "banana", "laranja"]
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])  // Cada fruta
}

// WHILE LOOP
let contador = 0
while (contador < 5) {
    console.log(contador)   // 0, 1, 2, 3, 4
    contador++
}

// DO...WHILE (executa pelo menos 1 vez)
let x = 0
do {
    console.log(x)          // Executa mesmo se x < 5 for false
    x++
} while (x < 5)

// FOR...IN (percorre propriedades de um objeto/array)
const pessoa = { nome: "João", idade: 25 }
for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// FOR...OF (percorre valores de um array)
for (let fruta of frutas) {
    console.log(fruta)      // maçã, banana, laranja
}

// BREAK (sai do loop)
for (let i = 0; i < 10; i++) {
    if (i === 5) break      // Para quando i for 5
    console.log(i)          // 0, 1, 2, 3, 4
}

// CONTINUE (pula para próxima iteração)
for (let i = 0; i < 5; i++) {
    if (i === 2) continue   // Pula quando i for 2
    console.log(i)          // 0, 1, 3, 4
}

// ========================================
// 5. FUNÇÕES
// ========================================

// Função declarativa
function somar(a, b) {
    return a + b
}
console.log(somar(5, 3))    // 8

// Função expressão (anônima)
const multiplicar = function(a, b) {
    return a * b
}
console.log(multiplicar(5, 3))  // 15

// ARROW FUNCTION (forma moderna)
const dividir = (a, b) => {
    return a / b
}
console.log(dividir(10, 2))     // 5

// Arrow function com uma linha (return implícito)
const subtrair = (a, b) => a - b
console.log(subtrair(10, 3))    // 7

// Arrow function com um parâmetro (parênteses opcionais)
const dobrar = x => x * 2
console.log(dobrar(5))          // 10

// Parâmetros padrão
function cumprimento(nome = "Visitante") {
    return `Olá, ${nome}!`
}
console.log(cumprimento())      // Olá, Visitante!
console.log(cumprimento("João"))// Olá, João!

// Rest parameters (pega múltiplos argumentos)
function somar_varios(...numeros) {
    return numeros.reduce((a, b) => a + b, 0)
}
console.log(somar_varios(1, 2, 3, 4))   // 10

// ========================================
// 6. ARRAYS
// ========================================

const arr = [1, 2, 3, 4, 5]

// Acessar elemento
arr[0]                      // 1 (primeiro elemento)
arr[arr.length - 1]         // 5 (último elemento)

// Adicionar elemento
arr.push(6)                 // Adiciona no final → [1, 2, 3, 4, 5, 6]
arr.unshift(0)              // Adiciona no início → [0, 1, 2, 3, 4, 5, 6]

// Remover elemento
arr.pop()                   // Remove o último
arr.shift()                 // Remove o primeiro
arr.splice(2, 1)            // Remove 1 elemento a partir do índice 2

// Encontrar elemento
arr.includes(3)             // true (verifica se tem)
arr.indexOf(3)              // 2 (índice do elemento)
arr.find(x => x > 3)        // 4 (primeiro que passa na condição)
arr.findIndex(x => x > 3)   // 3 (índice do primeiro que passa)

// Transformar array
arr.map(x => x * 2)         // [2, 4, 6, 8, 10] (multiplica cada um)
arr.filter(x => x > 2)      // [3, 4, 5] (filtra os maiores que 2)
arr.reduce((a, b) => a + b, 0) // 15 (soma todos)

// Ordenar
arr.sort((a, b) => a - b)   // Ordem crescente
arr.sort((a, b) => b - a)   // Ordem decrescente
arr.reverse()               // Inverte a ordem

// Juntar arrays
[1, 2].concat([3, 4])       // [1, 2, 3, 4]
[...[1, 2], ...[3, 4]]      // [1, 2, 3, 4] (spread operator)

// ========================================
// 7. OBJETOS
// ========================================

const pessoa = {
    nome: "João",
    idade: 25,
    email: "joao@email.com"
}

// Acessar propriedade
pessoa.nome                 // "João" (notação de ponto)
pessoa["nome"]              // "João" (notação de colchete)

// Adicionar propriedade
pessoa.telefone = "123456"  // Adiciona nova propriedade
pessoa["cidade"] = "São Paulo"

// Deletar propriedade
delete pessoa.email

// Verificar se propriedade existe
"nome" in pessoa            // true
pessoa.hasOwnProperty("nome") // true

// Pegar todas as chaves
Object.keys(pessoa)         // ["nome", "idade", "telefone", "cidade"]

// Pegar todos os valores
Object.values(pessoa)       // ["João", 25, "123456", "São Paulo"]

// Pegar chave-valor
Object.entries(pessoa)      // [["nome", "João"], ["idade", 25], ...]

// Destructuring (extrair propriedades)
const { nome, idade } = pessoa
console.log(nome, idade)    // "João" 25

// Destructuring com renomeação
const { nome: n, idade: i } = pessoa

// Spread em objeto
const novaPessoa = { ...pessoa, profissao: "Desenvolvedor" }

// ========================================
// 8. STRINGS
// ========================================

const texto = "JavaScript"

// Propriedades
texto.length                // 10 (número de caracteres)
texto[0]                    // "J" (primeiro caractere)

// Métodos
texto.toUpperCase()         // "JAVASCRIPT"
texto.toLowerCase()         // "javascript"
texto.charAt(0)             // "J"
texto.charCodeAt(0)         // 74 (código ASCII)
texto.indexOf("S")          // 4 (índice onde encontra)
texto.includes("Script")    // true (verifica se tem)
texto.startsWith("Java")    // true
texto.endsWith("Script")    // true
texto.slice(0, 4)           // "Java" (extrai parte da string)
texto.substring(0, 4)       // "Java" (similar ao slice)
texto.replace("Script", "JS") // "JavaJS"
texto.trim()                // Remove espaços das laterais
texto.split("")             // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// Template literals (backticks)
const nome = "João"
const idade = 25
console.log(`${nome} tem ${idade} anos`) // "João tem 25 anos"

// ========================================
// 9. CONSOLE
// ========================================

console.log("Mensagem normal")
console.error("Mensagem de erro")
console.warn("Aviso")
console.table([{nome: "João"}, {nome: "Maria"}])
console.time("timer")       // Inicia contador
// ... código ...
console.timeEnd("timer")    // Mostra quanto tempo passou

// ========================================
// 10. EXEMPLOS PRÁTICOS COMUNS
// ========================================

// Exemplo 1: Somar números positivos de um array
function somarPositivos(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            soma += arr[i]
        }
    }
    return soma
}
// Forma curta: arr.reduce((s, n) => n > 0 ? s + n : s, 0)

// Exemplo 2: Filtrar números maiores que 5
const numeros = [1, 3, 5, 7, 9]
const maioresQue5 = numeros.filter(n => n > 5)  // [7, 9]

// Exemplo 3: Verificar idade
const verificarIdade = (idade) => idade >= 18 ? "Maior" : "Menor"

// Exemplo 4: Encontrar número em array
const temNumero = (arr, num) => arr.includes(num)