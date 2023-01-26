import "./styles.scss";

function Result({ roundedResult, currencieName }) {
  return (
    <div className="result">
      <p className="result-title">resultat : </p>
      <p className="result-convert">
        {roundedResult} {currencieName}
      </p>
    </div>
  );
}

export default Result;
