const GetPageName = (pathname: string) => {
  if (pathname == "/") return "Landing Page";
  if (pathname.startsWith("/home")) return "Home";
  if (pathname.startsWith("/details")) return "Details";
  if (pathname.startsWith("/videoplay")) return "Player";

  return "Unknown";
};

export default GetPageName;
