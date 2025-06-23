export interface AppTextProps {
  text: string;
  color?: string;
  weight?: any;
  size?: number;
  align?: "left" | "center" | "right" | "justify" | any;
  mb?: number | string | undefined | any;
  mt?: number | string | undefined | any;
  font_type?: "font" | "font_semi" | "font_extra" | "font_medium";
  italic?:any
}
