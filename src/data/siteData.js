// All editable site content lives here. Swap copy, images, and links
// without touching component logic.

export const brand = {
  name: 'Sheetal ',
  src: '/assets/sheetal_group_logo.png',
  fullName: 'Sheetal Group',
  tagline: 'Spaces built around life.',
  phone: '+91 7000135551',
}

// export const navLinks = [
//   { label: 'About Us', href: '/about' },
//   { label: 'Projects', href: '/projects' },  // was '#featured-projects'
//   { label: 'Amenities', href: '#amenities' },
//   { label: 'Locations', href: '#locations' },
//   { label: 'Contact', href: '#contact' },
// ]


export const navLinks = [
  { label: 'About Us', type: 'page', to: '/about' },
  { label: 'Projects', type: 'page', to: '/projects' },
  // { label: 'Amenities', type: 'section', id: 'press' },
  { label: 'Amenities', type: 'page', to: '/amenities' },
  { label: 'Locations', type: 'section', id: 'locations' },
  // { label: 'Contact', type: 'section', id: 'contact' },
  { label: 'Contact', type: 'page', to: '/contact' },
]

export const heroSlides = [
  {
    id: 1,
    location: 'INFRONT OF INDIAN OIL, ROAD, Devtola, Balaghat',
    headline: 'Thoughtfully Planned Living, Rooted in Balaghat',
    subcopy:
      'Build something that lasts. A home your family will grow into. A legacy you\'ll be proud of',
    image: '/assets/laxuriya/sheetal_laxuriya.webp',
    logo: '/assets/sheetal-luxuria-logo-bright.png',
  },
  {
    id: 2,
    location: 'Waraseoni road, Garra, Balaghat',
    headline: 'Real Estate Built Around the Way Balaghat Lives',
    subcopy:
      'From the skyline to the smallest fitting, every Sheetal address is considered end to end.',
    image: '/assets/vatika/gate-2.webp',
    logo: '/assets/sheetal-vatika-logo-dark.png',
  },
  {
    id: 3,
    location: 'Lalburra, Balaghat',
    headline: 'Homes and Townships Designed for Balaghat\'s Next Chapter',
    subcopy:
      'Sustainable construction and community-first planning, designed to last for decades.',
    image: '/assets/vihar/gate.webp',
    logo: '/assets/sheetal-vihar-logo-dark.png',
  },
  {
    id: 4,
    location: 'katangi, Madhya Pradesh',
    headline: 'Homes and Townships Designed for Balaghat\'s Next Chapter',
    subcopy:
      'Sustainable construction and community-first planning, designed to last for decades.',
    image: '/assets/regalia/gate_view_jpg.webp',
    logo: '/assets/regalia-logo-bright.png',
  },
];

export const values = [
  {
    id: 'quality',
    label: 'Quality',
    image:
      'https://media.istockphoto.com/id/1219696617/photo/aerial-shot-of-building-under-construction-with-crane-at-the-top.webp?a=1&b=1&s=612x612&w=0&k=20&c=G2FE4vC2BehNgjbCjVuFm4Get3C76sQhwz_O-FXb1Vo=',
  },
  {
    id: 'community',
    label: 'Community',
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'design',
    label: 'Thoughtful Design',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'Long-Term Value',
    label: 'Long-Term Value',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
  },
]

export const featuredProjects = [
  {
    id: 1,
    name: 'Sheetal laxuriya',
    location: 'INFRONT OF INDIAN OIL, ROAD, Devtola, Balaghat',
    price: 'INR 95 L onwards',
    possession: 'Possession June 2028',
    config: '2 & 3 BHK',
    image:
      "/assets/laxuriya/sheetal_laxuriya.webp",
  },
  {
    id: 2,
    name: 'Sheetal Regalia',
    location: 'katangi, Madhya Pradesh',
    price: 'INR 1.62 Cr. onwards',
    possession: 'Possession January 2027',
    config: '1, 2 & 3 BHK',
    image: "/assets/regalia/gate_view_jpg.webp",
  },

  {
    id: 3,
    name: 'Sheetal Vihar',
    location: 'lalburra, Balaghat',
    price: 'INR 2.4 Cr. onwards',
    possession: 'Possession March 2027',
    config: '2 & 3 BHK',
    image:
      '/assets/vihar/gate.webp',
  },
  {
    id: 4,
    name: 'Sheetal Vatika',
    location: ' Waraseoni road, Garra, Balaghat',
    price: 'INR 2.4 Cr. onwards',
    possession: 'Possession March 2027',
    config: '2,3 & 4 BHK',
    image:
      '/assets/vatika/gate-2.webp',
  },
  {
    id: 5,
    name: 'Dharam Greens',
    location: 'Nawegaon, Balaghat',
    price: 'INR 2.4 Cr. onwards',
    possession: 'Possession March 2027',
    config: '2 & 3 BHK',
    image:
      '/assets/dharamgreens/gate.webp',
  },
]

