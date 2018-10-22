export default {
  path: '/',
  component: require('../../components/common').default,
  indexRoute: {
    getComponent(nextState, cb){
      import('../../components/home').then((m)=> {
        cb(null, m.default)
      })
    }
  },
};
