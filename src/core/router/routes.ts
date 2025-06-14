export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  createAccount: "/create-account",
  editAccount: "/edit-account/:id",
  movements: "/movements/:id",
  creacion: "/nueva-cuenta",
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
