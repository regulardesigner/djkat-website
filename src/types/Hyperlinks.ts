import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Hyperlink {
  name: string;
  url: string;
  type?: "link" | "button" | "email";
  label?: string;
  alt?: string;
  icon?: IconDefinition;
}

export default Hyperlink;
