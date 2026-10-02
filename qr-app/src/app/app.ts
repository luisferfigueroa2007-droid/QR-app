import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 usuario = "pepito"
 password = "123"
 mensajeError = ""

   ingresar(){
     if(this.usuario === "luis" && this.password === "123"){
      alert("Bienvenido !!!");
      window.location.href = "https://youtube.com";
     }else{
       this.mensajeError = "Ha ocurrido un error"
     }
   }


}
