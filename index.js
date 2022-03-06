import { mdToPdf } from "md-to-pdf";
import { readdir, access } from "node:fs/promises";

try {
  const files = await readdir('src');

  const mdfiles = await files.filter((x) => access(`src/${x}`) && /.*\.md$/.test(x));

  mdfiles.forEach((x) => {
    mdToPdf({ path: `src/${x}` }, { dest: `dist/${x.split('.')[0]}.pdf` }).then(() => {
      console.log("mtp Done");
    });
  });

} catch (err) {
  console.error(err);
}

