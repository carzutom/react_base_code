export default {
  path: '/',
  component: require('../../components/common').default,
  indexRoute: {
    getComponent(nextState, cb){
      System.import('../../components/home').then((m)=> {
        cb(null, m.default)
      })
    }
  },
};
