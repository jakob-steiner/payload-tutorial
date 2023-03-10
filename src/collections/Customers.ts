import {CollectionConfig} from 'payload/types';
import {selfOrAdmin} from '../access/selfOrAdmin';

export const Customers: CollectionConfig = {
  slug: 'customers',
  auth: true,
  access: {
    create: ({req: {user}}) => {
      return user?.collection === 'users';
    },
    read: selfOrAdmin,
    update: selfOrAdmin,
    delete: ({req: {user}}) => {
      return user?.collection === 'users';
    },
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
  ],
};
