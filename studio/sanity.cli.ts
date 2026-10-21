import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3f5m4htk',
    dataset: 'production'
  },
  deployment: {
    appId: 'x6qfy6xzym6a2p5hfj455vy4',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    enabled: true,
    path: '../web/src/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../web/sanity.types.ts',
    overloadClientMethods: true,
  },
})
