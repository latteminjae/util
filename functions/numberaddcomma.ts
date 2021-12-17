// (1000: number): 1,000
export function numberAddComma(number: number): string {
  return `${number}`
    .split("")
    .map((v, i, arr) =>
      i === arr.length - 1 ? v : !((i - arr.length + 1) % 3) ? v + "," : v
    )
    .join("");
}
