export interface BoardMember {
  id: string;
  name: string;
  designation: string;
  bio?: string;
  image?: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: '1',
    name: 'Retd. Major Mizanur Rahman',
    designation: 'President',
    bio: 'Freedom Fighter & BMA Pioneer',
    image: 'President Major (Retd) Mizanur Rahman.png',
  },
  {
    id: '2',
    name: 'Talha Mohsen',
    designation: 'Vice-President',
    image: 'Vice-Presidents Talha Mohsen.jpg',
  },
  {
    id: '3',
    name: 'Atiqur Rahman Sajib',
    designation: 'Treasurer',
    image: 'Treasurer Atiqur Rahman Sajib.png',
  },
  {
    id: '4',
    name: 'Ishtiak Ahmed Chowdhury',
    designation: 'Secretary',
    image: 'GENERAL Secretary Ishtiak Ahmed Chowdhury.jpg',
  },
  {
    id: '5',
    name: 'Mehedi Hassan Polok',
    designation: 'Joint Secretary',
    image: 'Joint Secretary Mehedi Hassan Polok.png',
  },
  {
    id: '6',
    name: 'Mehedi Reza',
    designation: 'Member',
    image: 'MEHEDI REZA.jpg',
  },
  {
    id: '7',
    name: 'Rahmat Sany',
    designation: 'Member',
    image: 'Rahmat Sany.png',
  },
  {
    id: '8',
    name: 'Khandaker Ershad Ahmed',
    designation: 'Member',
    image: 'https://i.pravatar.cc/200?u=ershad',
  },
];
