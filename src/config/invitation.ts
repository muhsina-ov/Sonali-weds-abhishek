/**
 * Single source of truth for Sonali & Abhishek's wedding invitation.
 */

export const invitation = {
  couple: {
    bride: "Sonali",
    brideShort: "Sonali",
    brideParents: "Mrs. Neelam Ranote & Mr. Sucha Singh Ranote",
    brideAddress: "Vill. Kuranwala, P.O. Mandhala, Tehsil Baddi, Distt. Solan (H.P.)",
    groom: "Abhishek",
    groomShort: "Abhishek",
    groomParents: "Mrs. Katambri Devi & Mr. Hoshiar Singh",
    groomAddress: "Vill. Bhangali, P.O. Jharet, Tehsil Palampur, Distt. Kangra (H.P.)",
    hashtag: "#SonaliWedsAbhishek",
  },
  shloka: {
    title: "॥ श्री गणेशाय नमः ॥",
    verse: "वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    translation: "O Lord Ganesha of the curved trunk and immense aura, whose brilliance equals ten million suns, please remove all obstacles from our endeavors, always.",
  },
  inviteFrom: {
    title: "Invitation From",
    elders: "Smt. Ishro Devi & Sh. Ram Swarup",
    message: "Cordially invite you to grace the auspicious wedding ceremony of their beloved granddaughter",
  },
  invite: {
    kicker: "Shree Ganeshay Namah",
    line: "request the honour of your presence and blessings on the auspicious occasion of the wedding ceremony of their daughter",
  },
  event: {
    title: "Wedding Ceremony of Sonali & Abhishek",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2026-11-02T10:00:00+05:30",
    endsAt: "2026-11-04T12:00:00+05:30",
    dateLabel: "02 . 11 . 2026 – 04 . 11 . 2026",
    dayLabel: "Monday – Wednesday",
    timeLabel: "2nd to 4th November 2026",
    dressCode: "Traditional Indian / Festive Splendour",
    note: "Your presence and warm blessings are our greatest gift",
  },
  functions: [
    {
      date: "Monday, 2nd November 2026",
      day: "Monday",
      events: [
        { name: "Haldi", time: "10:00 AM", desc: "A fragrant morning of turmeric, song, and joyful laughter." },
        { name: "Mehendi", time: "04:00 PM", desc: "Intricate henna designs, music, and celebratory rhythms." },
      ],
    },
    {
      date: "Tuesday, 3rd November 2026",
      day: "Tuesday",
      events: [
        { name: "Mama Swagat", time: "11:00 AM", desc: "Traditional ceremonial welcome of maternal uncles & family." },
        { name: "Brahm Bhoj", time: "04:00 PM", desc: "Auspicious traditional feast with sacred rituals and blessings." },
        { name: "Barat Swagat", time: "06:00 PM", desc: "Grand welcome of the groom and the celebratory wedding procession." },
        { name: "Dinner", time: "08:00 PM", desc: "Royal culinary banquet to celebrate the newly united families." },
      ],
    },
    {
      date: "Wednesday, 4th November 2026",
      day: "Wednesday",
      events: [
        { name: "Doli / Vidai", time: "07:00 AM", desc: "Heartfelt farewell as the bride begins her beautiful new journey." },
      ],
    },
  ],
  venue: {
    name: "At Our Residence",
    address: "Vill. Kuranwala, P.O. Mandhala, Tehsil Baddi, Distt. Solan (H.P.)",
    mapsQuery: "Vill. Kuranwala, Mandhala, Tehsil Baddi, Solan, Himachal Pradesh",
    url: "https://www.google.com/maps/search/?api=1&query=Vill.+Kuranwala,+P.O.+Mandhala,+Tehsil+Baddi,+Distt.+Solan+Himachal+Pradesh",
    lat: 30.9325,
    lng: 76.8488,
  },
  rsvp: {
    title: "RSVP",
    contacts: [
      { name: "Ram Swarup", phone: "9816218005" },
      { name: "Sucha Singh", phone: "8580878150" },
      { name: "Deepak Ranote", phone: "9816331992" },
    ],
  },
  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation: "With the divine blessings of our ancestors and elders, two loving souls embark upon the sacred journey of marriage.",
    source: "A blessing from both families",
  },
  footer: {
    compliments: "With Best Compliments From:",
    families: "Ranote Family & Friends",
    contacts: [
      { name: "Ram Swarup", phone: "9816218005" },
      { name: "Sucha Singh", phone: "8580878150" },
      { name: "Deepak Ranote", phone: "9816331992" },
    ],
  },
  meta: {
    title: "Sonali & Abhishek — Wedding Invitation",
    description: "Wedding Ceremony of Sonali and Abhishek. Join us in celebrating our wedding rituals from 2nd to 4th November 2026 at Vill. Kuranwala, Baddi, Solan (H.P.).",
    url: "https://sonali-abhishek-wedding.vercel.app",
    image: "/og-image.jpg",
    siteName: "Sonali & Abhishek Wedding",
  },
} as const;

export type Invitation = typeof invitation;
