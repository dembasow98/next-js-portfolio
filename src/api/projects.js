import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const folder = "projects";
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => path.extname(file) === ".md");
  const slugs = markdownProjects.map((file) => file.replace(".md", ""));
  res.status(200).json(slugs);
}