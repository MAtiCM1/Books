import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private router:Router) { } 
  ngOnInit() {
  }

  irPagina(){
    //creacion de movimientos entre paginas
    this.router.navigate(['/log-in']);
    this.router.navigate(['/register']);
    this.router.navigate(['/home']);
    this.router.navigate(['/libros']);
    this.router.navigate(['/admin']);
    this.router.navigate(['/libros-e']);
  }
}
