import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/producto.model';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent implements OnInit {
  
  loading: boolean = true;
  private _apiService = inject(ApiService);
  private _route = inject(ActivatedRoute);
  public producto?: IProducto;

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data:IProducto)=>{
        this.producto=data;
        this.loading =false;
      });
    })
  }
}
