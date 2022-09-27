import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function QrCode() {
  const [texto, setTexto] = useState("");
  const [link, setLink] = useState("");
  const [tamanho, setTamanho] = useState(150);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  const rota = `http://api.qrserver.com/v1/create-qr-code/?data=${link}!&size=${tamanho}x${tamanho}&bgcolor=${bgColor}`;
  useEffect(() => {
    setQrCode(rota);
  }, [link, tamanho, bgColor]);

  function handleClick() {
    setLink(texto);
    toast.success("QR-Code Gerado!");
    setTexto("");
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="geracao">
          <input
            type="text"
            value={texto}
            onChange={(e) => {
              setTexto(e.target.value);
            }}
            placeholder="Digite o texto"
          />
          <button className="button" onClick={handleClick}>
            Gerar
          </button>
        </div>
        <div className="extra">
          <h5>Cor de fundo:</h5>
          <input
            type="color"
            onChange={(e) => {
              setBgColor(e.target.value.substring(1));
            }}
          />
          <h5>Dimensão:</h5>
          <input
            type="range"
            min="150"
            max="600"
            value={tamanho}
            onChange={(e) => {
              setTamanho(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" className="img-fluid" />
        <a
          href={qrCode}
          download="QRCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="button">
            Download
          </button>
        </a>
      </div>
    </div>
  );
}
export default QrCode;
