export function useTemplate() {
  const template = useState("template", () => "home");
  const route = useRoute();

  const setTemplate = (value: string) => {
    template.value = value;
  };

  watchEffect(() => {
    const path = route.path.replace("/", "");
    if (path === "") {
      setTemplate("home");
    } else if (path.includes("detail")) {
      setTemplate("detail");
    } else {
      setTemplate(path);
    }
  });

  return { template, setTemplate };
}
