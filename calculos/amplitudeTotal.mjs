
  //nessa função que criei eu declaro duas variaveis para armazenar o maior e o menor valor da lista, e depois eu subtrai o maior pelo menor, retornando a amplitude total
  export function amplitudeTotal(valores) {
   const maior = Math.max(...valores);
   const menor = Math.min(...valores);

   const amplitudeTotal = maior - menor;

   return amplitudeTotal

  }

