import React, { useState } from "react";
import { AddAdress } from "./addadress";
import { ChangePhone } from "./changephonenumber";
import "./change_user_data.scss";

import { ChangePwd } from "./pwdchange";

export const ChangeUserData = () => {
  return (
    <div className="change-user-data-main">
      <ChangePwd/>
      <ChangePhone/>
      <AddAdress/>
      {/* <RemoveAdress/> */}
    </div>
  );
};
