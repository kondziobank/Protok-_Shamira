import "../styles/secret.scss";

interface SecretProps {
  sekret: number;
  setSekret: any;
}

const TrivialSecret = (props: SecretProps) => {

  const handleSecret = (e: any) => {
    e.preventDefault();
    let formData: any = new FormData(e.target);
    let d = [];
    
    for (let data of formData) {
      d.push(data[1]);
    }

    let udz = d[0].split("/"),
      k = Number(d[1]),
      s = 0;

    for (let ud of udz) {
      s += Number(ud);
    }
    props.setSekret(s % k);
  };

  return (
    <>
      <form className="form2" onSubmit={handleSecret}>
        <input type="text" name="udzialy" placeholder="udziały" />
        <input type="text" name="k" placeholder="k" />
        <button>Oblicz sekret</button>
      </form>
      <div className="results">
        <p>Sekret:</p>
        <p>{props.sekret}</p>
      </div>
    </>
  );
};

export default TrivialSecret;
