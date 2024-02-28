import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{
  listaProductos: IProducto[]=[];
  private _apiService =inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:IProducto[])=>{
      this.listaProductos = data;
      console.log(data);
    });
  }

  navigate(id:number): void{
    this._router.navigate(['/productos/',id])
  }

}
