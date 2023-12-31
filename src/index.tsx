import "./index.css";
import Routes from "./routes";
import ReactDOM from "react-dom/client";
import { API } from "./utils/api";

API();

const element = document.getElementById("root")!;
const root = ReactDOM.createRoot(element);

root.render(<Routes />);
