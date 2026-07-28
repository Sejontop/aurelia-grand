export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "img-1",
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
    alt: "Aurelia Grand suite interior",
    span: "col-span-2 row-span-2",
  },
  {
    id: "img-2",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    alt: "Hotel lobby",
  },
  {
    id: "img-3",
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    alt: "Penthouse terrace",
  },
  {
    id: "img-4",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    alt: "Spa treatment room",
  },
  {
    id: "img-5",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    alt: "Fine dining venue",
    span: "col-span-2",
  },
  {
    id: "img-6",
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop",
    alt: "Hotel exterior at dusk",
  },
];
