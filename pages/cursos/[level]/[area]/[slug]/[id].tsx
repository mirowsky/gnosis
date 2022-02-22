import {
  CoursePageAlt as CoursePageComponent,
  CoursePageAltProps,
} from "@workspace/components/pages";
import { CourseCollectionType } from "@workspace/types";
import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { convertToSlug } from "@workspace/utility";
import {
  CalendarTodayOutlined,
  Payment,
  School,
  Timelapse,
  WhatsApp,
} from "@mui/icons-material";
import { useDetectMobile, useWhatsAppRedirect } from "@workspace/hooks";
import { WHATSAPP_PHONE_NUMBER } from "@workspace/contants";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const convertSyllabusItem = (syllabusItem: string) => {
  const hour = syllabusItem.match(/([0-9].hs?)/gi);
  const label = syllabusItem.split("(")[0];

  return {
    hour: hour?.toString() ?? "00h",
    label: label || "not found",
  };
};

type ContactFormInputs = {
  name: string;
  message: string;
  email: string;
  phone: string;
};

const contactFormSchema: Yup.SchemaOf<ContactFormInputs> = Yup.object({
  email: Yup.string()
    .email("Precisa ser um email válido")
    .required("Este campo é obrigatório"),
  message: Yup.string().required("Este campo é obrigatório"),
  phone: Yup.string().required("Este campo é obrigatório"),
  name: Yup.string().required("Este campo é obrigatório"),
}).required();

type CoursePageDataProps = CourseCollectionType;

const CoursePage = (props: CoursePageDataProps) => {
  const [tab, activeTab] = React.useState(0);
  const isMobile = useDetectMobile();
  const whatsRedirect = useWhatsAppRedirect(isMobile ? "mobile" : "desktop");
  const [descriptionCollapsed, setDescriptionCollapsed] = React.useState(true);
  const [dialogFormOpen, setDialogFormOpen] = React.useState(false);
  const dialogForm = useForm<ContactFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(contactFormSchema),
  });

  const contactDialogFormProps: CoursePageAltProps["ContactFormDialogProps"] = {
    title: `Manifestação de interesse - Curso de ${props.courseLevel.toLowerCase()} - ${
      props.courseArea
    } - ${props.courseName}`,
    subtitle:
      "Preencha o formulário e em breve um de nossos representantes entrará em contato para atendê-lo!",
    open: dialogFormOpen,
    handleClose: () => setDialogFormOpen(false),
    PrimaryButtonProps: {
      children: "Enviar",
      disabled: !dialogForm.formState.isValid,
    },
    SecondaryButtonProps: {
      children: "Cancelar",
      disabled: dialogForm.formState.isSubmitting,
      onClick: () => setDialogFormOpen(false),
    },
    emailInputProps: {
      ...dialogForm.register("email"),
      error: Boolean(dialogForm.formState.errors.email),
      helperText: dialogForm.formState.errors.email?.message ?? "",
      label: "Email",
      placeholder: "E.g: joao.alves@gmail.com",
    },
    nameInputProps: {
      ...dialogForm.register("name"),
      error: Boolean(dialogForm.formState.errors.name),
      helperText: dialogForm.formState.errors.name?.message ?? "",
      label: "Nome completo",
      placeholder: "E.g: João Alves",
    },
    messageInputProps: {
      ...dialogForm.register("message"),
      error: Boolean(dialogForm.formState.errors.message),
      helperText: dialogForm.formState.errors.message?.message ?? "",
      label: "Mensagem",
      placeholder: "E.g; Gostaria de mais informações sobre...",
    },
    phoneInputProps: {
      ...dialogForm.register("phone"),
      error: Boolean(dialogForm.formState.errors.phone),
      helperText: dialogForm.formState.errors.phone?.message ?? "",
      label: "Número de telefone",
      placeholder: "E.g; 51998877334",

      onValueChange: (values) => {
        dialogForm.setValue("phone", values.formattedValue);
      },
    },
  };

  const courseSyllabusProps: CoursePageAltProps["CourseSyllabusSectionProps"] =
    {
      activeIndex: tab,
      emec: {
        img: {
          alt: props.courseEmecPicture.imageDescription,
          src: props.courseEmecPicture.imageURL,
        },
        url: {
          href: props.courseEmecURL,
          label: `Certificado de EMEC - ${props.courseName} - ${props.courseLevel}`,
        },
      },
      handleChange: (_event, newValue) => activeTab(newValue),
      prerequisites: "Diploma de medicina válido em território brasileiro",
      syllabusItems: props.courseSyllabus.map((val, index) => {
        const syllabusItem = convertSyllabusItem(val);

        return {
          hours: syllabusItem.hour,
          title: syllabusItem.label,
        };
      }),
    };

  const courseHeroAltProps: CoursePageAltProps["CourseHeroAltProps"] = {
    courseBenefits: [
      {
        icon: Timelapse,
        label: `Conclusão: ${props.courseDuration}`,
      },
      { icon: School, label: `Curso de ${props.courseLevel}` },
      {
        icon: CalendarTodayOutlined,
        label: "Inicie imediatamente após a inscrição",
      },
      {
        icon: Payment,
        label: "Valores sob consulta",
      },
    ],
    PrimaryButtonProps: {
      children: "Manifestar interesse",
      onClick: () => setDialogFormOpen(true),
    },
    ExpandDescriptionButtonProps: {
      children: descriptionCollapsed ? "Ver mais" : "Ver menos",
      onClick: () => setDescriptionCollapsed((prevState) => !prevState),
    },
    SecondaryButtonProps: {
      children: <WhatsApp />,
      onClick: () =>
        whatsRedirect(
          `Olá, estou vindo através do website e gostaria de mais informações sobre o curso *${props.courseName} - ${props.courseArea} - ${props.courseLevel}*`,
          WHATSAPP_PHONE_NUMBER
        ),
    },
    courseDescription: props.courseDescription,
    courseImage: {
      alt: props.courseImage.imageDescription,
      url: props.courseImage.imageURL,
    },
    courseName: props.courseName,
    TruncateTextProps: {
      numberOfLines: descriptionCollapsed ? 4 : false,
    },
  };

  return (
    <CoursePageComponent
      ContactFormDialogProps={contactDialogFormProps}
      CourseSyllabusSectionProps={courseSyllabusProps}
      CourseHeroAltProps={courseHeroAltProps}
    />
  );
};

