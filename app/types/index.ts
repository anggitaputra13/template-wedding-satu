export interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  attendance?: "hadir" | "tidak_hadir";
}

export interface CoupleInfo {
  name: string;
  fullName: string;
  photo: string;
  role: string;
  parentLabel: string;
  parents: string;
  address: string;
  instagram?: string;
}

export interface EventInfo {
  type: string;
  date: string;
  time: string;
  location: string;
  mapsUrl: string;
}

export interface EventInfo2 {
  type: string;
  date: string;
  time: string;
  location: string;
  mapsUrl: string;
}

export interface WeddingContent {
  groom: CoupleInfo;
  bride: CoupleInfo;
  event: EventInfo;
  event2: EventInfo2;
  targetDate: string;
  quote: {
    sanskrit: string;
    translation: string;
    source: string;
  };
  gallery: {
    images: string[];
    credit: string;
    creditUrl: string;
  };
  footer: {
    branding: string;
    whatsappUrl: string;
  };
}
