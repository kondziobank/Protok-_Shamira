import { randomInt, czy_pierwsza, generatePolynomial } from "../functions/functions";
import "../styles/method.scss";

interface ShamirProps {
  uS: number;
  pS: number;
  sS: number;
  setUS: any;
  setPS: any;
  setSS: any;
}

const ShamirMethod = (props: ShamirProps) => {

  const handleShamir = (e: any) => {
    e.preventDefault();
    let formData: any = new FormData(e.target);
    let d = [];
    for (let data of formData) {
      d.push(data[1]);
    }

    let n = Number(d[0]),
      t = Number(d[1]),
      a0 = Number(d[2]),
      s = Number(d[3]);
    
    props.setSS(s);
    console.log(n, t, a0, s);

    let aNums = [],
      p,
      udz = [],
      udzStr = "";

    while (true) {
      p = randomInt(s > n ? s : n, (s > n ? n : s) + 20);
      if (czy_pierwsza(p)) break;
    }
    props.setPS(p);

    for (let i = 0; i < t - 1; i++) {
      aNums.push(randomInt(1, n * 5));
    }

    for (let i = 0; i < n; i++) {
      udz.push((s + generatePolynomial(i + 1, aNums, t)) % p);
      udzStr += i + 1 + "," + udz[i] + "/";
    }
    props.setUS(udzStr);
  };

  return (
    <>
      <form className="form" onSubmit={handleShamir}>
        <h1 className="header">Schemat Shamira</h1>
        <label>Liczba udziałów "n":</label>
        <input type="text" name="n" placeholder="n" />
        <label>Stopień wielomianu (będzie t-1):</label>
        <input type="text" name="k" placeholder="t" />
        <label>Wyraz wolny wielomianu "a0":</label>
        <input type="text" name="a0" placeholder="a0" />
        <label>Sekret: </label>
        <input type="text" name="s" placeholder="s" />
        <button>Oblicz udziały</button>
      </form>
      <div className="results">
        <p>Udziały:</p>
        <p>{props.uS}</p>

        <p>p:</p>
        <p>{props.pS}</p>
      </div>
    </>
  );
};

export default ShamirMethod;
