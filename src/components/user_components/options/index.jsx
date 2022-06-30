import { LogOut } from "./logout";
import "./options.scss";


export const PanelOptions = ({ setUserInfo }) => {
  return (
    <div className="main-panel-opt">
      <div className="panel-opt">
        <h3>Painel de Conta</h3>
        <div className="options">
          <div onClick={() => setUserInfo(true)}>User Info</div>
          <div onClick={() => setUserInfo(false)}>Order History</div>
        </div>
      </div>
      <LogOut></LogOut>
    </div>
  );
};
