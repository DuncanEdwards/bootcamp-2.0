/* eslint-disable testing-library/no-debugging-utils */
import { LogoImage } from "./LogoImage";
import { render, screen } from "@testing-library/react";

test("LogoImage with all props provide", () => {
  render(
    <LogoImage
      logo={"test-extra.jpg"}
      alt="logo image"
      className="my-classname"
    />
  );

  const image = screen.getByRole("img");
  expect(image).toMatchSnapshot();
});

test("LogoImage without className provided", () => {
  render(<LogoImage logo={"test-extra.jpg"} alt="logo image" />);

  const image = screen.getByRole("img");
  expect(image).toMatchSnapshot();
});
