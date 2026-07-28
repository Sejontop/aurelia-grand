export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Isabelle Marchand",
    location: "Paris, France",
    quote:
      "From the moment we arrived, every detail felt considered. The Penthouse terrace at sunset is a memory I will carry for years.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Julian Okafor",
    location: "London, UK",
    quote:
      "The spa alone is worth the trip. But it's the staff — quietly attentive, never intrusive — that made it unforgettable.",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Sofia Almeida",
    location: "Lisbon, Portugal",
    quote:
      "Lumière's tasting menu rivals anything I've had in a Michelin-starred city. Aurelia Grand simply understands hospitality.",
    rating: 5,
  },
];
