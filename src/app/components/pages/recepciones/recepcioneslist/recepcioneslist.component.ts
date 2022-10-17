import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-recepcioneslist',
  templateUrl: './recepcioneslist.component.html',
  styleUrls: ['./recepcioneslist.component.css']
})
export class RecepcioneslistComponent implements OnInit {

  recepciones:any[] = [];
  constructor() { }
  ngOnInit(): void {
    async function getRecepciones() {
      const response = await fetch('http://localhost:3000/articulo')
    }

      getRecepciones()
        //.then(response => response.json())
        .then(data => {
          console.log(data)
        });
  }

}
