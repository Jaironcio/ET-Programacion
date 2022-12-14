import { Component, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnDestroy {

   // https://www.npmjs.com/package/angularx-qrcode
   qrCodeString = 'mensaje secreto';
   scannedResult: any;
   content_visibility = '';
 
   constructor() {}

 
    async checkPermission() {
    
       // check or request permission
       const status = await BarcodeScanner.checkPermission({ force: true })
       if (status.granted) {
         // the user granted permission
         return true;
       }
       return false;
   }
 
   async startScan() {
     try {
       const permission = await this.checkPermission();
       if(!permission) {
         return;
       }
       await BarcodeScanner.hideBackground();
       document.querySelector('body').classList.add('scanner-active');
       this.content_visibility = 'hidden';
       const result = await BarcodeScanner.startScan();
       console.log(result);
       BarcodeScanner.showBackground();
       document.querySelector('body').classList.remove('scanner-active');
       this.content_visibility = '';
       if(result?.hasContent) {
         this.scannedResult = result.content;
         console.log(this.scannedResult);
       }
     } catch(e) {
       console.log(e);
       this.stopScan();
     }
   }
 
   stopScan() {
     BarcodeScanner.showBackground();
     BarcodeScanner.stopScan();
     document.querySelector('body').classList.remove('scanner-active');
     this.content_visibility = '';
   }
 
   ngOnDestroy(): void {
       this.stopScan();
   }
 
}
