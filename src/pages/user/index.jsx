import React, { useState } from "react";
import { ChangeUserData } from "../../components/user_components/changeuserdata";
import { PanelOptions } from "../../components/user_components/options";
import { OrderHistory } from "../../components/user_components/orderhistory";
import "./user_page.scss";

export const UserPage = () => {
  const [userInfo, setUserInfo] = useState(true);
  return (
    <div className="user-panel-main">
      <PanelOptions setUserInfo={setUserInfo}></PanelOptions>
      <div className="order-change-user">
        {userInfo ? (
          <ChangeUserData></ChangeUserData>
        ) : (
          <OrderHistory></OrderHistory>
        )}
      </div>
    </div>
  );
};