export default CoursePage;

type CourseStaticPaths = GetStaticPaths<{
  level: string;
  area: string;
  slug: string;
  id: string;
}>;

export const getStaticPaths: CourseStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  const courseRequest: AxiosResponse<CourseCollectionType[]> = await axios.get(
    "https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/coursesNew"
  );

  const courseData = courseRequest.data;

  return {
    paths: courseData.map((value, index) => {
      return {
        params: {
          area: convertToSlug(value.courseArea),
          level: convertToSlug(value.courseLevel),
          slug: convertToSlug(value.courseName),
          id: value.uuid,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CoursePageDataProps> = async ({
  defaultLocale,
  locale,
  locales,
  params,
  preview,
  previewData,
}) => {
  const paramsData = params as {
    level: string;
    area: string;
    slug: string;
    id: string;
  };

  const courseByIdRequest: AxiosResponse<CourseCollectionType> =
    await axios.get(`
  https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/coursesNew/${paramsData.id}
  `);

  const courseByIdRequestData = courseByIdRequest.data;

  console.log(courseByIdRequestData);

  return {
    props: {
      courseEmecURL: courseByIdRequestData.courseEmecURL,
      uuid: courseByIdRequestData.uuid,
      courseSyllabus: courseByIdRequestData.courseSyllabus,
      courseArea: courseByIdRequestData.courseArea,
      courseDescription: courseByIdRequestData.courseDescription,
      courseDuration: courseByIdRequestData.courseDuration,
      courseEmecPicture: courseByIdRequestData.courseEmecPicture,
      courseImage: courseByIdRequestData.courseImage,
      courseLevel: courseByIdRequestData.courseLevel,
      courseName: courseByIdRequestData.courseName,
    },
  };
};
