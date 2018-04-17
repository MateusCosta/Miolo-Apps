import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

 
options :BarcodeScannerOptions;
constructor(public navCtrl: NavController,public barcodeScanner: BarcodeScanner) {

  }


  scanear(){
    alert("a");      
}   

  


  }





