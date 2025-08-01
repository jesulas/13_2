import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "@/core/router";
import {
  LoginPage,
  AccountListPage,
  AccountPage,
  MovementListPage,
  TransferPage,
  CreacionCuentaPage
} from "@/pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />} />
        <Route path={appRoutes.accountList} element={<AccountListPage />} />
        <Route path={appRoutes.createAccount} element={<AccountPage />} />
        <Route path={appRoutes.editAccount} element={<AccountPage />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.creacion} element={<CreacionCuentaPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
