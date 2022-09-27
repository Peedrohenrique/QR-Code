import "./App.css";
import QrCode from "./Pages/home/index";

//Pop-up de Alerta
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} transition={Slide} />
      <QrCode />
    </>
  );
}

export default App;
