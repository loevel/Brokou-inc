
import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "Y2e2aa3f2-6f9f-4415-9c04-ae1dc4d3ccfd",
    authority: "https://login.microsoftonline.com/88a38e06-ecfb-451b-b38f-ab5442dae19c",
    redirectUri: "/auth",
  },
  cache: {
    cacheLocation: "localStorage", 
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
    scopes: ["User.Read"]
};

export const msalInstance = new PublicClientApplication(msalConfig);
