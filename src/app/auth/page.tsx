"use client";

import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export default function AuthPage() {
  const { instance, accounts } = useMsal();
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    if (accounts.length > 0) {
      const account = accounts[0];
      instance
        .acquireTokenSilent({
          scopes: ["User.Read"],
          account: account,
        })
        .then((response) => {
          login(response.accessToken);
          router.push("/admin/dashboard");
        });
    } else {
      // Handle the case where there is no account
      // This might happen if the user navigates to this page directly
      // or if the authentication flow is interrupted.
      router.push("/login");
    }
  }, [accounts, instance, login, router]);

  return <div>Authenticating...</div>;
}