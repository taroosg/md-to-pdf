import { mdToPdf } from "md-to-pdf";

mdToPdf({ path: './README.md' }, { dest: "dist/README.pdf" }).then(() => {
  console.log("mtp Done");
});