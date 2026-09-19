export type CompanyService = {
  name: string;
  slug: string;
  description: string;
};

export type CompanyValue = {
  title: string;
  description: string;
};

export const company = {
  name: 'First Dest Company Limited',
  address: 'Adenta Taxi Rank, Near ECG Substation, Accra, Ghana',
  email: 'info@firstdestltd.com',
  phone: '0598925563',
  phoneHref: '+233598925563',
  companyOverview:
    'First Dest Company Limited is a business focused on practical service delivery across multiple operating areas.',
  mission:
    'To provide practical, value-focused solutions across our business areas while building lasting relationships with clients, partners, and stakeholders.',
  vision:
    'To grow as a trusted business known for practical execution, dependable service, and sustainable value creation in Ghana.',
  services: [
    {
      name: 'Financial Consultancy',
      slug: 'financial-consultancy',
      description:
        'Practical financial guidance and strategic support for business planning and sound decision-making.',
    },
    {
      name: 'Import and Export',
      slug: 'import-export',
      description:
        'Trade facilitation and market access through reliable sourcing, movement, and international coordination.',
    },
    {
      name: 'Logistics and Supply',
      slug: 'logistics-supply',
      description:
        'Efficient movement of goods and dependable supply chain management that supports timely delivery.',
    },
    {
      name: 'Software Development',
      slug: 'software-development',
      description:
        'Digital solutions designed to improve processes, productivity, and the customer experience.',
    },
    {
      name: 'Building and Construction',
      slug: 'building-construction',
      description:
        'Quality infrastructure development grounded in project discipline, materials management, and execution.',
    },
    {
      name: 'General Merchant',
      slug: 'general-merchant',
      description:
        'Trading and commerce activities that connect supply with demand across various product categories.',
    },
    {
      name: 'Real Estate Development',
      slug: 'real-estate-development',
      description:
        'Strategic property and development initiatives that support growth, urban value, and sustainable investment.',
    },
  ] as CompanyService[],
  values: [
    {
      title: 'Integrity',
      description: 'We operate with honesty, accountability, and responsible business conduct in every engagement.',
    },
    {
      title: 'Professionalism',
      description: 'We uphold strong standards, clear communication, and disciplined execution in all we do.',
    },
    {
      title: 'Innovation',
      description: 'We embrace practical ideas and modern approaches that improve service and performance.',
    },
    {
      title: 'Reliability',
      description: 'We deliver on commitments, support continuity, and build trust through dependable service.',
    },
    {
      title: 'Customer Focus',
      description: 'We listen carefully, understand real needs, and tailor solutions to create lasting value.',
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships grounded in mutual respect, trust, and shared progress.',
    },
  ] as CompanyValue[],
} as const;
