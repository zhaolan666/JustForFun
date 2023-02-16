export function multi(a:number){
  return function (b:number) {
    return a + b as number;
  }
}
