/**class List {
    constructor() {
        this.data = [1];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class ToDoList extends List {    // classe
    //constructor() {  // iniciando variavel
     //   this.todos = [];
   // }

 ///   addTodo() {
      //  this.todos.push('Novo Todo');
       // console.log(this.todos);
   // }
    constructor() {
        super();
        this.usuario = 'Danillo';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

}
// Aula de classes*********************************************************************************************
var MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo Todo'), MinhaLista.mostraUsuario();
}

**/
/** Exemple de como nao fazer 
class ToDoList {
    constructor() {
        this.todos = [];

    }
    static addTodo() {   // metodo statico nao encherga o restante da classe

    }
}

ToDoList.addTodo();      *********VER ACIMA*****************
**/ 
/** 


class matematica {
    static soma(a, b) {
        return a + b;
        
    }
    
}

console.log(matematica.soma( 1, 15));

**/

// aula const e let**********************************************************************************

//const a = 1; // const nao pode ter ser valor reatribuido

//a = 1; // isso nao pode ser feito com uma const
/** 
const usuario = { nome: "danillo"};
usuario.nome = "danilo2"; // chamado de mutação e isso pode ser feito 

console.log(usuario);
*/

// variaveis de escopo************************************************************
/** 

function teste(x) {

    let y = 2;    // utilizando let as variaveis ficam disponiveis apenas dentro do escopo "neste caso função"
    if (x > 5) {
        //let y = 4; // mais pode ser reatribuido 
        console.log(x, y);        
    }
} 
teste(10);


//**********operações em array *//************************************************************** 

const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map(function(item) { // mapeia o vetor 
    return item * 1000;  // o retorn pode ser passado para chamar a função 
})

console.log(newArr);

//********** 
const arr2 = [1, 3, 4, 5, 8, 9];

const newArr2 = arr2.map(function(item, index) { // mapeia o vetor , index retorna a posição do vetor 
    return item + index;  // operacao de soma de cada item do vetor + sua posição dentro dele 
})

console.log(newArr2);

//******************** 

const soma = arr.reduce(function(total, next) { //percorre cada itm e soma com o proximo no tamanho total do array
    return total + next;    // "0+1, 1+3, 4+4"... ate o total quecorresponde a soma
});

console.log(soma);

//********************** 

const filter = arr.filter(function(item) {  // retorna um novo array somente com numeros pares do array anterior
    return item % 2 === 0;
})

console.log(filter);

//******************** 

const find = arr.find(function(item) { //retorna o valor se o mesmo for encontrado no array.
    return item === 3;
})

//************************ARROW FUNCTION************************************************************* 

const arrowFunc = [1, 3, 10, 35]

const newArrowFunc = arrowFunc.map(function(item) {  // forma inicial "função anonima"
    return item * 2
})

console.log(newArrowFunc);

//************************ 
const arrowFunc1 = [1, 3, 10, 35]

const newArrowFunc1 = arrowFunc1.map((item) => {  // Primeira simplificação subistitui o function por "=>";
    return item * 5
})

console.log(newArrowFunc1);

//************************ 
const arrowFunc2 = [1, 3, 10, 35]

const newArrowFunc2 = arrowFunc2.map(item => {  // quando recebe apenas um parametro podemos reduzir parenteses
    return item * 10
})

console.log(newArrowFunc2);

//************************ 
const arrowFunc3 = [1, 3, 10, 35]

const newArrowFunc3 = arrowFunc3.map(item => item * 100 )  // retorno de apenas um item pode ser retorndo novamnete
 
console.log(newArrowFunc3);

//**************************** 
const testenao = () => ({ nome: "danillo" })// pode ser utilizado porem nao e recomendado }
console.log(testenao); // retorna toda a função
console.log(testenao()); //retorna o resultado da função 

//*********** VALORES PADRAO ****************************************************************** 

function somanum (a = 3, b = 6) { // valores padrao para a e b ---> passando um novo numero ele e substituido 
    return a + b;
}

console.log(somanum());  // valores atuais.
console.log(somanum(1)); // substituido "a".

//**********  forma de arrow function 

const somanum1 = (a = 4, b = 4) => a + b; // versao reduzida arrow function
   


console.log(somanum1());  // valores atuais.
console.log(somanum1(1)); // substituido "a".


//**********DESESTRUTURAÇÃO********************************************************************* 

const usuario = {
    nome: "danillo",
    idade: "34",
    endereco: {
        cidade: "cruzeiro",
        estado: "sp"
    },
};

console.log(usuario);
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade; //antes da desetruturação normalmente se usa estas formas 

//** jeito ES6 

const { nome, idade, endereco: { cidade }} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

// utilizando  functions, outra maneira 


const usuaria = {
    nome: "Gabriella",
    idade: "15",
    endereco: {
        cidade: "cachoeira paulista",
        estado: "sp"
    },
};

//function mostraNome(usuaria) { // maneira tradicional
    //console.log(usuaria.nome);
//}
//mostraNome(usuaria);

function mostraNome({ nome, idade }) {  // maneira desestruturada passa um "objeto nome, idade".
    console.log(nome, idade);
}
mostraNome(usuaria);

//****************OPERADORES REST/SPREAD *************************************************
//yarn add @babel/plugin-proposal-object-rest-spread - e diciona plugins : @babel/plugin-proposal-object-rest-spread no .babelrc

// REST - RESTO DAS PROPRIEDADES

const proprietario = {
    id: "Danillo",
    idade: 34,
    empresa: "SERCOS"
};

const { id, ...resto } = proprietario; // utilizando desetruturação foi selecionado "id" e o resto "rest" tambem foi selecionado com rest

console.log(id);
console.log(resto);

/** em arrays *********

const restoArray = [1, 2, 5, 88 ];

const [a, b, ...c] = restoArray;  // restante da selecao alocado na variavel "c".

console.log( a );
console.log( b );
console.log( c );

/** Para paametros de funcao ******

function outraSoma ( a, b, c) { // maneira convencional 
    return a + b + c;
}
 console.log(outraSoma(1, 3, 3));

 /** forma utilizando rest 
 
function outraSomaP ( ...params) { // retorna os parametros em formato de array 
    return params;
}
 console.log(outraSomaP(1, 3, 3));

 //** fazendo soma com arrow function 

 function outraSomaPS ( ...params) { // retorna a soma com arown function 
    return params.reduce((total, next) => total + next);
}
 console.log(outraSomaPS(1, 3, 16));


  //** arrow function novamente 

  function outraSomaPSA ( a, b, ...params) { // params retorna com as sobras a partir do num 16, "return".
    return params;
}
 console.log(outraSomaPSA(1, 3, 16, 45, 999999999999999));

/**SPREAD ************************************************************************************* 
//PODE SER UTILIZADO EM JUNCAO DE ARRAYS

const array1Spread = [10, 20, 10, 40 ];
const array2Spread = [50, 60, 70 ];

const array3Spread = [...array1Spread, ...array2Spread]; //resultado é a uniao dos arrays

console.log(array3Spread);

/** outra opcao de utilizacao do spread
const maisUmUsuario = {
    nome: "danillo cendrette",
    idade: 34.5,
    empresa: "SERCOS Tecnologia"
};

const maisUmUsuario1 = { ...maisUmUsuario, nome: "gabriel" }; ///sleciona e substitui um unico atributo do objeto

console.log(maisUmUsuario1);


/**TEMPLATE LITERALS  //*******************************************************************************

const nomeTemplate = "Danillo";
const idadeTemplate = 34;


console.log("meu nome é " + nomeTemplate + " e tenho " + idadeTemplate + " anos."); // maneira tradicional
console.log(`meu nome é ${nomeTemplate} e tenho ${idadeTemplate} anos.`); // recurso template liteals adicionando crase e sinal de dolar

/** OBJECT SHORT SYNTAX ******************************************************************************

const nomeSS = "Danillo";
const idadeSS = 34;

const usuarioSSN = { // maneira tradicional 
    nomeSS: "Danillo",
    idadeSS: 34,
    empresa: "Sercos",
}

const usuarioSS = { // maneira com  object short syntax "nao precisa repassar os valores"
    nomeSS,
    idadeSS,
    empresa: "Sercos",
}

console.log(usuarioSSN);
console.log(usuarioSS);


**/

