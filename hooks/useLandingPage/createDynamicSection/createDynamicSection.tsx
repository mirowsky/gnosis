import { DynamicSectionsProps } from "@workspace/components/layouts";

export const createDynamicSection = (params: {
  blogPosts?: DynamicSectionsProps["BlogSectionProps"]["items"];
  FAQItems?: DynamicSectionsProps["FAQSectionProps"]["items"];
  testimonialItems?: DynamicSectionsProps["TestimonialSectionProps"]["TestimonialSliderProps"]["items"];
}): DynamicSectionsProps => {
  return {
    BlogSectionProps: {
      items: params?.blogPosts ?? [],
      sectionTitle: "Confira nossas últimas postagens.",
      ButtonProps: {
        children: "Ver mais postagens",
        color: "primary",
        onClick: () => {},
      },
      id: "blog_section",
    },
    FAQSectionProps: {
      items: params?.FAQItems ?? [],
      sectionTitle:
        "Encontre as respostas que você precisa em nosso centro de ajuda",
      LoadMoreButtonProps: {
        children: "Ver mais perguntas",
        onClick: () => {},
        variant: "outlined",
        color: "primary",
      },
    },
    TestimonialSectionProps: {
      sectionTitle: "O que nossos alunos dizem sobre o Instituto Gnosis.",
      TestimonialSliderProps: {
        items: params?.testimonialItems ?? [],
      },
    },
  };
};