export const locations = [
  'Garra',
  'Katangi',
  'Balaghat',
  'Lalbarra',
]

export const pressReleases = [
  {
    id: 1,
    title:
      'Indoor Play Area for Children',
    
    image:
      '/assets/laxuriya/idore_games-1.webp',
  },
  {
    id: 2,
    title:
      'Premium Swimming Pool',
    image:
      '/assets/dharamgreens/swimming-pool.webp',
  },
  {
    id: 3,
    title:
      'Lush Green Garden',
    date: '02 January, 2026',
    image:
      '/assets/vihar/garden.webp',
  },
]

export const footerColumns = [
  {
    title: 'Know Us',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Amenities', to: '/amenities' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { label: 'Sheetal Vatika', to: '/projects/1' },
      { label: 'Sheetal Regalia', to: '/projects/2' },
      { label: 'Sheetal Luxuriya', to: '/projects/3' },
      { label: 'Sheetal Vihar', to: '/projects/4' },
      { label: 'Dharam Greens', to: '/projects/5' },
    ],
  },
]

export const aboutUs = {
  heading: 'Building With Intention, Not Just Speed',
  body: 'Shree Sheetal is a real estate developer in Balaghat focused on residential townships, premium plots, and luxury villas that are planned to hold their value over time. Every project reflects careful site planning, honest construction practices, and an understanding of how families in Balaghat actually want to live — not a template borrowed from a larger city. From Sheetal Vihar to Dharam Greens, each development is built to fit the needs of the community around it.',
  image:
    'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80',
  stats: [
    { label: 'Years of Excellence', value: '7+' },
    { label: 'Happy Families', value: '50+' },
    { label: 'Projects', value: '5+' },
    { label: 'Cities & Towns Present', value: '4' },
  ],
}

export const aboutPage = {
  hero: {
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    subNav: ['About Us', 'Leadership', 'Sustainability', 'Design'],
  },
  about: {
    heading: 'About Shree Shetal Properties',
    paragraphs: [
      "At Shree Sheetal, we're guided by a simple idea — build spaces around the lives that will actually be lived in them. Every project, from a single residential plot to a complete township, begins with that thinking.",

      "As a Balaghat-based real estate developer, we focus on residential townships, premium plots, and luxury villas designed for long-term living rather than quick turnover. Every decision is made with the needs of local families in mind.",

      "Our approach is built on a few lasting principles: thoughtful planning, quality construction, transparent dealings, and a deep understanding of how people in Balaghat want to live—not layouts copied from larger cities and adapted without purpose.",

      "This philosophy is reflected in developments such as Sheetal Vihar and Dharam Greens, where every community is planned according to its location, surroundings, and future residents instead of following a one-size-fits-all template.",

      "Behind every project is a dedicated team that remains involved well beyond the sale. We understand that buying a home is one of the most important decisions a family makes, and we believe that responsibility continues long after the keys are handed over.",
    ],
  },
  purpose: {
    heading: 'Our Purpose',
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80',
    tagline:
      'Building Around the Lives That Will Be Lived Here',
    body: 'Every Shree Sheetal project starts with the people who\'ll actually live there — their daily routines, their need for space, and their long-term sense of belonging. That\'s the thread running through every residential township in Balaghat we plan, from first layout sketch to final handover.',
  },
}

// icon keys map to lucide-react components inside WhyChooseUs.jsx
export const trustPillars = [
  {
    icon: 'planning',
    title: 'Thoughtfully Planned Developments',
    desc: 'Every layout is planned around how the space will actually be used, not just how it looks on paper.',
  },
  {
    icon: 'quality',
    title: 'Commitment to Quality',
    desc: 'Construction practices and material choices are chosen for durability, not just initial appearance.',
  },
  {
    icon: 'customer',
    title: 'Customer-Focused Approach',
    desc: 'Buyers are kept informed at each stage, with a team that’s reachable — not just at the point of sale.',
  },
  {
    icon: 'lifestyle',
    title: 'Modern Lifestyle Planning',
    desc: 'Layouts are designed with today\'s family needs in mind — space, light, and practical movement through the home.',
  },
  {
    icon: 'investment',
    title: 'Long-Term Property Value',
    desc: 'Projects are positioned to hold their value over time, supporting Balaghat as a genuine investment destination.',
  },
  {
    icon: 'location',
    title: 'Local Understanding of Balaghat',
    desc: 'As a Balaghat-based developer, Shree Sheetal plans around the realities of the local market rather than a copied city template.',
  },
]

