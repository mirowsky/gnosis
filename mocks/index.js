import { server } from "./server";
import { worker } from "./browser";

if (typeof window === "undefined") {
  server.listen();

  server.printHandlers();
} else {
  worker.start();
}
