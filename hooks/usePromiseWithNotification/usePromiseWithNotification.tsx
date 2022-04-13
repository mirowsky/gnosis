import React from "react";
import { alertStore } from "@workspace/components/utility";

export const usePromiseWithNotification = <T,>(
  promise: (...args: unknown[]) => Promise<T>,
  notification: { success: string; error: string; loading?: string }
) => {
  const notifier = alertStore((state) => state.dispatch);

  const callback = React.useCallback(() => {
    return async () => {
      notifier({
        message: notification?.loading ?? "Carregando...",
        severity: "info",
      });

      try {
        await promise();

        notifier({ message: notification.success, severity: "success" });
      } catch (error) {
        notifier({ severity: "error", message: notification.error });
      }
    };
  }, [notification, notifier, promise]);

  return callback();
};
