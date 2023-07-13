import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario } from '../models/usuario';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit 
{
  public toast: any;

  constructor(private apiService: UsuarioService, private toastCtrl: ToastController) { }


  insertarUsuario(nombre:HTMLInputElement, apellido1: HTMLInputElement, apellido2:HTMLInputElement)
  {
    if (nombre.value != "" && apellido1.value !="" && apellido2.value!="")
    {
      this.apiService.postUsuario(new Usuario(0,nombre.value,apellido1.value, apellido2.value))
      .subscribe((data:Number) =>
      {
        nombre.value = "";
        apellido1.value = "";
        apellido2.value ="";
        this.presentToast("Usuario Insertado Correctamente con id:" + data);
        console.log(data);
      })
    }
    else
    {
      this.presentToast("Falta algún campo para poder realizar la inserción");
    }

  } 

  presentToast(mensaje:string) 
  {
    this.toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'top'
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }

  ngOnInit() {
  }

}
