const signup = '/signup'
const signin = '/signin'

export default function ({route, store, redirect}) {
  if (route.path === signup) {
    return
  }
  // auth 확인
  if (!store.state.authUser) {
    return redirect(signin)
  }
}
