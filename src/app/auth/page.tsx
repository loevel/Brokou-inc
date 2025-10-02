
"use client";

import { useEffect } from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { loginRequest } from "@/auth/msal";
import { Loader2 } from "lucide-react";

export default function AuthPage() {
  const { instance, accounts } = useMsal();
  const router = useRouter();
  const { login } = useAuth();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated && accounts.length > 0) {
      const account = accounts[0];
      instance
        .acquireTokenSilent({
          scopes: loginRequest.scopes,
          account: account,
        })
        .then((response) => {
          login(response.accessToken);
          // Redirect to the originally intended page or dashboard
          const redirectUrl = sessionStorage.getItem("postLoginRedirect") || "/admin/dashboard";
          sessionStorage.removeItem("postLoginRedirect");
          router.replace(redirectUrl);
        }).catch((error) => {
            console.error("Silent token acquisition failed:", error);
            // Fallback to interactive method if silent fails
            instance.acquireTokenPopup(loginRequest).then(response => {
                login(response.accessToken);
                const redirectUrl = sessionStorage.getItem("postLoginRedirect") || "/admin/dashboard";
                sessionStorage.removeItem("postLoginRedirect");
                router.replace(redirectUrl);
            }).catch(popupError => {
                console.error("Popup token acquisition failed:", popupError);
                router.replace("/login");
            })
        });
    } else if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [accounts, instance, login, router, isAuthenticated]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p>Authentification en cours...</p>
        </div>
    </div>
  );
}