// icon keys map to lucide-react components inside TownshipAmenities.jsx
export const townshipAmenities = [
  { icon: 'waves', label: 'Swimming Pool' },
  { icon: 'dumbbell', label: 'Fitness Center' },
  { icon: 'trees', label: 'Landscaped Gardens' },
  { icon: 'shield', label: '24x7 Security' },
  { icon: 'car', label: 'Ample Parking' },
  { icon: 'gamepad', label: 'Kids\u2019 Play Area' },
  { icon: 'users', label: 'Clubhouse' },
  { icon: 'zap', label: 'Power Backup' },
]

export const contactInfo = {
  email: 'shrisheetalinfrasolutionsllp@gmail.com',
  address: '2nd floor Shreeji mall mahivir chowk balaghat',
}












// src/data/siteData.js — add this
export const allProjects = [
  // Add these fields to each project object in allProjects


  {
    id: 1,
    name: 'Sheetal Vatika',
    location: ' Waraseoni road, Garra, Balaghat',
    price: 'INR 2.4 Cr. onwards',
    possession: 'Mar 2027',
    config: '2, 3 & 4 BHK',
    status: 'Ready to Move',
    image: '/assets/vatika/gate-2.webp',
    overviewTagline: 'Premium office spaces designed for tomorrow’s enterprises.',
    overviewImage: '/assets/vatika/house.webp',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.207009947598!2d80.1488734!3d21.8109312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a5922c31f437b%3A0x7ee16ebaa891ef7f!2sSheetal%20Vatika!5e0!3m2!1sen!2sin!4v1785515999543!5m2!1sen!2sin',

   neighbourhood: [
  { icon: 'Bus', label: 'Balaghat Bus Stand', distance: '4.5 km' },
  { icon: 'MapPinned', label: 'Garra Chowk', distance: '400 m' },
  { icon: 'MapPin', label: 'Ambedkar Chowk', distance: '4.5 km' },
  { icon: 'GraduationCap', label: 'Sardar Patel University', distance: '4.5 km' },
],
    amenities: {
      items: [
        { icon: 'waves', label: 'Swimming Pool',  image: '/assets/vatika/cricket.webp' },
        { icon: 'dumbbell', label: 'Fitness Center', image: '/assets/vatika/basketball.webp' },
        { icon: 'coffee', label: 'Wellness Cafe', image: '/assets/vatika/temple.webp' },
      ],
      image:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=80',
    },

    gallery: [
      '/assets/vatika/houses.webp',
      '/assets/vatika/locality.webp',
      '/assets/vatika/temple.webp',
      '/assets/vatika/cricket.webp',
      '/assets/vatika/basketball.webp',
      '/assets/vatika/gate-2.webp',
      "/assets/vatika/badminton.webp",
      "/assets/vatika/garden-1.webp",
      "/assets/vatika/garden-2.webp",
      "/assets/vatika/houses.webp",
      "/assets/vatika/noght-view.webp",
      "/assets/vatika/play-area.webp",
      "/assets/vatika/house-1.png",
      "/assets/vatika/house-2.png",
      "/assets/vatika/house-3.png",
      "/assets/vatika/house-4.png",
      "/assets/vatika/garden-3.png",
      "/assets/vatika/table-tanis.png",
      "/assets/vatika/tank-1.png",
      "/assets/vatika/tank-2.png",
      "/assets/vatika/tank-3.png",
      "/assets/vatika/tank-3.png",
      "/assets/vatika/vatika-name.png",
      // "/assets/vatika/",
      
    ],

    videos: [
      {
        url: "/assets/vatika/DJI_0316.MP4",
        thumbnail: "/assets/vatika/cricket.webp",
        title: "Project Walkthrough",
      },

    ],
  },

  {
    id: 2,
    name: 'Sheetal Regalia',
    location: 'katangi, Madhya Pradesh',
    price: 'INR 1.62 Cr. onwards',
    possession: 'Jan 2027',
    config: '1, 2 & 3 BHK',
    status: 'Under Construction',
    image: "/assets/regalia/gate_view_jpg.webp",

    // ↓ new fields for detail page
    overviewTagline: 'A home where every sunrise feels like a fresh start.',
    overviewImage: "/assets/regalia/day_view.webp",

    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3705.6367213431236!2d79.79791999999999!3d21.755605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ1JzIwLjIiTiA3OcKwNDcnNTIuNSJF!5e0!3m2!1sen!2sin!4v1785747719917!5m2!1sen!2sin',

neighbourhood: [
  { icon: 'School', label: 'Government School Katangi', distance: '1.5 km' },
  { icon: 'Bus', label: 'Bus Stand Katangi', distance: '2.5 km' },
  { icon: 'Hospital', label: 'Government Hospital Katangi', distance: '2.1 km' },
  { icon: 'Route', label: 'Tumsar Road', distance: '100 m' },
],

    amenities: {
      items: [
        { icon: 'waves', label: 'Swimming Pool', image: '/assets/regalia/garden.webp' },
        { icon: 'dumbbell', label: 'Fitness Center', image: '/assets/regalia/day_view.webp' },
        { icon: 'coffee', label: 'Wellness Cafe', image: '/assets/regalia/night_view.webp' },
        { icon: 'sparkles', label: 'Spa & Hydrotherapy', image: '/assets/regalia/park_view.webp' },
        { icon: 'activity', label: 'Yoga Studio', image: '/assets/regalia/park_view.webp' },
      ],

      image:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=80',
    },

    gallery: [
      "/assets/regalia/day_view.webp",
      "/assets/regalia/night_view.webp",
      "/assets/regalia/garden.webp",
      "/assets/regalia/park_view.webp",
      "/assets/regalia/showcase.webp",
      "/assets/regalia/showcase-2.webp",
      "/assets/regalia/showcase-3.webp",
      "/assets/regalia/showcase-4.webp",
      "/assets/regalia/showcase-5.webp",
      "/assets/regalia/showcase-6.webp",
      "/assets/regalia/showcase-7.webp",
    ],

    videos: [
      {
        url: "https://www.instagram.com/reel/Cttor7wram9/",
        thumbnail: "/assets/regalia/showcase-2.webp",
        title: "Project Walkthrough",
      }
    ],
  },
  {
    id: 3,
    name: 'Sheetal laxuriya',
    location: 'INFRONT OF INDIAN OIL, ROAD, Devtola, Balaghat',
    price: 'INR 95 L onwards',
    possession: 'Jun 2028',
    config: '2 & 3 BHK',
    status: 'Under Construction',
    image: "/assets/laxuriya/sheetal_laxuriya.webp",
    overviewTagline: 'Wake up to tranquil lakeside living in the heart of Pune.',
    overviewImage: '/assets/laxuriya/sheetal_laxuriya_pool.webp',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.7928089995107!2d80.20892649999999!3d21.8269348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a5b9c87628f19%3A0x4aeb52d55ab37245!2sSHEETAL%20LUXURIA!5e0!3m2!1sen!2sin!4v1785516347576!5m2!1sen!2sin',

   neighbourhood: [
  { icon: 'School', label: 'Ojas School', distance: '350 m' },
  { icon: 'Fuel', label: 'Indian Oil Petrol Pump', distance: '400 m' },
  { icon: 'Bus', label: 'Bus Stand Balaghat', distance: '3.5 km' },
  { icon: 'MapPinned', label: 'Hanuman Chowk Balaghat', distance: '4 km' },
],
    amenities: {
      items: [
        { icon: 'waves', label: 'Swimming Pool', image: '/assets/laxuriya/sheetal_laxuriya_pool.webp' },
        { icon: 'dumbbell', label: 'Fitness Center', image: '/assets/laxuriya/gym-1.webp' },
        { icon: 'coffee', label: 'Wellness Cafe', image: '/assets/laxuriya/gym-3.webp' },
        { icon: 'sparkles', label: 'Spa & Hydrotherapy', image: '/assets/laxuriya/gym-5.webp' },
        { icon: 'activity', label: 'Yoga Studio', image: '/assets/laxuriya/idore_games-2.webp' },
      ],
      image:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=80',
    },

    gallery: [
      "/assets/laxuriya/gym-2.webp",
      "/assets/laxuriya/gym_entrance.webp",
      "/assets/laxuriya/idore_games-1.webp",
      "/assets/laxuriya/idore_games-2.webp",
    ],

    videos: [
      {
        url: "https://www.instagram.com/reel/Cttor7wram9/",
        thumbnail: "/assets/laxuriya/sheetal_laxuriya.webp",
        title: "Project Walkthrough",
      }
    ],
  },

  {
    id: 4,
    name: 'Sheetal Vihar',
    location: 'Lalbarra, Balaghat',
    price: 'INR 3.1 Cr. onwards',
    possession: 'Dec 2028',
    config: '3 & 4 BHK',
    status: 'Under Construction',
    image: '/assets/vihar/gate2.webp',
    overviewTagline: 'Elevated living with breathtaking skyline views.',
    overviewImage: '/assets/vihar/locality.webp',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.115367108189!2d80.05651259999999!3d21.9301159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2af5f2d7856b3b%3A0x620c54b1224e6594!2sSheetal%20vihar%20lalbarra!5e0!3m2!1sen!2sin!4v1785515539336!5m2!1sen!2sin',
neighbourhood: [
  { icon: 'Pill', label: 'Oriental Pharmacy College', distance: '240 m' },
  { icon: 'Bus', label: 'Bus Stand Lalburra', distance: '1.7 km' },
  { icon: 'GraduationCap', label: 'Government College Lalburra', distance: '1.8 km' },
  { icon: 'Hospital', label: 'Government Hospital', distance: '1.8 km' },
],
    amenities: {
      items: [
        { icon: 'waves', label: 'Swimming Pool', image:'/assets/vihar/swimming-pool.webp'  },
        { icon: 'dumbbell', label: 'Fitness Center', image:'/assets/vihar/garden.webp' },
        { icon: 'coffee', label: 'Wellness Cafe', image:'/assets/vihar/play-area.webp'},
        { icon: 'sparkles', label: 'Spa & Hydrotherapy' },
        { icon: 'activity', label: 'Yoga Studio' },
      ],
      image:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=80',
    },

    gallery: [
      '/assets/vihar/gate2.webp',
      '/assets/vihar/day-view.webp',
      '/assets/vihar/gate.webp',
      '/assets/vihar/night-view.webp',
      '/assets/vihar/play-area.webp',
    ],
    videos: [
      {
        url: "https://www.instagram.com/reel/Cttor7wram9/",
        thumbnail: "/assets/vatika/basketball.webp",
        title: "Project Walkthrough",
      }
    ],
  },
  {
    id: 5,
    name: 'Dharam Greens',
    location: ' Nawegaon, Balaghat',
    price: 'INR 78 L onwards',
    possession: 'Sep 2027',
    config: '2 BHK',
    status: 'Under Construction',
    image: '/assets/dharamgreens/gate_compressed.webp',
    overviewTagline: 'Thoughtfully crafted homes surrounded by lush greenery.',
    overviewImage: '/assets/dharamgreens/tempel.webp',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.7658298205333!2d80.2072455!3d21.789322199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a5b00462db5f9%3A0x1257c7ac6c705c22!2sDharam%20Greens!5e0!3m2!1sen!2sin!4v1785516556414!5m2!1sen!2sin',

    neighbourhood: [
  { icon: 'MapPinned', label: 'Hanuman Chowk', distance: '3.7 km' },
  { icon: 'Train', label: 'Railway Station', distance: '3.2 km' },
  { icon: 'MapPin', label: 'Ambedkar Chowk', distance: '4.8 km' },
  { icon: 'Bus', label: 'Bus Stand Balaghat', distance: '5.4 km' },
],
    amenities: {
      items: [
        { icon: 'waves', label: 'Swimming Pool', image:'/assets/dharamgreens/swimming-pool.webp' },
        { icon: 'dumbbell', label: 'Fitness Center', image:'/assets/dharamgreens/tempel.webp' },
        { icon: 'coffee', label: 'Wellness Cafe' },
        { icon: 'sparkles', label: 'Spa & Hydrotherapy' },
        { icon: 'activity', label: 'Yoga Studio' },
      ],
      image:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=80',
    },

    gallery: [
      '/assets/dharamgreens/garden.webp',
      '/assets/dharamgreens/tempel.webp',
     
    ],
    videos: [
      {
        url: "https://www.instagram.com/reel/Cttor7wram9/",
        thumbnail: "/assets/vatika/basketball.webp",
        title: "Project Walkthrough",
      },
      {
        url: "https://www.instagram.com/reel/DQerpvljCMr/",
        thumbnail: "/assets/vatika/basketball.webp ",
        title: "Project Walkthrough",
      }
    ],
  },
  
]