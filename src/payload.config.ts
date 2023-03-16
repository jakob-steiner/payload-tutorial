import {buildConfig} from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import {Customers} from './collections/Customers';
import Logo from './graphics/Logo';
import Icon from './graphics/Icon';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Peak Automotive',
      favicon: '/assets/favicon.ico',
      ogImage: '/assets/logo.png',
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  collections: [
    Users,
    Customers,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
