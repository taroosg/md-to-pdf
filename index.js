import mtp from "md-to-pdf";

mtp("./README.md", { dest: "dist/README.pdf" }).then(() => {
  console.log("mtp Done");
});