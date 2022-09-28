import { useEffect, useState } from "react";
//import { toast } from "react-toastify";

//Listagem das medidas disponível
const listMedidas = [
  { id: 1, name: "150x150" },
  { id: 2, name: "200x200" },
  { id: 3, name: "250x250" },
  { id: 4, name: "300x300" },
  { id: 5, name: "350x350" },
  { id: 6, name: "400x400" },
  { id: 7, name: "450x450" },
  { id: 8, name: "500x500" },
  { id: 9, name: "550x550" },
  { id: 10, name: "600x600" },
  { id: 11, name: "650x650" },
  { id: 12, name: "700x700" },
  { id: 13, name: "750x750" },
  { id: 14, name: "800x800" },
  { id: 15, name: "850x850" },
  { id: 16, name: "900x900" },
  { id: 17, name: "950x950" },
  { id: 18, name: "1000x1000" },
];

function QrCode() {
  const [texto, setTexto] = useState("");
  const [link, setLink] = useState("");
  const [tamanho, setTamanho] = useState("150");
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  const rota = `http://api.qrserver.com/v1/create-qr-code/?data=${link}!&size=${tamanho}x${tamanho}&bgcolor=${bgColor}`;

  function handleClick() {
    setQrCode(rota);
    //toast.success("QR-Code Gerado!");
    setLink("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code Generator</h1>
        <div className="input-box">
          <div className="geracao">
            <input
              type="text"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
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
            <select
              defaultValue={tamanho}
              onChange={(e) => setTamanho(e.target.value)}
              className="form-select"
              placeholder="Selecione as medidas"
            >
              <option selected>Selecione as medidas</option>
              {listMedidas.map((item, index) => (
                <option defaultValue={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
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
      </header>
    </div>
  );
}
export default QrCode;
