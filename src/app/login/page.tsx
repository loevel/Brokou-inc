"use client";

import { useMsal } from "@azure/msal-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { loginRequest } from "@/auth/msal";

export default function LoginPage() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] bg-secondary py-12">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Connexion Admin</CardTitle>
          <CardDescription>
            Connectez-vous avec votre compte Microsoft pour accéder à l'espace d'administration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleLogin} className="w-full">
            Se connecter avec Microsoft
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
