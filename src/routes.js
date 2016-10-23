export default [
  {
    path: '/',
    name: 'home',
    component: require('components/Hello')
  },
  {
    path: '/login',
    name: 'login',
    component: require('components/Login')
  },
  {
    path: '*',
    redirect: '/'
  }
]
