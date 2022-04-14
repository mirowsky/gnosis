import { FooterProps } from "@workspace/components/shared";

export const createFooter = (): FooterProps => {
  return {
    FooterContactInfoProps: {
      address: "Avenida Praia de Belas, 1212, sala 424, RS - Brasil",
      emails: ["atendimento@institutoeg.com"],
      phones: ["(51) 9-9143-1009"],
      registration: "CNPJ: 36.605.433/0001-18",
    },
    FooterIconsProps: {
      facebook: "https://www.facebook.com/InstitutoGnosisEducacional/",
      instagram: "https://www.instagram.com/gnosisinstitutoeducacional/",
      whatsApp: "https://wa.link/3in1jl",
      twitter: "https://twitter.com/GnosisInstituto",
      linkedin:
        "https://www.youtube.com/channel/UC4qx3U-Hk8qlX46zTZqrL0w/videos?view_as=subscriber",
      youtube:
        "https://www.youtube.com/channel/UC4qx3U-Hk8qlX46zTZqrL0w/videos?view_as=subscriber",
    },
  };
};
