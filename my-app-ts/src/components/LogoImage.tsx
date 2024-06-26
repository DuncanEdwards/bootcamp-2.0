type LogoImageProps = {
  logo: string;
  alt: string;
  className?: string;
};

export const LogoImage = ({
  alt,
  className = "App-logo",
  logo,
}: LogoImageProps) => {
  return <img src={logo} className={`logo-image ${className}`} alt={alt} />;
};
