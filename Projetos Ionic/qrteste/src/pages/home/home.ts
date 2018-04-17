import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner,private qrScanner: QRScanner) {

  }


    createCode(){

      this.createdCode = this.qrData;

    }



    scanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
        this.scannedCode = barcodeData.text;
      }, (err) => {
          console.log('Error: ', err);
      });
    }
}
