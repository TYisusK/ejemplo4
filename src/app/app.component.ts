import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo4';

  //propiedades

  listaTareas: string[];
  tarea = new FormControl;
  constructor(){
    this.listaTareas = [];
    let datos = localStorage.getItem('tareas');
    if(datos != null){
      let arreglo = JSON.parse(datos);
      if(arreglo != null){
        for (let tarea of arreglo){
          this.listaTareas.push(tarea)
        }
      }
    }
  }

  agregarTarea(){
    this.listaTareas.push(this.tarea.value);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    this.tarea.setValue('');


  }

   borrarTarea(posicion:number){
    this.listaTareas.splice(posicion, 1);
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
   }

  borrarTareas(){
    localStorage.clear();
    this.listaTareas = [];
  }

}
