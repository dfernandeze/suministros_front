import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-articuloslist',
  templateUrl: './articuloslist.component.html',
  styleUrls: ['./articuloslist.component.css']
})
export class ArticuloslistComponent implements OnInit {
  articulos: any[] = [];
  constructor(private service: ArticulosService, private router: Router) { }
  eliminar(id:any):void{
    this.service.deleteArticle(parseInt(id)).subscribe();
    this.router.navigate(['articulos/list']);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Articulo Eliminado correctamente.'
    })
  }

  ngOnInit(): void {
    this.service.getArticles().subscribe(data => {
      this.articulos = data;
      console.log(this.articulos)
    });
  }
}
