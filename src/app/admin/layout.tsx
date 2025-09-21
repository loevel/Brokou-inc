"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Briefcase, LayoutDashboard, BriefcaseBusiness, FileText, LogOut, Loader2, ImageIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const AdminNavLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: React.ElementType }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <SidebarMenuItem>
            <Link href={href} passHref>
                <SidebarMenuButton asChild isActive={isActive}>
                    <span>
                        <Icon className="h-4 w-4" />
                        <span>{children}</span>
                    </span>
                </SidebarMenuButton>
            </Link>
        </SidebarMenuItem>
    );
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 font-bold text-lg p-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span>Admin Panel</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <AdminNavLink href="/admin/dashboard" icon={LayoutDashboard}>Tableau de bord</AdminNavLink>
            <AdminNavLink href="/admin/services" icon={BriefcaseBusiness}>Gestion Services</AdminNavLink>
            <AdminNavLink href="/admin/offres" icon={FileText}>Gestion Offres</AdminNavLink>
            <AdminNavLink href="/admin/images" icon={ImageIcon}>Gestion Images</AdminNavLink>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => { logout(); router.push('/login'); }}>
                <LogOut className="h-4 w-4" />
                <span>Déconnexion</span>
            </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="p-4 md:p-6">
            <div className="md:hidden mb-4">
                <SidebarTrigger />
            </div>
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
