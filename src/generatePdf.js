import * as html2pdf from "html2pdf.js";
import { render } from "./vs_4-26";

const html = render({ boom: "bap" });

export const generatePdf = () => {
  console.log(html.slice(0, 400));
  html2pdf().from(html, "string").to("pdf").save();
};
