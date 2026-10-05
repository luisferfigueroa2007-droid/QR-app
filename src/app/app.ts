import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    tareas:any = [
      {
        id: 1,
        descripcion: "peinar el loro",
        hecha: false,
      },
      {
        id:2,
        descripcion: "estudiar frances",
        hecha: false,
      },
    ]

    tareaNueva = ""

    agregar(){
       this.tareas.unshift(
            {
              descripcion: this.tareaNueva,
              hecha: false
            }
       );

       this.tareaNueva = ""   
    }
     
    cambiarEstado(idAmodificar:any){
      let tarea = this.tareas.find((task:any)=> task.id === idAmodificar)
      tarea.hecha = !tarea.hecha;
    }
  
    eliminarTarea(id:any){
        this.tareas = this.tareas.filter((tar:any)=> tar.id !== id)
    } 
}
