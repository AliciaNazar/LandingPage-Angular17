import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'productos', component:ProductosComponent},
    {path:'productos/:id', component:DetallesProductoComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'**', redirectTo:'',pathMatch:'full'} //si se pone cualquier otra cosa, redirige al home
];
