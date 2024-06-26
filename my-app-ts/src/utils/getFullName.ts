export const getFullName = (
  firstName: string,
  lastName: string,
  middleName?: string
) => {
  return `Full name: ${firstName} ${
    middleName ? `${middleName} ` : ""
  }${lastName}`;
};
