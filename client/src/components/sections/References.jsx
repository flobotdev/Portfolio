import referencedata from "../../data/referencedata";
import "./References.css"

function ReferencesCard({ refdata }) {
  return (
    <div className="ref-card">
        <p>"{refdata.ref}"</p>
        <h4 className="ref-name">{refdata.name}</h4>
        <h4 className="ref-title">{refdata.title}</h4>
    </div>
  );
}

function References() {
  return (
    <section id="references">
      <h2>References</h2>
      {referencedata.map((refdata, index) => (
        <ReferencesCard key={index} refdata={refdata} />
      ))}
    </section>
  );
}


export default References;
