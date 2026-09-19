export type ServiceData = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  capabilities: string[];
};

export const services: ServiceData[] = [
  {
    id: 'financial-consultancy',
    name: 'Financial Consultancy',
    slug: 'financial-consultancy',
    shortDescription:
      'Business and financial advisory support for informed planning and stronger operational decisions.',
    fullDescription:
      'Our financial consultancy service helps businesses and organisations strengthen decision-making through practical advisory support, structured planning, and disciplined financial thinking. We support clients in evaluating opportunities, identifying risk, and improving operational clarity for long-term stability and growth.',
    icon: 'briefcase-business',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Business and financial planning',
      'Performance review and strategic insight',
      'Operational decision support',
      'Risk awareness and commercial guidance',
    ],
  },
  {
    id: 'import-export',
    name: 'Import & Export',
    slug: 'import-export',
    shortDescription:
      'Trade support for sourcing, supplier coordination, and practical market access.',
    fullDescription:
      'We provide import and export support that helps align supply with demand across trade activities. Through practical coordination and partnership-focused execution, we create a smoother path for sourcing, movement, and market access in a changing commercial environment.',
    icon: 'globe-2',
    image:
      'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Trade coordination and market entry support',
      'Supplier and buyer engagement',
      'Cargo and shipment readiness planning',
      'Cross-border commercial facilitation',
    ],
  },
  {
    id: 'logistics-supply',
    name: 'Logistics & Supply',
    slug: 'logistics-supply',
    shortDescription:
      'Supply coordination, delivery planning, and dependable goods movement solutions.',
    fullDescription:
      'Our logistics and supply service is built around continuity, timing, and dependable execution. We support organisations with the movement of goods, coordination of resources, and practical supply planning that keeps operations moving efficiently and predictably.',
    icon: 'truck',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Goods movement and delivery coordination',
      'Supply chain planning support',
      'Inventory and resource alignment',
      'Operational continuity solutions',
    ],
  },
  {
    id: 'software-development',
    name: 'Software Development',
    slug: 'software-development',
    shortDescription:
      'Digital solutions designed to streamline processes and improve business performance.',
    fullDescription:
      'We develop practical digital solutions tailored to real operational needs. From workflow improvement to business process automation, our software development approach focuses on dependable systems that help organisations become more efficient, responsive, and scalable.',
    icon: 'workflow',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Business workflow applications',
      'Operational systems and automation',
      'Digital process design',
      'Technology-enabled business support',
    ],
  },
  {
    id: 'building-construction',
    name: 'Building & Construction',
    slug: 'building-construction',
    shortDescription:
      'Structured support for projects, infrastructure needs, and execution-focused development work.',
    fullDescription:
      'Our building and construction service supports quality-led project execution across a wide range of infrastructure and development requirements. We focus on structured delivery, disciplined coordination, and practical execution that supports value, reliability, and long-term performance.',
    icon: 'building-2',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Project planning and execution support',
      'Infrastructure and site coordination',
      'Quality-focused construction oversight',
      'Materials and project delivery management',
    ],
  },
  {
    id: 'general-merchant',
    name: 'General Merchant',
    slug: 'general-merchant',
    shortDescription:
      'Commercial trading support that connects supply with demand across product categories.',
    fullDescription:
      'Our general merchant service supports commercial exchange and market readiness across diverse product categories. We help bridge supply and demand in a way that is practical, responsive, and aligned with the realities of the market, creating opportunity for efficient trade and business continuity.',
    icon: 'package',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Commercial trading support',
      'Product sourcing and market alignment',
      'Demand and supply matching',
      'Trade-ready business coordination',
    ],
  },
  {
    id: 'real-estate-development',
    name: 'Real Estate Development',
    slug: 'real-estate-development',
    shortDescription:
      'Property and development opportunities aligned with strategic growth and long-term value.',
    fullDescription:
      'Our real estate development focus is centred on strategic value creation, long-term growth, and thoughtful opportunity assessment. We approach property development through a business lens, balancing commercial potential, sustainable planning, and partnership readiness in a changing market.',
    icon: 'shield-check',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Property opportunity assessment',
      'Strategic development planning',
      'Growth-focused land and asset thinking',
      'Partnership and investment readiness',
    ],
  },
];
