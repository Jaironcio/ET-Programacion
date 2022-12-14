import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

 async salir(){
    const alert = await this.alertController.create({
      header: 'Salir', 
      message: '¿desea salir?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('Ingresado');
            this.navCtrl.navigateRoot('loginselecction');
          }
        }
      ]
    });

    await alert.present();
  }
}
