import { WeddingContent } from "../types";
import { media } from "./media";

export const weddingContent: WeddingContent = {
  groom: {
    name: "Satria",
    fullName: "I Nyoman Satria Wiradinata",
    photo: media.groom,
    role: "PUTRA KETIGA",
    parentLabel: "PUTRA KETIGA DARI",
    parents: "Desak Made Suniti , B.A",
    address: "Perumahan Sabda Alam no 8A Ubung Kaja , Denpasar Utara",
    instagram: "heppasatria",
  },
  bride: {
    name: "Heppa",
    fullName: "Kadek Dwi Heppa Yani",
    photo: media.bride,
    role: "PUTRI KEDUA",
    parentLabel: "PUTRI KEDUA DARI PASANGAN",
    parents: "Nyoman Tastra dan Ketut Ayu Yasmika",
    address: "Jl. Gunung Lebah 1 GG VI no 20 Br. Buana Kubu ,Denpasar Barat",
    instagram: "heppasatria",
  },
  event: {
    type: "Resepsi Pernikahan",
    date: "Jumat, 28 Agustus 2026",
    time: "08.00 - 12.00 WITA",
    location: "Taman Prakerti Bhuana ,Beng , Gianyar",
    mapsUrl: "https://maps.app.goo.gl/215ktRRYY47Dtu3z8",
  },
  event2: {
    type: "Upacara Pernikahan",
    date: "Senin, 17 Agustus 2026",
    time: "11.00 WITA - Selesai",
    location: "Jalan, Tangguwisia, Seririt, Buleleng, Bali. (Gang Depan Indomaret)",
    mapsUrl: "https://maps.app.goo.gl/rA9mShVhJQG7Vn4i7",
  },
  targetDate: "2026-08-17T11:00:00+08:00",
  quote: {
    sanskrit:
      "Ihaiva stam mā vi yaustam,\nVisvām āyur vyasnutam.\nKrindantau putrair naptrbhih,\nModamānau sve grhe.",
    translation:
      "Kugenggam tanganmu untuk kebahagiaan kita, agar engkau mencapai usia tua bersamaku sebagai suamimu. Para dewa — Bhaga, Aryaman, Savitar, dan Purandhi — memberikanmu kepadaku untuk menjadi ibu rumah tangga.",
    source: "Rgveda : X.85.42",
  },
  gallery: {
    images: [
      "/images/gallery-1.svg",
      "/images/gallery-2.svg",
      "/images/gallery-3.svg",
      "/images/gallery-4.svg",
      "/images/gallery-5.svg",
      "/images/gallery-6.svg",
    ],
    credit: "@satyaphotographybali",
    creditUrl: "https://www.instagram.com/satyaphotographybali/",
  },
  footer: {
    branding: "#",
    whatsappUrl: "#",
  },
};
