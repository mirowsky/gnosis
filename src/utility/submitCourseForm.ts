import { AlertState } from "@workspace/components/shared";
import { CourseCollectionType, CourseFormBody } from "@workspace/types";
import { UseFormReturn } from "react-hook-form";
import { events as GTMEvents } from "./gtag";
import { CourseEmailSender, CourseFormSubmitter } from "@workspace/services";

export type SubmitCourseFormHandler = (
  form: UseFormReturn<CourseFormBody, any>,
  alert: (alert: Omit<AlertState, "open">) => void,
  course: CourseCollectionType
) => Promise<void>;

const submitCourseForm: SubmitCourseFormHandler = async (
  form,
  alert,
  course
) => {
  alert({ message: "Enviando manifestação de interesse", severity: "info" });

  form.handleSubmit(async (data, events) => {
    GTMEvents.courseContact({
      area: course.courseArea,
      course: course.courseName,
      email: data.email,
      level: course.courseLevel,
      message: data.message,
      name: data.name,
      phone: data.phone,
    });

    try {
      await CourseFormSubmitter.submit({
        ...data,
        course: `${course.courseName} - ${course.courseLevel}`,
      });
      await CourseEmailSender.send(data);

      alert({
        message: "Manifestação de interesse enviada com sucesso!",
        severity: "success",
      });

      form.reset({ email: "", message: "", name: "", phone: "" });
    } catch (error) {
      alert({
        message:
          "Ocorreu um erro ao tentar enviar a manifestação de interesse.",
        severity: "error",
      });
    }
  })();
};

const submitCourseForm__dev: SubmitCourseFormHandler = async (
  form,
  alert,
  course
) => {
  alert({ message: "Enviando manifestação de interesse", severity: "info" });

  form.handleSubmit(async (data, events) => {
    GTMEvents.courseContact({
      area: course.courseArea,
      course: course.courseName,
      email: data.email,
      level: course.courseLevel,
      message: data.message,
      name: data.name,
      phone: data.phone,
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);

        alert({
          message: "Manifestação de interesse enviada com sucesso!",
          severity: "success",
        });

        form.reset({ email: "", message: "", name: "", phone: "" });
      }, 1500);
    });
  })();
};

const handler =
  process.env.NODE_ENV === "production"
    ? submitCourseForm
    : submitCourseForm__dev;

export default handler;
