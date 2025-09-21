"use client";

import { useState } from "react";
import initialImagesData from "@/lib/placeholder-images.json";
import clientImagesData from "@/lib/client-images.json";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GestionImagesPage() {
  // All non-client images
  const [images, setImages] = useState<ImagePlaceholder[]>(initialImagesData.placeholderImages);
  
  // Client images from a separate source
  const [clientImages, setClientImages] = useState<ImagePlaceholder[]>(clientImagesData.clientImages.map(c => ({
    id: c.id,
    description: c.alt,
    imageUrl: c.src,
    imageHint: 'client logo'
  })));

  const handleImageAdded = (newImage: ImagePlaceholder) => {
    // This is a simplified logic. A real app would need to know which category to add to.
    // For now, we add to the main images list.
    setImages((prevImages) => [newImage, ...prevImages]);
  };
  
  const handleImageUpdated = (updatedImage: ImagePlaceholder) => {
    // Update in main list
    setImages((prevImages) => 
        prevImages.map(image => image.id === updatedImage.id ? updatedImage : image)
    );
    // Update in client list
    setClientImages((prevImages) => 
        prevImages.map(image => image.id === updatedImage.id ? updatedImage : image)
    );
  };

  const handleImageDeleted = (imageId: string) => {
    setImages((prevImages) => prevImages.filter(image => image.id !== imageId));
    setClientImages((prevImages) => prevImages.filter(image => image.id !== imageId));
  }
  
  const partners = images.filter(img => img.id.startsWith('partner-'));
  const tools = images.filter(img => img.id.startsWith('tool-'));

  return (
    <div>
        <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Gestion des Images</h1>
            <p className="text-muted-foreground">Ajoutez, modifiez ou supprimez les images des carrousels (partenaires, clients, outils).</p>
        </div>
        <Tabs defaultValue="partners">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="partners">Partenaires</TabsTrigger>
                <TabsTrigger value="clients">Clients</TabsTrigger>
                <TabsTrigger value="tools">Outils</TabsTrigger>
            </TabsList>
            <TabsContent value="partners">
                 <Card>
                    <CardHeader>
                        <CardTitle>Images des Partenaires</CardTitle>
                        <CardDescription>Gérez les logos des partenaires affichés sur la page d'accueil.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable 
                            columns={columns} 
                            data={partners} 
                            onImageAdded={handleImageAdded}
                            onImageUpdated={handleImageUpdated}
                            onImageDeleted={handleImageDeleted}
                        />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="clients">
                <Card>
                    <CardHeader>
                        <CardTitle>Images des Clients</CardTitle>
                        <CardDescription>Gérez les logos des clients qui vous font confiance.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable 
                            columns={columns} 
                            data={clientImages} 
                            onImageAdded={handleImageAdded}
                            onImageUpdated={handleImageUpdated}
                            onImageDeleted={handleImageDeleted}
                        />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="tools">
                 <Card>
                    <CardHeader>
                        <CardTitle>Images des Outils</CardTitle>
                        <CardDescription>Gérez les icônes des outils et technologies que vous utilisez.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <DataTable 
                            columns={columns} 
                            data={tools} 
                            onImageAdded={handleImageAdded}
                            onImageUpdated={handleImageUpdated}
                            onImageDeleted={handleImageDeleted}
                        />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  );
}
