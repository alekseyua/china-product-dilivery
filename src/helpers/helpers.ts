import { listUrls } from "../config/config.menu";
import { facebook, insta, rutube, telega, youtube } from "../Images";

export function delay(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

export function getIconFromName(type: number): string{

  let icon = telega;
   
  switch (type) {
    case 4:
      icon = telega      
      break;
    case 1:
      icon = facebook     
      break;
    case 2:
      icon = insta      
      break;
    case 3:
      icon = youtube;      
      break;
    case 5:
      icon = rutube;      
      break;
  
    default:
      break;
  }

  return icon;
}