declare interface UploadFileProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}

declare interface SearchParamProps {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

declare type ActionType =
  | "rename"
  | "details"
  | "share"
  | "download"
  | "delete";

declare interface RenameFileProps {
  fileId: string;
  name: string;
  extension: string;
  path: string;
}
