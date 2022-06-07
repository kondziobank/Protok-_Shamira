import { mod, modInverse } from "../functions/functions";
import "../styles/secret.scss";

interface ShamirSecretProps {
  sekretS: number;
  sS: number;
  setSekretS: any;
}

const ShamirSecret = (props: ShamirSecretProps) => {
  const handleShamirSecret = (e: any) => {
    e.preventDefault();
    let formData: any = new FormData(e.target);
    let d = [];
    for (let data of formData) {
      d.push(data[1]);
    }

    let udz = d[0],
      p = Number(d[1]),
      t = d[2];
    udz = udz.split("/");
    let udz1 = [];
    for (let i = 0; i < udz.length; i++) {
      let u = udz[i].split(",");
      if (u[1]) udz1.push(Number(u[1]));
    }
    console.log(udz1);
    let accum = 0;
    for (let i = 0; i < t; i++) {
      let num = 1,
        den = 1;
      for (let j = 0; j < t; j++) {
        den = 1;
        if (i !== j) {
          num = mod(num * (-j - 1), p);
          den = den * mod(i - j, p);
        }
      }
      let value = udz1[i];
      let tmp = (value * num * modInverse(den, p)) % p;
      accum = (accum + p + tmp) % p;
      console.log(tmp, p, num);
    }
    props.setSekretS(accum);
  };

  return (
    <>
      <form className="form2" onSubmit={handleShamirSecret}>
        <label>Tu wklejamy udziały:</label>
        <input type="text" name="udzialy" placeholder="udziały" />
        <label>Liczba pierwsza wygenerowana przez algorytm rozdzielający:</label>
        <input type="text" name="p" placeholder="p" />
        <label>Stopień wielomianu z algorytmu rozdzielającego:</label>
        <input type="text" name="t" placeholder="t" />
        <button>Oblicz sekret</button>
      </form>
      <div className="results">
        <p>Sekret:</p>
        <p>{props.sS}</p>
      </div>
    </>
  );
};

export default ShamirSecret;
