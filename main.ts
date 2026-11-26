import * as fs from "node:fs";

// A one-line review of my Monday: the 9 a.m. meeting starts at 8:58, the
// coffee is cold by 9:02, and the inbox has 47 unread emails — and somehow
// every one of them is also my fault. Deadpan, concrete, repeatable.
// One line, three concrete details, punchline at the end.
const entry = "Monday: my 9 a.m. meeting started at 8:58, my coffee was cold by 9:02, and my inbox had 47 unread emails — all of them somehow also my fault.";

function emit(text) {
  const targets = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
  for (const dir of targets) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(dir + "/entry.txt", text);
    } catch {
      // A missing or read-only target must not stop the other one.
    }
  }
}

emit(entry);
