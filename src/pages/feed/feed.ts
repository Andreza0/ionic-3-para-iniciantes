import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string= "Andreza Barbosa do código"; //para a variável ser enxergada pelo arquivo .html, ela precisa ser pública
  //public nome_usuario:string = ""; - colocar o tipo da variavel restringe ela somente aquele tipo. Tipagem forte ou fraca
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public somaDoisNumeros(num1:number, num2:number): void{
    //alert(num1 + num2);
  }
  ionViewDidLoad() { //ciclo de vida de uma pagina, ela eh chamada sempre que a pagina for carregada
    //console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10, 99);
  }

}
