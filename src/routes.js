export default [
  {
    path: '/',
    name: 'front-page',
    component: require('components/Hello')
  },
  {
    path: '*',
    redirect: '/'
  }
]
