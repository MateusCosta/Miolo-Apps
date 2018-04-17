import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scannedCode = null;


  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {

  }


  scanear(){
    this.barcodeScanner.scan().then( resultado =>{
      alert(resultado.text);
      this.scannedCode = resultado.text;
    },(err) => {
      alert('Error: '+ err);
  });


  }


  ionViewDidLoad(){

   

  
  }

}
