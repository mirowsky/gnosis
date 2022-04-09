import { DynamicSectionsProps } from "@workspace/components/layouts";
import {
  BlogCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";

export const createDynamicSection = (params: {
  blog: BlogCollectionType[];
  faq: DynamicSectionsProps["FAQSectionProps"]["items"];
  testimonial: TestimonialCollectionType[];
}): DynamicSectionsProps => {
  return {
    BlogSectionProps: {
      items: params.blog.map((val, index) => {
        return {
          img: {
            src: val.featuredImage.imageURL,
            alt: val.featuredImage.imageDescription,
          },
          readingTime: "10 minutos de leitura",
          tags: ["Medicina"],
          title: val.blogTitle,
        };
      }),
      sectionTitle: "Confira nossas últimas postagens.",
      ButtonProps: {
        children: "Ver mais postagens",
        color: "primary",
        onClick: () => {},
      },
      id: "blog_section",
    },
    FAQSectionProps: {
      items: params?.faq ?? [],
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
        items: params.testimonial.map((testimonial, _index) => {
          return {
            testimonial: testimonial.testimonialText,
            testimonialName: testimonial.testimonialName,
            testimonialPicture: {
              src: testimonial.testimonialPicture.imageURL,
              alt: testimonial.testimonialPicture.imageDescription,
            },
            testimonialExtra: testimonial.testimonialLocation,
          };
        }),
      },
    },
  };
};
