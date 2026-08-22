const rawProjects = [
  {
    id: 1,
    title: 'Metropolitan Museum of Contemporary Art',
    category: 'Architecture',
    subCategory: 'Institutional',
    location: 'MADRID, SPAIN',
    year: '2024',
    typology: 'Museum',
    status: 'Completed',
    desc: 'A bright, geometric white building with manicured landscaping.',
    thumbnail: '/residence.png',
    images: ['/residence.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v16H4z"/><path d="M4 12h16"/><path d="M12 4v16"/><path d="M4 4l16 16"/><path d="M20 4L4 20"/></svg>`
  },
  {
    id: 2,
    title: 'Quantum Computing Research Institute',
    category: 'Architecture',
    subCategory: 'Work',
    location: 'ZURICH, SWITZERLAND',
    year: '2025',
    typology: 'Research',
    status: 'In Design',
    desc: 'A modern wood and glass modular building overlooking a mountain lake.',
    thumbnail: '/highrise.png',
    images: ['/highrise.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/></svg>`
  },
  {
    id: 3,
    title: 'Sustainable Urban Park and Pavilion',
    category: 'Landscape',
    subCategory: null,
    location: 'SEATTLE, USA',
    year: '2023',
    typology: 'Pavilion',
    status: 'Completed',
    desc: 'An organic-shaped timber pavilion surrounded by green space with a city skyline in the background.',
    thumbnail: '/landscape.png',
    images: ['/landscape.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M12 22V12"/><path d="M12 12L7 5h10l-5 7z"/></svg>`
  },
  {
    id: 4,
    title: 'The Vertex Residential Tower',
    category: 'Architecture',
    subCategory: 'Residential',
    location: 'NEW YORK, USA',
    year: '2026',
    typology: 'Residential',
    status: 'Under Construction',
    desc: 'A super-tall, ultra-slender skyscraper with interlocking geometric balconies.',
    thumbnail: '/highrise.png',
    images: ['/highrise.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16"/><path d="M4 12h16"/><path d="M12 4v16"/></svg>`
  },
  {
    id: 5,
    title: 'Biophilic Headquarters',
    category: 'Architecture',
    subCategory: 'Work',
    location: 'TOKYO, JAPAN',
    year: '2022',
    typology: 'Office',
    status: 'Completed',
    desc: 'An office building integrating lush vegetation into its facade and open-air atriums.',
    thumbnail: '/residence.png',
    images: ['/residence.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 4v16"/><path d="M4 12h16"/></svg>`
  },
  {
    id: 6,
    title: 'Nordic Healthcare Center',
    category: 'Architecture',
    subCategory: 'Health',
    location: 'OSLO, NORWAY',
    year: '2024',
    typology: 'Hospital',
    status: 'In Design',
    desc: 'A serene healthcare facility focused on natural light and timber finishes to promote healing.',
    thumbnail: '/landscape.png',
    images: ['/landscape.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><rect x="8" y="8" width="8" height="8"/></svg>`
  },
  {
    id: 7,
    title: 'Desert Oasis Villa',
    category: 'Architecture',
    subCategory: 'Residential',
    location: 'DUBAI, UAE',
    year: '2025',
    typology: 'Villa',
    status: 'Under Construction',
    desc: 'A private residence featuring rammed earth walls and massive cantilevered shades.',
    thumbnail: '/residence.png',
    images: ['/residence.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M12 3l9 9-9 9-9-9 9-9z"/></svg>`
  },
  {
    id: 8,
    title: 'Floating Market Plaza',
    category: 'Landscape',
    subCategory: null,
    location: 'AMSTERDAM, NETHERLANDS',
    year: '2023',
    typology: 'Public Space',
    status: 'Completed',
    desc: 'A network of floating wooden platforms creating a new public square on the canals.',
    thumbnail: '/landscape.png',
    images: ['/landscape.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14c2-2 6-2 8 0s6 2 8 0M4 18c2-2 6-2 8 0s6 2 8 0"/></svg>`
  },
  {
    id: 9,
    title: 'Modular Furniture System',
    category: 'Products',
    subCategory: null,
    location: 'MILAN, ITALY',
    year: '2021',
    typology: 'Furniture',
    status: 'Completed',
    desc: 'An adaptive seating system designed for high-traffic public interiors.',
    thumbnail: '/residence.png',
    images: ['/residence.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="8"/><path d="M6 16v4M18 16v4"/></svg>`
  },
  {
    id: 10,
    title: 'Aero Minimalist Lighting',
    category: 'Interior',
    subCategory: null,
    location: 'COPENHAGEN, DENMARK',
    year: '2022',
    typology: 'Lighting',
    status: 'Completed',
    desc: 'A collection of suspended acoustic light fixtures for modern offices.',
    thumbnail: '/highrise.png',
    images: ['/highrise.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M12 12v8M8 20h8"/></svg>`
  },
  {
    id: 11,
    title: 'Sankt Lukas Hospice and Lukashuset',
    category: 'Architecture',
    subCategory: 'Health',
    location: 'HELLERUP, DENMARK',
    year: '2023',
    typology: 'Healthcare',
    status: 'Completed',
    desc: 'A serene and compassionate hospice facility built with warm bricks and natural materials.',
    thumbnail: '/residence.png',
    images: ['/residence.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`
  },
  {
    id: 12,
    title: 'Claremont McKenna College',
    category: 'Architecture',
    subCategory: 'Institutional',
    location: 'CLAREMONT, UNITED STATES',
    year: '2025',
    typology: 'Education',
    status: 'Under Construction',
    desc: 'An innovative integrated sciences center fostering collaboration across disciplines.',
    thumbnail: '/landscape.png',
    images: ['/landscape.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
  },
  {
    id: 13,
    title: 'Oceanix City Prototype',
    category: 'Architecture',
    subCategory: 'Residential',
    location: 'BUSAN, SOUTH KOREA',
    year: '2026',
    typology: 'Urban Planning',
    status: 'In Design',
    desc: 'A sustainable floating city prototype designed to adapt to rising sea levels.',
    thumbnail: '/highrise.png',
    images: ['/highrise.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
  },
  {
    id: 14,
    title: 'Google Bay View Campus',
    category: 'Architecture',
    subCategory: 'Work',
    location: 'MOUNTAIN VIEW, USA',
    year: '2022',
    typology: 'Office',
    status: 'Completed',
    desc: 'An expansive office campus beneath sweeping, dragonscale solar canopy roofs.',
    thumbnail: '/landscape.png',
    images: ['/landscape.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`
  },
  {
    id: 15,
    title: 'Vestre Fjord Park',
    category: 'Landscape',
    subCategory: null,
    location: 'AALBORG, DENMARK',
    year: '2017',
    typology: 'Park',
    status: 'Completed',
    desc: 'A vibrant recreational landscape bridging the city and the fjord.',
    thumbnail: '/residence.png',
    images: ['/residence.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`
  },
  {
    id: 16,
    title: 'Via 57 West',
    category: 'Architecture',
    subCategory: 'Residential',
    location: 'NEW YORK, USA',
    year: '2016',
    typology: 'Housing',
    status: 'Completed',
    desc: 'A striking tetrahedron-shaped residential building bringing the European courtyard to Manhattan.',
    thumbnail: '/highrise.png',
    images: ['/highrise.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 22 22 22"/></svg>`
  },
  {
    id: 17,
    title: 'Sluishuis',
    category: 'Architecture',
    subCategory: 'Residential',
    location: 'AMSTERDAM, NETHERLANDS',
    year: '2022',
    typology: 'Housing',
    status: 'Completed',
    desc: 'A contemporary reinterpretation of the Amsterdam courtyard typology built over the water.',
    thumbnail: '/landscape.png',
    images: ['/landscape.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    id: 18,
    title: 'Tirpitz Museum',
    category: 'Architecture',
    subCategory: 'Institutional',
    location: 'BLÅVAND, DENMARK',
    year: '2017',
    typology: 'Museum',
    status: 'Completed',
    desc: 'A hidden museum seamlessly integrated into the coastal dune landscape.',
    thumbnail: '/residence.png',
    images: ['/residence.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`
  },
  {
    id: 19,
    title: 'Amager Bakke (CopenHill)',
    category: 'Architecture',
    subCategory: 'Institutional',
    location: 'COPENHAGEN, DENMARK',
    year: '2019',
    typology: 'Power Plant',
    status: 'Completed',
    desc: 'A waste-to-energy plant with an artificial ski slope and recreational park on its roof.',
    thumbnail: '/highrise.png',
    images: ['/highrise.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
  },
  {
    id: 20,
    title: 'Serpentine Pavilion',
    category: 'Architecture',
    subCategory: 'Institutional',
    location: 'LONDON, UNITED KINGDOM',
    year: '2016',
    typology: 'Pavilion',
    status: 'Completed',
    desc: 'An unzipped wall structure created from stacked fiberglass frames.',
    thumbnail: '/landscape.png',
    images: ['/landscape.png'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  }
];

export const DUMMY_CREDITS = {
  creativeDirector: "Bjarke Ingels",
  partnerInCharge: "Leon Rost",
  projectManager: "Aran Coakley",
  team: [
    "Abigail Meyer", "Ahmad Tabbakh", "Alan Maedo", 
    "Alex Wu", "Ana Luisa Pedreira", "Beat Schenk"
  ],
  collaborators: [
    "Saiful Bouquet", "Acco Engineered Systems", "Atlas Civil Design", 
    "MRY", "Rosendin Electric", "WSP USA"
  ]
};

export const DUMMY_EXTRA_TEXTS = {
  0: "The building's form emerges as a linear volume that is manipulated in configuration responding to the surrounding campus context. The staggered volumes frame shaded outdoor spaces.",
  2: "Materiality plays a central role in the design, with exposed concrete and natural wood fostering a sense of grounded elegance. Expansive glass panels blur the boundary between inside and out.",
  5: "This gorgeous architecture amplifies and elevates a revolutionary vision for higher learning at a critical moment. We can no longer rely on siloed disciplines to meet the challenges and opportunities of our time.",
  8: "The beautiful finishes and spectacular public art inspire our humanism. This is a carved jewel for the city. A gem for the ages."
};

export const DUMMY_PROJECTS = rawProjects.map(project => {
  const images = [project.thumbnail];
  // Add 10 dummy gallery images per project
  for (let i = 1; i <= 10; i++) {
    const width = (i % 3 === 0) ? 800 : 1200; // mix of portrait and landscape
    const height = (i % 3 === 0) ? 1200 : 800;
    images.push(`https://picsum.photos/seed/${project.id * 100 + i}/${width}/${height}`);
  }
  
  // Assign texts at random intervals (like after 1 image, then 3 images, etc)
  const texts = { ...DUMMY_EXTRA_TEXTS };

  return { ...project, images, texts };
});
