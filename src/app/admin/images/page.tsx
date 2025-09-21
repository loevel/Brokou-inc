"use client";

import { useState } from "react";
import initialImagesData from "@/lib/placeholder-images.json";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

export default function GestionImagesPage() {
  const [images, setImages] = useState<ImagePlaceholder[]>(initialImagesData.placeholderImages);

  const handleImageAdded = (newImage: ImagePlaceholder) => {
    setImages((prevImages) => [newImage, ...prevImages]);
  };
  
  const handleImageUpdated = (updatedImage: ImagePlaceholder) => {
    setImages((prevImages) => 
        prevImages.map(image => image.id === updatedImage.id ? updatedImage : image)
    );
  };

  const handleImageDeleted = (imageId: string) => {
    setImages((prevImages) => prevImages.filter(image => image.id !== imageId));
  }

  return (
    <div>
      <DataTable 
        columns={columns} 
        data={images} 
        onImageAdded={handleImageAdded}
        onImageUpdated={handleImageUpdated}
        onImageDeleted={handleImageDeleted}
      />
    </div>
  );
}
