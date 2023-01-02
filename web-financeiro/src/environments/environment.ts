export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  tokenWhitelistedDomains:[/localhost:8080/],
  tokenBlacklistedRoutes:[/\/oauth\/token/]
};