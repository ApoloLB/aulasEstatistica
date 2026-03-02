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
  ]; //são 100 livros

  const idades = [
    28, 29, 24, 28, 30, 32, 39, 25, 18, 36,
    34, 42, 33, 27, 32, 31, 36, 26, 19, 20,
    27, 43, 31, 21, 30, 35, 38, 29, 21, 34,
    30, 33, 23, 31, 33, 28, 39, 38, 22, 37
  ];//são 40 idades

  function numClasses(valores) {

    let numDeClasses = 10;
    let salto = valores.length / numDeClasses;

    const ordenado = valores.sort((a, b) => a - b); //utilizei o sort dessa forma para que ordene os valores do menor para o maior
        for(let i = 0; i < ordenado.length; i+= salto) {
            let classe = ordenado.slice(i, i + salto);

            const limiteSuperior = classe[classe.length - 1]; //criei esses dois limites para não ficar  um array completo tipo [1, 2, 3, 4] e sim [1 - 4]
            const limiteInferior = classe[0];
            const nmClasse = (i / salto) + 1; // precisei dividir por salto para dar 1

            console.log('Classe: ', nmClasse, 'Limite Inferior: ', limiteInferior, 'Limite Superior: ', limiteSuperior);
        }
  }

  
  numClasses(idades);
  console.log(" ");
  numClasses(qntLivros);

