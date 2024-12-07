interface SubMenu {
  id: number;
  title: string;
  linkAddress: string; // linkAddress for submenus
}

export interface HeaderItem {
  id: number;
  title: string;
  linkAddress?: string; // linkAddress is optional for main menu items with submenus
  subMenu?: SubMenu[]; // subMenu is optional
}

export interface Header {
  header: HeaderItem[];
}

// swiper
export interface homeSwiper {
  id: number;
  imgPath: string;
}