/**WEBPACK *******************************************VARIAS INSTALAÇÕES APENAS ******************************** */

/**IMPORT/EXPORT *************************************************************************************** */

//import { somaTeste, } from './funcoes'; // import com uma funcao

//console.log (somaTeste(1, 2));


//********************** */

//import { somaTeste, subTeste } from './funcoes'; // import com mais de uma funcao

//console.log (somaTeste(1, 2));
//console.log (subTeste(1, 2));


//********************** */

//import soma from './soma'; // pode ser utilizado qundo o arquivo possui apenas uma função

//console.log(soma(3, 4));

//import somaOutronome from './soma'; // ainda pode ser utilizado outro nome na importação da função

//console.log(somaOutronome(3, 25));

//******************************** */

//import { somaTeste as somaFunction, subTeste } from './funcoes'; // import alterando nome com export sem "defalt"

//console.log (somaFunction(10, 2));
//console.log (subTeste(1, 2));

//******************************** */

//import soma, { sub } from './soma'; // import com default e outras funcoes 

//console.log (soma(10, 2));
//console.log (sub(1, 2));
/** 

import * as funcoes from '../soma'; // importando varias funcoes que viram objetos

console.log (funcoes);
console.log (funcoes.soma(10, 5));
console.log (funcoes.sub(10, 5));
console.log (funcoes.mul(10, 5));

*/

