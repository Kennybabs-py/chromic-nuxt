export function useTemplate() {
  const template = useState("home", () => "home");

  return { template };
}
