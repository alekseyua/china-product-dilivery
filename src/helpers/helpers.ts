import { listUrls } from "../config/config.menu";
import { insta, telega } from "../Images";

export function decimalDigit(number: number): string {
  if (number < 10) return "0" + number;
  return `${number}`;
}

export function getTitleFromUrl(title: any) {
  let newTitle = listUrls.filter((el) => el.path === title.key)[0].title;
  return newTitle;
}

export function setLocalStore({ key, value }: { key: string; value: any }) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

function checkNumber(value: any) {
  if (parseInt(value, 10) !== null) return +value;
  return value;
}

export function getLocalStore({ key }: { key: string }) {
  try {
    const resLocalStore = window.localStorage.getItem(key);
    switch (resLocalStore) {
      case "null":
        return null;
      case "true":
        return true;
      case "false":
        return false;
      case "undefined":
        return undefined;
      default:
        return checkNumber(resLocalStore);
    }
  } catch (error) {
    console.log({ error });
  }
}

// export function addCssProperty(
//   el: <E extends Element = Element> | null,
//   styles: { [key: number | string]: string | number }
// ) {
//   // let  style: keyof {[key:string]: any};

//   for (let property in styles) {
//     if (el) {
//       let style = el.style as { [key: string]: any };
//       style[property] = styles[property];
//     }
//   }
// }

export function getIconFromName(name: string): string{

  let icon = telega;
   
  switch (name) {
    case 'Facebook':
      icon = telega      
      break;
    case 'Instagram':
      icon = insta      
      break;
  
    default:
      break;
  }

  return icon;
}