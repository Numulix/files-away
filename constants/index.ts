export const navItems = [
  { name: "Dashboard", icon: "/assets/icons/dashboard.svg", url: "/" },
  { name: "Documents", icon: "/assets/icons/document.svg", url: "/documents" },
  { name: "Images", icon: "/assets/icons/image.svg", url: "/images" },
  { name: "Media", icon: "/assets/icons/video.svg", url: "/media" },
  { name: "Others", icon: "/assets/icons/other.svg", url: "/others" },
];

export const avatarPlaceholder =
  "https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png";

export const MAX_FILE_SIZE = 50 * 1024 * 1024;

export interface ActionDropdownItem {
  label: string;
  icon: string;
  value: ActionType;
}

export const actionsDropdownItems: ActionDropdownItem[] = [
  {
    label: "Rename",
    icon: "/assets/icons/actions/edit.svg",
    value: "rename",
  },
  {
    label: "Details",
    icon: "/assets/icons/actions/info.svg",
    value: "details",
  },
  {
    label: "Share",
    icon: "/assets/icons/actions/share.svg",
    value: "share",
  },
  {
    label: "Download",
    icon: "/assets/icons/actions/download.svg",
    value: "download",
  },
  {
    label: "Delete",
    icon: "/assets/icons/actions/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Date created (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];
