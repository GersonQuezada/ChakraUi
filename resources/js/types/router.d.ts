import { IconType } from "react-icons";

declare global {
    interface Router {
      name?: string,
      url: string,
      icon: IconType,
      hidden?: boolean,
      category: string,
      permissions: Array<string>, // the permissions can access to this route.
      available: boolean
    } 
}

export {};