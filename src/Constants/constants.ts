import Logo from "../Images/logo.png";
export let BASE_URL: string;
switch (process.env.NODE_ENV) {
  case "production":
    BASE_URL = "https://trainica.herokuapp.com/api";
    break;
  case "development":
    BASE_URL = "http://localhost:8080/api";
  // default:
}
export const LS_LOGIN_TOKEN = "access_token";
export const LOGO = Logo;
export const loginToken = localStorage.getItem(LS_LOGIN_TOKEN);
export const brokenImageReplacement =
  "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";

export const avatarImage = `https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1642419394~hmac=800edd60d0c6c16718006990981551ae`;

export const iconAvatar = `https://cdn-icons.flaticon.com/png/128/560/premium/560277.png?token=exp=1642419394~hmac=d14e3c9db27eee1871bbd61877747228`;
