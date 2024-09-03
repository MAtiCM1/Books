import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLOGINPage implements OnInit {

  username: string = '';  
  password: string = '';  

  // Credenciales válidas
  private readonly validCredentials = [
    { username: 'MatiasC', password: 'DuocUC' },
    { username: 'BenjaminA', password: 'DuocUC' }
  ];

  constructor(
    private alertController: AlertController, 
    private router: Router
  ) {}

  
  async login() {
    const validUser = this.validCredentials.find(cred => cred.username === this.username && cred.password === this.password);
    
    if (validUser) {
      this.router.navigate(['/admin']);  
    } else {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Los datos ingresados no son correctos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  ngOnInit() {
  }

}
