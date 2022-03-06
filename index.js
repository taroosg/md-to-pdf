import { mdToPdf } from "md-to-pdf";
import { readdir } from "node:fs/promises";

try {
  const files = await readdir('src');
  // for (const file of files)
  //   console.log(file);

  files.forEach((x) => {
    mdToPdf({ path: `src/${x}` }, { dest: `dist/${x.split('.')[0]}.pdf` }).then(() => {
      console.log("mtp Done");
    });
  });

} catch (err) {
  console.error(err);
}

