import { useEffect, useState } from "react";

type AlertType = "error" | "warning" | "info" | "success";

export type Alert = {
  message: string;
  type: AlertType;
};

const messages: { [key in AlertType]: string[] } = {
  error: [
    "Unterminated string literal.",
    "A required parameter cannot follow an optional parameter.",
    "'public' modifier must precede 'abstract' modifier.",
    "Only ambient modules can use quoted names.",
  ],
  warning: [],
  info: [],
  success: [],
};

const getRandomDelayInMS = () => {
  const SECOND_IN_MS = 1000;
  const MINIMUM_TIME_IN_SECONDS = 5;
  const MAXIMUM_TIME_IN_SECONDS = 25;
  return (
    (Math.ceil(
      Math.random() * MAXIMUM_TIME_IN_SECONDS - MINIMUM_TIME_IN_SECONDS
    ) +
      MINIMUM_TIME_IN_SECONDS) *
    SECOND_IN_MS
  );
};

export const useAlertGenerator = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    setTimeout(
      () =>
        setAlerts(() => [
          ...alerts,
          {
            message: messages["error"][Math.floor(Math.random() * 3)],
            type: "error",
          },
        ]),
      getRandomDelayInMS()
    );
  }, [alerts]);

  console.log("alerts", alerts, messages["error"]);
};
