import { getDocuments } from "./lib/firebase";
import { linkType, testimonialsType } from "./types";

export class Helpers {
  static filterText = (text: string): string => {
    const index = text.indexOf("%");
    const endStr = text.substring(index + 3, text.length);
    return text
      .split("")
      .filter((x) => x !== "%" && x !== "2" && x !== "0")
      .join("")
      .substring(0, index)
      .concat(" " + endStr);
  };
  static getStack = (stack: string[]): string => {
    const data = stack.join(", ");
    return data;
  };
  static getSingle = async (slug: string) => {
    const data = await this.getData2();
    if (!data) return;
    const single = data.find((x) => {
      return x.slug == slug;
    });
    return single;
  };
  static getData2 = async () => {
    try {
      return await getDocuments();
    } catch (error) {
      return null;
    }
  };
}
