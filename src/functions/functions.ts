export function randomInt(min: number, max: number): number {
  return min + Math.floor((max - min) * Math.random());
}

export function czy_pierwsza(n: number): boolean {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

export function generatePolynomial(x: number, a: number[], t: number): number {
  let sum: number = 0;
  let i: number = 0;
  for (i = 0; i < t - 1; i++) {
    sum += a[i] * Math.pow(x, i + 1);
  }
  return sum;
}

export function mod(k: number, n: number): number {
  if ((k %= n) < 0) {
    if (k < -1) {
      console.log(Math.abs(k) % n);
      return Math.abs(k) % n;
    } else return k + n;
  } else return k % n;
}

export function modInverse(a: number, m: number): any {
  a = a % m;
  for (let x = 1; x < m; x++) if ((a * x) % m === 1) return x;
}
