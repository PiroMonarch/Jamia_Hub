
export interface PG {
  id: number;
  name: string;
  location: string;
  distance: string;
  price: number;
  image: string;
  tags: string[];
  gender: 'Boys' | 'Girls' | 'Co-ed';
  lat: number;
  lng: number;
}

export interface Roommate {
  id: number;
  name: string;
  course: string;
  year: string;
  age: number;
  image: string | null;
  isOnline: boolean;
  budget: string;
  area: string;
  hobbies: string[];
  studyHabits: string;
  smokingPreference: string;
  tags: string[];
  initials: string;
  gender: 'Male' | 'Female';
}

export const PGS: PG[] = [
  {
    id: 1,
    name: 'Al-Hidayat Premium PG',
    location: 'Jamia Nagar',
    distance: '850m away',
    price: 8500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw5FMm80JOn6rQPQCt5uqrH9M4DMpp6b5QnCw8fgz9F8d49NcFKTMWrU_dFTbq6cFwTZCmGZxq9M19PhL2d9rniujHUqkUo3CgypI0qaBbT-a7b1qqsy3_-44ayhWHvJfheceavOBYIHeH2aEf9FNsc7brZ7-LP9VhQWgEyWZV_iJaENAhd55CJFwQnGzK5OaxuRhJJzdN-Vuqju4p79Oj9PJi9P_XR-T3PbvjmMoyxxvbnpXY3q0riNCGEHvPQB3-SwkqHvR9gDY',
    tags: ['Trusted'],
    gender: 'Boys',
    lat: 28.5620,
    lng: 77.2810
  },
  {
    id: 2,
    name: 'Greenwood Residency',
    location: 'Okhla Vihar',
    distance: '850m away',
    price: 10000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9wAlsizmbyci8p6Ps-W30li7hFORDItFa-X5uC-amba7zG3jpW2Z4OtWyDqePcqk30LRDBag-pvLeEZzsgA9n1yYPar1dLyrvV5rK97l_wE3iCCuPAB8Ehce-tRBAdqIFEr_T3IpaFcrMTgruMeHIW_s4e09_hCzpzsDzglD286qk67LZSeORi_6kGZbt2fvaVdKd1gUNcmBOIc_JrLg8IPVphdK1BjgFDyAAyxHBVXJ-gyr3tLev77wbowhzWsgldvZDi0GjWOA',
    tags: ['Trusted'],
    gender: 'Girls',
    lat: 28.5550,
    lng: 77.2850
  },
  {
    id: 3,
    name: 'Elite Boys Hostel',
    location: 'Batla House',
    distance: '850m away',
    price: 6500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCXtY0gsFD1TtOGJH-kgctYroT_JgJ2oVP7prGJB9WT2xYgr8hi-mlhEJeufx06shUcrRn-WG1ZXeJKI3TJx4eatvZNFv3okaiifOLm6FxWpjajqxRx7vPrmpDfWoYGqxKqJaCjejSr6JMn6-l83dK_2CK8uOrAFiv-wrvfMuy6uGNWRLT1X97HllLGV1Ox_n8FF5euHqOaLP3N8TlL8EmXzRm8wX-aJC-uuqgl1R7MfjgvqelUdt7tQaNK1uQIEvtlTXUE2PKYvU',
    tags: [],
    gender: 'Boys',
    lat: 28.5680,
    lng: 77.2850
  },

  {
    id: 5,
    name: 'Scholar\'s Inn',
    location: 'Ghaffar Manzil',
    distance: '500m away',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
    tags: [],
    gender: 'Co-ed',
    lat: 28.5600,
    lng: 77.2900
  }
];

export const ROOMMATES: Roommate[] = [
  {
    id: 1,
    name: 'Ananya Sharma',
    course: 'B.Tech',
    year: '3rd Year',
    age: 21,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    isOnline: true,
    budget: '₹5k - ₹7k',
    area: 'Jamia Nagar',
    hobbies: ['Cricket', 'Photography'],
    studyHabits: 'Late Night',
    smokingPreference: 'Non-Smoker',
    tags: ['Early Bird', 'Studious'],
    initials: 'AS',
    gender: 'Female'
  },
  {
    id: 2,
    name: 'Rohan Verma',
    course: 'Mass Comm',
    year: '1st Year',
    age: 19,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3HiRNVFab8wYd4G5c9rBzmt-cSTFsgrN-zMN4-PwON5vOmgDOgYjLu4wAfdpXDlRoyslidqCcYzAaDqmkMkBm7TQJJ6TuqW60hKiCINixH-7wesrpeFN4C01hpKEKoudp6rR2lRU2jZDUWUI8g_GUgTwb2ENiZsWE_5gv2rQFDI-xOz2CYlPrFDHXP4S4Rixdy-50mw5aqg7YsT88jt0wzaCJ6Xyb6PiDJPgWfVymNnh6eH4gTKkd1HibF1UWztcRUGvDzxjwL6o',
    isOnline: false,
    budget: '₹8k - ₹10k',
    area: 'Okhla Vihar',
    hobbies: ['Gaming', 'Traveling'],
    studyHabits: 'Group Study',
    smokingPreference: 'Occasional',
    tags: ['Night Owl', 'Gamer'],
    initials: 'RV',
    gender: 'Male'
  },
  {
    id: 3,
    name: 'Zain Khan',
    course: 'Psychology',
    year: '2nd Year',
    age: 20,
    image: null,
    isOnline: false,
    budget: '₹6k - ₹8k',
    area: 'Batla House',
    hobbies: ['Gym', 'Reading'],
    studyHabits: 'Early Morning',
    smokingPreference: 'Non-Smoker',
    tags: ['Fitness Freak', 'Clean Freak'],
    initials: 'ZK',
    gender: 'Male'
  },
  {
    id: 4,
    name: 'Sana Malik',
    course: 'B.Arch',
    year: '4th Year',
    age: 22,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    isOnline: true,
    budget: '₹7k - ₹9k',
    area: 'Zakir Nagar',
    hobbies: ['Art', 'Music'],
    studyHabits: 'Late Night',
    smokingPreference: 'Non-Smoker',
    tags: ['Creative', 'Chill'],
    initials: 'SM',
    gender: 'Female'
  }
];
