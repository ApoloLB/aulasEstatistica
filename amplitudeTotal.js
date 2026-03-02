//para realizar o calculo precrisei declarar os array como let para poder ser alterado

const qntLivros = [
    2520, 3200, 1900, 4100, 4600, 3400, 3680, 3720, 3600, 3300,
    2400, 1720, 3400, 3125, 2800, 3200, 2700, 2750, 1600, 2800,
    2250, 2900, 3300, 2450, 4200, 3800, 3220, 2950, 2900, 2900,
    3400, 2100, 3550, 3000, 2480, 2500, 2400, 4450, 2900, 3200,
    3725, 3800, 3600, 3120, 2900, 3700, 2850, 2500, 3400, 2480,
    2920, 2120, 3110, 3550, 2300, 3200, 2720, 3150, 2500, 3250,
    3520, 3000, 2950, 2700, 2900, 2400, 3100, 4100, 3000, 2900,
    3150, 2000, 3450, 3200, 3240, 3750, 2800, 2720, 3120, 3200,
    3650, 3450, 3150, 2700, 2480, 2120, 3155, 3100, 3200, 2800,
    3300, 3900, 2450, 2150, 3150, 2500, 3200, 2500, 2700, 2450
  ];

  const idades = [
    28, 29, 24, 28, 30, 32, 39, 25, 18, 36,
    34, 42, 33, 27, 32, 31, 36, 26, 19, 20,
    27, 43, 31, 21, 30, 35, 38, 29, 21, 34,
    30, 33, 23, 31, 33, 28, 39, 38, 22, 37
  ];

  //nessa função que criei eu declaro duas variaveis para armazenar o maior e o menor valor da lista, e depois eu subtrai o maior pelo menor, retornando a amplitude total
  function amplitudeTotal(valores) {
   const maior = Math.max(...valores);
   const menor = Math.min(...valores);

   const amplitudeTotal = maior - menor;

   return amplitudeTotal

  }

console.log("Amplitude total da quantidade de Livros: ",amplitudeTotal(qntLivros));
console.log("Amplitude total das idades: ",amplitudeTotal(idades));