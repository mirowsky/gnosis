import { Head } from "@workspace/types";

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

const dataLayerExists = () => typeof window !== "undefined" && window.dataLayer;

const customEvent: EventDispatcher = (event) => {
  window.dataLayer.push(event);
};

const dispatchEvent = (event: Head<EventDispatcher>) => {
  if (dataLayerExists()) {
    customEvent(event);
  } else {
    console.error(
      `Custom event "${event.event} failed to be dispatched, data layer does not exists"`
    );
  }
};

export const events = {
  pageView: (url: string) => {
    dispatchEvent({ event: "pageview", page: url });
  },
  contact: (params: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    dispatchEvent({
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
    dispatchEvent({
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
    dispatchEvent({
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
    dispatchEvent({
      event: "wpp-botao",
      timestamp: `${new Date(Date.now()).toLocaleString("pt-br")}`,
    });
  },
  supportItem: (params: { supportItemLabel: string }) => {
    dispatchEvent({
      event: "suporte-item",
      opcao: params.supportItemLabel,
      timestamp: `${new Date(Date.now()).toLocaleString("pt-br")}`,
    });
  },
} as const;
