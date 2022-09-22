import { useState } from "react";

function QrCode() {
  const [link, setLink] = useState("");
  const [response, setResponse] = useState("");
  const [medidas, setMedidas] = useState("");

  const list = [
    { id: 1, name: "150x150" },
    { id: 2, name: "200x200" },
    { id: 3, name: "250x250" },
    { id: 4, name: "300x300" },
  ];
  console.log(medidas);
  function handleAPI() {
    setResponse(
      `https://chart.googleapis.com/chart?chs=${medidas}&cht=qr&chl=${link}`
    );
    setLink("");
    setMedidas("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-1">QR Code</h1>
        <div>
          <label>Seu link</label>
          <input
            className="form-control"
            id="formGroupExampleInput"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://www.exemplo.com"
          />
        </div>

        <div>
          <label>Medidas</label>
          <select
            defaultValue={medidas}
            onChange={(e) => setMedidas(e.target.value)}
            className="form-select"
            placeholder="Selecione as medidas"
          >
            <option selected>Selecione as medidas</option>
            {list.map((item, index) => (
              <option defaultValue={item.id} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary gerar" onClick={handleAPI}>
          Gerar QRCode
        </button>

        {response && (
          <div className="card">
            <img src={response} />
            <div className="card-body">
              <a
                href={response}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn btn-primary baixar"
              >
                Clique para baixar
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
export default QrCode;
