export interface Room {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export const rooms: Room[] = [
  {
    id: "grand-deluxe",
    name: "Grand Deluxe Room",
    category: "Signature",
    description:
      "48 sqm of understated elegance with skyline views, a marble bath, and a private reading nook.",
    price: "$620",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    category: "Suite",
    description:
      "A separate living room, walk-in dressing area, and floor-to-ceiling views of the city skyline.",
    price: "$980",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "royal-penthouse",
    name: "Royal Penthouse",
    category: "Penthouse",
    description:
      "Our crowning residence — a private terrace, plunge pool, and dedicated butler service.",
    price: "$2,450",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "garden-terrace",
    name: "Garden Terrace Room",
    category: "Signature",
    description:
      "A ground-floor sanctuary opening onto private gardens, ideal for quiet mornings.",
    price: "$540",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    category: "Suite",
    description:
      "Two bedrooms, a private study, and a dining room built for entertaining in complete privacy.",
    price: "$1,750",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop",
  },
];
