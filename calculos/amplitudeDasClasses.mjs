
import { amplitudeTotal } from './amplitudeTotal.mjs';
import { numClassesCalculo } from './numeroDeClasses.mjs';

  export function amplitudeDasClasses(valores){
    const at = amplitudeTotal(valores);
    const k = numClassesCalculo(valores);

    const amplitudeClasses = at / k;

    const resultado = amplitudeClasses;

    console.log(" ");
    return  resultado;
  }



