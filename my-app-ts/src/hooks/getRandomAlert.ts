import short from "short-uuid";

type AlertType = "error" | "warning" | "info" | "success";

export type Alert = {
  id: string;
  message: string;
  type: AlertType;
};

const messages: { [key in AlertType]: string[] } = {
  error: [
    "Unterminated string literal.",
    "A required parameter cannot follow an optional parameter.",
    "'public' modifier must precede 'abstract' modifier.",
    "Only ambient modules can use quoted names.",
    "Statements are not allowed in ambient contexts.",
  ],
  warning: [
    "'name' is defined as a property in class 'Person', but is overridden here in 'MyPerson' as an accessor.",
    "Module 'add' has no default export. Did you mean to use 'import { add } from add instead?",
    "'React' can only be imported by using 'import React = require(react) or a default import.",
    "Merged declaration 'MyPerson' cannot include a default export declaration. Consider adding a separate 'export default MyPerson' declaration instead.",
    "Exported external package typings file '../proteus.d.ts' is not a module. Please contact the package author to update the package definition.",
  ],
  info: [
    "Now is the winter of our discontent",
    "Made glorious summer by this sun of York",
    "Now are our brows bound with victorious wreaths",
    "Our bruised arms hung up for monuments",
    "Nor made to court an amorous looking-glass",
  ],
  success: [
    "It takes courage to grow up and become who you really are.",
    "Your self-worth is determined by you",
    "Nothing is impossible.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Attitude is a little thing that makes a big difference.",
  ],
};

const getRandomInteger = (maximum: number) => {
  return Math.floor(Math.random() * maximum);
};

const getErrorType = (): AlertType => {
  switch (getRandomInteger(4)) {
    case 1:
      return "error";
    case 2:
      return "warning";
    case 3:
      return "success";
    default:
      return "info";
  }
};

export const getRandomAlert = (id: number): Alert => {
  const type = getErrorType();
  const messagesOfType = messages[type];
  return {
    id: short.generate(),
    message: messagesOfType[getRandomInteger(messagesOfType.length)],
    type,
  };
};
