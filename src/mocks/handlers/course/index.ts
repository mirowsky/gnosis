import faker from "@faker-js/faker";
import { COLLECTIONS_API_BASE_URL } from "src/constants";
import { CourseCollectionType } from "@workspace/types";
import { rest } from "msw";
import { getRandomImage } from "../../utility";

const mockCourses: CourseCollectionType[] = [
  {
    courseArea: "Medicina",
    courseDescription: faker.lorem.paragraphs(3),
    courseDuration: "12 meses",
    courseEmecPicture: {
      imageURL: "",
      imageDescription: "lorem description",
    },
    courseLevel: "Pós-graduação",
    courseName: "Alergia e imunologia",
    courseSyllabus: faker.lorem.sentences(20).split(" "),
    uuid: "123",
    courseEmecURL: faker.internet.url(),
    courseImage: {
      imageDescription: "Lorem",
      imageURL: getRandomImage(),
    },
  },
];

const findOneCourse = rest.get(
  `${COLLECTIONS_API_BASE_URL}/coursesNew/:uuid`,
  (req, res, ctx) => {
    const { uuid } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ ...mockCourses.find((value, index) => value.uuid === uuid) })
    );
  }
);

const findAllCourses = rest.get(
  `${COLLECTIONS_API_BASE_URL}/coursesNew`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCourses));
  }
);

export const courseHandlers = [findOneCourse, findAllCourses];
