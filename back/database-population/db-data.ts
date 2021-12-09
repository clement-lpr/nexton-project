export const BUSINESS_UNITS = {
  1: {
    id: 1,
    name: 'ENERGY',
  },
  2: {
    id: 2,
    name: 'MEDIA',
  },
  3: {
    id: 3,
    name: 'TELECOM',
  },
  4: {
    id: 4,
    name: 'FINANCE',
  },
};
export const CLIENTS = {
  1: {
    id: 1,
    company: 'canal+',
    businessUnitId: 2,
  },
  2: {
    id: 2,
    company: 'france tv',
    businessUnitId: 2,
  },
  3: {
    id: 3,
    company: 'suez',
    businessUnitId: 1,
  },
  4: {
    id: 4,
    company: 'total energie',
    businessUnitId: 1,
  },
  5: {
    id: 5,
    company: 'bnp',
    businessUnitId: 4,
  },
  6: {
    id: 6,
    company: 'C.agricole',
    businessUnitId: 4,
  },
  7: {
    id: 7,
    company: 'lcl',
    businessUnitId: 4,
  },

  8: {
    id: 8,
    company: 'orange',
    businessUnitId: 3,
  },

  9: {
    id: 9,
    company: 'bouygues',
    businessUnitId: 3,
  },
};

export const SKILLS = {
  1: {
    id: 1,
    name: 'javascript',
  },
  2: {
    id: 2,
    name: 'react',
  },
  3: {
    id: 3,
    name: 'vuejs',
  },
  4: {
    id: 4,
    name: 'java',
  },
  5: {
    id: 5,
    name: 'php',
  },
};

// export const OFFERS = {
//   1: {
//       id: 1,
//       name: 'javascript',
//   },
//   2: {
//       id: 2,
//       name: 'react',
//   },
//   3: {
//       id: 3,
//       name: 'vuejs',
//   },
//   4: {
//       id: 4,
//       name: 'java',
//   },
//   5: {
//       id: 5,
//       name: 'php',
//   },
// }

export function findAllBusinessUnits() {
  return <any[]>Object.values(BUSINESS_UNITS);
}

export function findAllClients() {
  return <any[]>Object.values(CLIENTS);
}

export function findAllSkills() {
  return <any[]>Object.values(SKILLS);
}

export function findClientsForBu(businessUnitId: number) {
  return Object.values(CLIENTS).filter(cl => cl.businessUnitId == businessUnitId);
}