export const getNoFibonacciNumber = (x: number): number => {
  if (x <= 0) {
    // Se x for menor ou igual a zero, retorna um erro antes de rodar o restante
      throw new Error("X não pode ser igual a zero.");
  }
  // Gera os números
  const fibonacci: number[] = [0, 1];
  while (fibonacci[fibonacci.length - 1] < x * 10) {
      const next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(next);
  }
  let nonFibonacciCount = 0;
  let currentNumber = 1;

  while (true) {
      if (!fibonacci.includes(currentNumber)) {
          nonFibonacciCount++;
          if (nonFibonacciCount === x) {
              return currentNumber;
          }
      }
      currentNumber++;
  }
};