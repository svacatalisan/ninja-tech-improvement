/**
 * Created by alexcatalisan on 03.11.2017.
 */

/* every route will point to App */
/* routeConfigSource: local: files,             remote: rest api */
/* routeConfigURL:    local: name of the files, remote: rest api endpoint */
/* routeDefaultProps(optional): if there are some specific props to be sent attach on this object */
/* children(optional): if the user wants to create children routes ex: user/id */

module.exports = Object.assign({}, {
  environment: 'dev',
  baseURL: 'http://localhost:3001',
  language: {
    id: '',
    code: '',
    displayValue: ''
  },
  routes: [
    {
      routePath: '',
      isPrivateRotue: false,
      routeConfigSource: '',
      routeConfigURL: '',
      routeDefaultProps: {},
      children: {}
    }
  ],
  loadGlobalDataUrls: {

  }
});
