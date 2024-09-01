import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage {
  
  username: string = '';
  password: string = '';

  
  private readonly validCredentials = {
    username: 'invitado1',
    password: 'invitado1'
  };

  constructor(
    private alertController: AlertController, 
    private router: Router
  ) {}

  async login() {
    
    if (this.username === this.validCredentials.username && this.password === this.validCredentials.password) {
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Los datos ingresados no son correctos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}





