export type UserInfo = {
  id: string;
  name: string;
  email: string;
  adress: Adress;
};

type AdressKeys = 'street' | 'suite' | 'city' | 'zipcode';

type Adress = {
  [key in AdressKeys]: string;
}

type PostInfoKeys = 'title' | 'body' | 'id';

export type PostInfo = {
  [key in PostInfoKeys]: string;
}

type SocialsKeys = 'path' | 'icon' | 'id';

export type Socials = {
  [key in SocialsKeys]: string;
}
