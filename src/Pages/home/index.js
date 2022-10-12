import { useState } from "react";
import { toast } from "react-toastify";
import Logo from "../../assets/img/QRCode.gif";
//Listagem das medidas disponível
import { listMedidas } from "../../utils/medidas";

function QrCode() {
  const [link, setLink] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  const rota = `http://api.qrserver.com/v1/create-qr-code/?data=${link}!&size=${tamanho}&bgcolor=${bgColor}`;

  function handleClick() {
    setQrCode(rota);
    toast.success("QR-Code Gerado!");
    setLink("");
    setTamanho("");
  }

  return (
    <>
      <h1 className="visually-hidden">Heroes examples</h1>

      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={Logo}
          alt=""
          width="250"
          height="250"
        />

        <h1 className="display-5 fw-bold">QR Code Generator</h1>
        <div className="col-lg-6 mx-auto">
          <input
            className="form-control mb-3"
            type="text"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            placeholder="Insira o site ou texto aqui"
          />
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div className="container text-center">
              <div className="row">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center col">
                  <h5>Cor de fundo:</h5>
                  <input
                    type="color"
                    className="form-control form-control-color form-control-sm mb-5 tamanhoCor"
                    onChange={(e) => {
                      setBgColor(e.target.value.substring(1));
                    }}
                  />
                </div>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center col">
                  <h5>Dimensão:</h5>
                  <select
                    defaultValue={tamanho}
                    onChange={(e) => setTamanho(e.target.value)}
                    className="form-select form-select-sm mb-5"
                    placeholder="Selecione as medidas"
                  >
                    <option>Selecione as medidas</option>
                    {listMedidas.map((item) => (
                      <option value={item.nome} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <a href="#qrcode">
            <button
              type="button"
              className="btn btn-primary px-4 gap-3 col mb-4"
              onClick={handleClick}
            >
              Gerar
            </button>
          </a>
          <p className="lead mb-4">
            1: Coloque um link ou texto.
            <br />
            2: Escolha uma cor e dimensão.
            <br />
            3: clique em "GERAR"
            <br />
            (QR Code será criado automaticamente)
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
            <img
              src={qrCode}
              alt=""
              className="img-fluid d-block mx-auto mb-1"
              id="qrcode"
            />
          </div>
          {qrCode && (
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a
                href={qrCode}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-success">
                  Download
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default QrCode;
