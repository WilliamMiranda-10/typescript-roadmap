// REST

function soma(...n1: number[]) {
  let total: number = 0;
  n1.forEach((element) => {
    total += element;
  });

  return total;
}
const valorTotal: number = soma(6, 59, 445, 336, 120, 15, 2255, 699,1442,489,26,3440);

console.log(valorTotal); // 9332



