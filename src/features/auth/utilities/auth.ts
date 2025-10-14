import { appRoutes } from "@/routes";
import { userStorage } from "../storage";

export function logoutHelper() {
  userStorage.remove();
  window.location.href = appRoutes.auth.login;
}
