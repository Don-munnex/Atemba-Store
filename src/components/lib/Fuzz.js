import { photos } from "../Image";
import Fuse from "fuse.js";
const options = {
    includeScore: true,
    keys: ["label", "description", "company"],
};
const fuse = new Fuse(photos, options);
export const result = fuse.search('search term');
console.log(result);
