Cambios realizados   : Validaciones de -login que los datos solicitados sean correctos sino emerge un mensaje de error de validaciones. 
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
    este apartado valida estas variables:
    ---------------------------------------------
    username: string = '';
    password: string = '';

  
  private readonly validCredentials = {
    username: 'invitado1',
    password: 'invitado1'
  };
---------------------------------------------------------------
logica de lectura
if (this.username === this.validCredentials.username && this.password === this.validCredentials.password) 
si esta todo correcto redirige a la interfaz de home.
--------------------------------------------------------------
si (este.usuario (String) es igual si o si a) === este.validadorUsuario.usuario(invitado1) &&(y/and) este.contraseña(String) es igual si o si a la contrasena de validacion.
si esta todo correcto redirige a la interfaz de home.
------------------------------------------------------------

else {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Los datos ingresados no son correctos',
        buttons: ['OK']
      });
      await alert.present();
    }
------------------------------------------------------------
el await this.alertController.create es la manera que ocupe para crear y configurar una alerta de forma asíncrona, esperando a que se complete su creación antes de proceder. Es parte de cómo Ionic maneja la creación de componentes interactivos de manera eficiente y fluida en la interfaz de usuario.