//const minhaPromise = () => new Promise((resolve, reject ) => {
   // setTimeout(() => { resolve('ok')}, 2000);
//})

//async function executaPromise () {  //funcao assincrona que retorna a promise
     //console.log(await minhaPromise());// aguarda 2 segundos e executa 
    // console.log(await minhaPromise());// aguarda a anterior para executar "4 segundos"
     //console.log(await minhaPromise());// 6 segundos


//}

/** 

   const executaPromise = async () => {  //Modo de arow function
    console.log(await minhaPromise());// aguarda 2 segundos e executa 
    console.log(await minhaPromise());// aguarda a anterior para executar "4 segundos"
    console.log(await minhaPromise());// 6 segundos
   };

    executaPromise();
*/

//****** configurando AXIOS moelo ES8*****************************************/

/**import axios from 'axios';

class Api {
    static async getUserInfo ( username ) {
        try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
        } catch (err) {
            console.warn('erro na Api');
        }
    }
}

Api.getUserInfo('Dcendrette');// retorna corretamente 
Api.getUserInfo('Dcendrette33333');// retorna erro "catch"

**/
import api from './api';

class App {
    constructor () {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEL = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addrepository(event); 

        }

     async addrepository(event) {
         event.preventDefault();

        const repoInput = this.inputEL.nodeValue;

        if (repoInput.length === 0)
        return;

        const response = await api.get(`/repos/${repoInput}`);

        console.log(response);

         this.repositories.push({
             name: 'Rocketseat.com.br',
             description: 'Tire sua ideia do papel',
             avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
             html_url: 'https://github.com/Rocketseat',
         });

         //console.log(this.repositories);

         this.render();

     }
     render() {
        this.listEl.innerHTML = "";
        this.repositories.forEach( repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEL = document.createElement('strong');
            titleEL.appendChild(document.createTextNode(repo.name));

            let descriptionEL = document.createElement('p');
            descriptionEL.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEL);
            listItemEl.appendChild(descriptionEL);
            listItemEl.appendChild(linkEl);
            this.listEl.appendChild(listItemEl);




        })

     }
     
}

new App();