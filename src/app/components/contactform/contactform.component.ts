import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.sass']
})
export class ContactformComponent {
  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    const form = document.getElementById('myFormulario') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
      //salvar datos
      event.preventDefault();
      const formData = new FormData(form);
      const email = formData.get('email');
      const text = formData.get('textarea');

      console.log(email,text)
      //------------------------
      
      // URL de la API
      const apiUrl = "...";
      
      // cuerpo de la solicitud
      const body = {
        email: email,
        text: text,
      };

      //enviar solicitud
      this.http.post(apiUrl, body).subscribe(
        data => {
          console.log(data);//datos enviados
        },
        error => {
          console.log(error);
          if (error.status == 200) {
            alert('Enviado');
          }
        }
      )
    });

  }
}
