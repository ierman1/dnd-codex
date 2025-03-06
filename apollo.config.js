export default {
  client: {
    service: {
      name: 'dnd-codex',
      // URL to the GraphQL API
      url: 'https://www.dnd5eapi.co/api',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js'],
  },
}
