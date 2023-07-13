import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit 
{
  public usuario : Usuario;
  public toast;

  constructor(private apiService: UsuarioService, private toastCtrl: ToastController) { }

  mostrarUsuario(id:number)
  {
    if (id > 0)
    {
      this.apiService.getUsuario(id).subscribe((data:Usuario[]) => 
      {    
        this.usuario = data[0];
        console.log(this.usuario)
        if (this.usuario==undefined)
          this.presentToast("El usuario con id  " + id + " no existe.");
      
      }   
      )
    }  
    else
      this.presentToast("Falta el id");
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
