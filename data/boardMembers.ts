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
  },
  {
    id: '2',
    name: 'Talha Mohsen',
    designation: 'Vice-President',
  },
  {
    id: '3',
    name: 'Atiqur Rahman Sajib',
    designation: 'Treasurer',
  },
  {
    id: '4',
    name: 'Ishtiak Ahmed Chowdhury',
    designation: 'Secretary',
  },
  {
    id: '5',
    name: 'Mehedi Hassan Polok',
    designation: 'Joint Secretary',
  },
  {
    id: '6',
    name: 'Khandaker Ershad Ahmed',
    designation: 'Member',
  },
  {
    id: '7',
    name: 'Mehedi Reza',
    designation: 'Member',
  },
  {
    id: '8',
    name: 'Rahmat Sany',
    designation: 'Member',
  },
];
