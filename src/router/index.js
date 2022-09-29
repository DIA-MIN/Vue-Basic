import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // 방법1. => 첫 렌딩 페이지를 띄울 컴포넌트 같은 경우 사용
  },
  {
    path: '/about',
    name: 'about',
    // 방법2. => size가 작으면서 사용자가 컴포넌트 요청을 안할 수도 있는 경우.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // webpackChunkName 지정 이름으로 컴포넌트 파일 명칭이 바뀜 (개발자 도구 네트워크 탭)

    // 방법3. => size가 크면서 사용자가 컴포넌트 사용할 가능성이 큰 경우. (webpackPrefetch)
    // webpackPrefetch: true => 브라우저 캐시에 저장하겠다. 확실히 사용할 컴포넌트이면서, 파일 크기가 클 경우만 사용하기!
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
