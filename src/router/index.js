import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPageView from '@/views/LandingPageView.vue'
import DashboardView from '@/views/DashboardView.vue'
import CuriositiesView from '@/views/CuriositiesView.vue'
import LoginView from '@/views/LoginView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import PageBlockedView from '@/views/PageBlockedView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProfileViewAdmin from '@/views/ProfileViewAdmin.vue'
import ProfileViewFavorites from '@/views/ProfileViewFavorites.vue'
import ProfileViewConfigurations from '@/views/ProfileViewConfigurations.vue'
import ProfileViewFavoritesAirports from '@/views/ProfileViewFavoritesAirports.vue' 
import ProfileViewFavoritesCompanies from '@/views/ProfileViewFavoritesCompanies.vue'
import AirportsView from '@/views/AirportsView.vue'
import CompaniesView from '@/views/CompaniesView.vue'
import FlightsView from '@/views/FlightsView.vue'
import { useUserStore } from "@/stores/user";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView

    },

    {
      path: '/curiosities',
      name: 'curiosities',
      component: CuriositiesView

    },

    {
      path: '/login',
      name: 'login',
      component: LoginView

    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true },

    },
    {
      path: '/profile/admin',
      name: 'profileAdmin',
      component: ProfileViewAdmin,
      meta: { requiresAuth: true },

    },
    {
      path: '/profile/favorites',
      name: 'profileFavorites',
      component: ProfileViewFavorites,
      meta: { requiresAuth: true },

    },
    {
      path: '/profile/favorites/airports',
      name: 'profileFavoritesAirports',
      component: ProfileViewFavoritesAirports,
      meta: { requiresAuth: true },

    },
    {
      path: '/profile/favorites/companies',
      name: 'profileFavoritesCompanies',
      component: ProfileViewFavoritesCompanies,
      meta: { requiresAuth: true },

    },
    {
      path: '/profile/configurations',
      name: 'profileConfigurations',
      component: ProfileViewConfigurations,
      meta: { requiresAuth: true },
    },
    
    {
      path: "/:pathMatch(.*)",
      name: "pagenotfound",
      component: PageNotFoundView
    },

    {
      path: '/pageBlocked',
      name: 'pageblocked',
      component: PageBlockedView

    },

    {
      path: '/dashboard/airports',
      name: 'airports',
      component: AirportsView

    },

    {
      path: '/dashboard/companies',
      name: 'companies',
      component: CompaniesView

    },

    {
      path: '/dashboard/flights',
      name: 'flights',
      component: FlightsView

    },

  ]
})

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !useUserStore().isUser) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
    };
  }
});

export default router
