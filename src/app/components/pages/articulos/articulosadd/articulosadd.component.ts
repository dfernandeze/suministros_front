import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-articulosadd',
  templateUrl: './articulosadd.component.html',
  styleUrls: ['./articulosadd.component.css']
})
export class ArticulosaddComponent implements OnInit {

  constructor(private service: ArticulosService, private router: Router) { }

  ngOnInit(): void {
  }
 data:any = {}
 art = '';
 categoria = 2;

  addArticles() {
    this.data = {
        art: this.art,
        cat: this.categoria
    }
    console.log(this.data)
     this.service.postArticle(this.data)
      .subscribe(response => {
       // alert('REGISTRO INSERTADO: '+ response.id_articulo);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Articulo Insertado correctamente.'
        })
        this.router.navigate(['articulos/list']);

        //redirectTo: './articulos/list'
      }) 
  }

}
