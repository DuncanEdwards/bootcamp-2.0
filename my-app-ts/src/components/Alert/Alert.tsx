import "./Alert.css";
import classNames from "classnames";

type AlertProps = {
  message: string;
  type?: "error" | "warning" | "info" | "success";
};

export const Alert = ({ message, type = "info" }: AlertProps) => (
  <div className={classNames("alert", type)}>{message}</div>
);
