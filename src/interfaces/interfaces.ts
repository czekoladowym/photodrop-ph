export interface AlbumData {
  createdDate: string;
  id: string;
  location: string;
  title: string;
}

export interface AboutUsers {
  personId: string;
  email: string | null;
  fullName: string | null;
  phoneNumber: string;
  profilePhotoUrl: string | null;
}
