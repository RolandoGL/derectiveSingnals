import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'red'
  private _errors?: ValidationErrors | null;

  @Input() set color( value: string ) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors( value: ValidationErrors | null | undefined ) {
    this._errors = value;
    this.setErrorMessage();
  }


  constructor( private el: ElementRef<HTMLElement>) {
    console.log( el )
    this.htmlElement = el
    this.htmlElement.nativeElement.innerHTML = 'hola mundo'
  }
  ngOnInit(): void {
    this.setStyle()
  }

  public setStyle():void{
    if( !this.htmlElement ) return
    this.htmlElement!.nativeElement.style.color = this._color
  }

  public setErrorMessage():void{
    if( !this.htmlElement ) return
    if( !this._errors ){
      this.htmlElement.nativeElement.innerHTML = 'No hay errores'
      return
    }

    const errors = Object.keys(this._errors);
    console.log(errors)

    if( errors.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'Campo requerido'
      return
    }
    if( errors.includes('minlength')){
      const min = this._errors['minlength']['requiredLength']
      const actual = this._errors['minlength']['actualLength']
      this.htmlElement.nativeElement.innerHTML = `este campo requiere minimo ${min} caracteres, tiene ${ actual }`
      return
    }
    if( errors.includes('email')){
      this.htmlElement.nativeElement.innerHTML = 'formto de email no valido'
      return
    }
  }

}
