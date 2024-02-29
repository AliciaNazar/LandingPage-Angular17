import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgClass],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{
  
  formularioContacto!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formularioContacto = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  enviar(event: Event){
    event.preventDefault();
    console.log(this.formularioContacto.value);
  }
  ngOnInit(): void {
    
  }

  hasErrors(field: string, typeError: string){
    return this.formularioContacto.get(field)?.hasError(typeError)&& this.formularioContacto.get(field)?.touched;
  }
}
