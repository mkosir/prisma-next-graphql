import { Prisma } from '@prisma/client';

import { supplierIdGoldenMothChemical, supplierIdWarehouse } from './suppliers';
import { userIdJessePinkman, userIdWalterWhite } from './users';

export const batches: Prisma.BatchCreateInput[] = [
  {
    id: '2f008731-4645-43de-8af9-3060d4086001',
    title: 'Blue Sky',
    description: 'summer batch',
    purity: new Prisma.Decimal(99.1),
    weight: new Prisma.Decimal(145.64),
    users: { connect: [{ id: userIdWalterWhite }, { id: userIdJessePinkman }] },
    supplier: { connect: { id: supplierIdWarehouse } },
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086002',
    title: 'Blue Sky',
    description: 'bad batch',
    purity: 45.7,
    weight: 142.18,
    users: { connect: [{ id: userIdWalterWhite }, { id: userIdJessePinkman }] },
    supplier: { connect: { id: supplierIdWarehouse } },
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086003',
    title: 'Blue Sky',
    purity: 99.4,
    weight: 149.73,
    users: { connect: { id: userIdJessePinkman } },
    supplier: { connect: { id: supplierIdGoldenMothChemical } },
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086004',
    title: 'Blue Sky',
    purity: 98.6,
    weight: 146.51,
    users: { connect: { id: userIdWalterWhite } },
    supplier: { connect: { id: supplierIdGoldenMothChemical } },
  },
];
