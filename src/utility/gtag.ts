export interface IWindow extends Window {
  dataLayer: Record<string, any>[];
}
declare let window: IWindow;

export type CustomEvent = {
  event: string;
} & Record<string, string>;

export type EventDispatcher = <TEvent extends CustomEvent>(
  event: TEvent
) => void;

export type EventMiddleware = EventDispatcher;

const logger: EventMiddleware = (event) =>
  console.log(`Event was dispatched: ${JSON.stringify(event)}`);

const validateWindow: EventMiddleware = (event) => {
  if (!(typeof window !== "undefined" && window.dataLayer))
    throw new Error(
      "Data layer is unavailable. Verify if Google Tag Manager was installed correctly" +
        ` - Error was thrown when trying to dispatch the following event: ${JSON.stringify(
          event
        )}`
    );
};

const middleware: EventMiddleware[] = [logger, validateWindow];

const createDispatcher = (middleware: EventMiddleware[]) => {
  return (event: CustomEvent) => {
    middleware.forEach((fn) => {
      fn(event);
    });

    window.dataLayer.push(event);
  };
};

const dispatcher = createDispatcher(middleware);

export const events = {
  newsletter: (email: string) => {
    dispatcher({
      event: "newsletter",
      email: email,
      timestamp: `${new Date(Date.now()).toLocaleString("pt-br")}`,
    });
  },

  pageView: (url: string) => {
    dispatcher({ event: "pageview", page: url });
  },
  contact: (params: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    dispatcher({
      event: "contato",
      nome: params.name,
      email: params.email,
      telefone: params.phone,
      mensagem: params.message,
      timestamp: `${new Date(Date.now()).toLocaleString("pt-br")}`,
    });
  },
  courseContact: (params: {
    course: string;
    area: string;
    level: string;
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    dispatcher({
      event: "manifestacao-interesse",
      curso: params.course,
      area: params.area,
      level: params.level,
      nome: params.name,
      email: params.email,
      telefone: params.phone,
      mensagem: params.message,
      timestamp: `${new Date(Date.now()).toLocaleString("pt-br")}`,
    });
  },
  courseWPP: (params: {
    course: string;
    area: string;
    level: string;
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    dispatcher({
      event: "curso-whatsapp",
      curso: params.course,
      area: params.area,
      level: params.level,
      nome: params.name,
      email: params.email,
      telefone: params.phone,
      mensagem: params.message,
      timestamp: `${new Date(Date.now()).toLocaleString("pt-br")}`,
    });
  },
  supportMenu: () => {
    dispatcher({
      event: "wpp-botao",
      timestamp: `${new Date(Date.now()).toLocaleString("pt-br")}`,
    });
  },
  supportItem: (params: { supportItemLabel: string }) => {
    dispatcher({
      event: "suporte-item",
      opcao: params.supportItemLabel,
      timestamp: `${new Date(Date.now()).toLocaleString("pt-br")}`,
    });
  },
} as const;
