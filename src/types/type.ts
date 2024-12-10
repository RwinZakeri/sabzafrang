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

// service

export interface Feature {
  id: number;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  imgAddress: string;
  features: Feature[];
}

// video grid

// Assuming the type is defined in "@/types/type"
export interface VideoItem {
  id: number;
  title: string;
  videoSource: string;
  videoThumbnail: string;
  category: string;
}

// Adjust to accept an array of VideoItem directly
export type LatestResumeData = VideoItem[];


// category
export interface categoryType {
  searchParams: {
    category: string;
  };
}