interface Hyperlink {
  name: string;
  url: string;
  type?: "link" | "button" | "email";
  label?: string;
  alt?: string;
  icon?: any; 
}

export default Hyperlink;