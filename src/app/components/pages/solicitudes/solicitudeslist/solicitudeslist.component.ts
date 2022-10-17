import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-solicitudeslist',
  templateUrl: './solicitudeslist.component.html',
  styleUrls: ['./solicitudeslist.component.css']
})
export class SolicitudeslistComponent implements OnInit {
  //Swal = require('sweetalert2')
  constructor() {


  }
  eliminar(): void {
    Swal.fire({
      title: 'Eliminado!',
      text: 'Has eliminado esta solicitud',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }
  ngOnInit(): void {
  }

}
