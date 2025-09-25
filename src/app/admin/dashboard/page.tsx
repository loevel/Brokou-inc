
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/data";
import { getTotalJobOffers } from "@/lib/job-offers.service";
import { BriefcaseBusiness, FileText, Users } from "lucide-react";

export default async function DashboardPage() {
  const totalServices = services.length;
  const totalJobOffers = await getTotalJobOffers();
  const totalVisitors = 1253; // Mock data

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Tableau de bord</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Services Gérés
            </CardTitle>
            <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalServices}</div>
            <p className="text-xs text-muted-foreground">
              Nombre total de services proposés
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offres d'Emploi</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalJobOffers}</div>
            <p className="text-xs text-muted-foreground">
              Nombre d'offres d'emploi actives
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visiteurs (30j)</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVisitors.toLocaleString('fr-FR')}</div>
            <p className="text-xs text-muted-foreground">
              +5.2% par rapport au mois dernier
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
            <CardHeader>
                <CardTitle>Bienvenue, Admin !</CardTitle>
                <CardDescription>Utilisez le menu de navigation pour gérer le contenu du site.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>C'est ici que vous pouvez ajouter, modifier ou supprimer des services et des offres d'emploi. Toute modification sera visible publiquement sur le site.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
