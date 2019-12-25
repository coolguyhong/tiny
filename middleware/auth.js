const signup = '/signup'
const signin = '/signin'

export default function ({route, store, redirect}) {
  if (route.path === signup || route.path === signin) {
    return
  }
  // auth 확인
  if (!store.state.authUser) {
    return redirect(signin)
  }
}
