export const mainTypes = [
  "All",
  "Merchants",
  "Apps",
  "Hosts",
  "Non-Profits",
] as const;

export type MainType = (typeof mainTypes)[number];

// Maps display name → JSON type value
export const typeMap: Record<string, string> = {
  Merchants: "merchants",
  Apps: "apps",
  Hosts: "hosts",
  "Non-Profits": "non-profits",
};

export const merchantSubTypes = [
  "3d-printing",
  "adult",
  "appliances-furniture",
  "art",
  "books",
  "cryptocurrency-paraphernalia",
  "domains-hosting-vpns",
  "education",
  "electronics",
  "fashion",
  "food",
  "gambling",
  "gift-cards",
  "health-household",
  "holiday-travel",
  "jewelry",
  "pets",
  "services",
  "software-video-games",
  "sports",
  "tools",
] as const;

export type MerchantSubType = (typeof merchantSubTypes)[number];

// Pretty display names for subtypes
export const subTypeLabels: Record<string, string> = {
  "3d-printing": "3D Printing",
  adult: "Adult",
  "appliances-furniture": "Appliances & Furniture",
  art: "Art",
  books: "Books",
  "cryptocurrency-paraphernalia": "Crypto Paraphernalia",
  "domains-hosting-vpns": "Domains, Hosting & VPNs",
  education: "Education",
  electronics: "Electronics",
  fashion: "Fashion",
  food: "Food & Drink",
  gambling: "Gambling",
  "gift-cards": "Gift Cards",
  "health-household": "Health & Household",
  "holiday-travel": "Holiday & Travel",
  jewelry: "Jewelry",
  pets: "Pets",
  services: "Services",
  "software-video-games": "Software & Video Games",
  sports: "Sports",
  tools: "Tools",
};

export interface Merchant {
  name: string;
  url: string;
  description: string;
  type: string;
  subType?: string;
  twitter?: string;
  github?: string;
  onionUrl?: string;
}
