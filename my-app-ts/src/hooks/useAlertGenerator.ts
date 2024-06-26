import { useEffect, useState } from "react";
import { Alert, getRandomAlert } from "./getRandomAlert";

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

type RemoveAlert = (alertId: string) => void;

export const useAlertGenerator = (): [Alert[], RemoveAlert] => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    setTimeout(
      () =>
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          getRandomAlert(prevAlerts.length),
        ]),
      getRandomDelayInMS()
    );
  }, [alerts]);

  const removeAlert: RemoveAlert = (alertId: string) => {
    setAlerts((prevAlerts) => prevAlerts.filter(({ id }) => id !== alertId));
  };

  return [alerts, removeAlert];
};
