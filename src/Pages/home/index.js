import { useState } from "react";

function QrCode() {
  const [link, setLink] = useState("");
  const [response, setResponse] = useState("");

  function handleAPI() {
    setResponse(
      `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${link}`
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code</h1>
        <div>
          <label>Link aqui</label>
          <input value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <button onClick={handleAPI}>Gerar qrcode</button>

        {response && <img src={response} />}
        {response && (
          <button>
            <a
              href={response}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Clique para baixar
            </a>
          </button>
        )}
      </header>
    </div>
  );
}
export default QrCode;
