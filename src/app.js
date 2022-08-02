import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
//Criar variavéis, atributos.

nome = " Vagner Alves";
telefone = ' 06565874';
cpf = ' 000.111.222-33';
idade = 30;

email = "f@f.com";
instagram = "https://www.google.com.br";
linkedin = "https://www.xbox.com";

visible = true;

trocarDiv(){
  this.visible = !this.visible;
}

}

/**
 * Exercicio em classe
 * Criar um metódo chamado de alterar valores
 * vai mudar o valor do nome, telefone, cpf, idade, e-mail, instagram e likedIN
 * 
 * No html criar um novo botão chamado 'Altera Valor' que ative a função
 * 
 */














