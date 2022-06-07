import { randomInt } from "../functions/functions";
import "../styles/method.scss";

interface TrivialProps {
  u: number;
  setU: any;
}

const TrivialMethod = (props: TrivialProps) => {

  const handleForm = (e: any) => {
    e.preventDefault();
    let formData: any = new FormData(e.target);
    let d = [];

    for (let data of formData) {
      d.push(data[1]);
    }

    let n = Number(d[0]),
      k = Number(d[1]),
      s = Number(d[2]);

    let randValues = [],
      udzialyStr = "";

    for (let i = 0; i < n - 1; i++) {
      randValues.push(randomInt(0, k - 1));
    }

    for (let val of randValues) {
      udzialyStr += val + "/";
      s -= val;
    }
    
    udzialyStr += s % k;
    props.setU(udzialyStr);
  };

  return (
    <>
      <form className="form" onSubmit={handleForm}>
        <h1 className="header">Metoda trywialna dzielenia sekretu</h1>
        <label>Liczba udziałów "n":</label>
        <input type="text" name="n" placeholder="n" />
        <label>Przedział:</label>
        <input type="text" name="k" placeholder="k" />
        <label>Sekret "s" (mniejszy od k-1):</label>
        <input type="text" name="s" placeholder="s" />
        <button>Oblicz udziały</button>
      </form>
      <div className="results">
        <p>Udziały:</p>
        <p>{props.u}</p>
      </div>
    </>
  );
};

export default TrivialMethod;
