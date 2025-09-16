// Composables
import DefaultLayout from "@/layouts/default/DefaultLayout.vue"
import DashboardView from '@/pages/core/ProjectDashboardView.vue'
import CardListView from "@/pages/core/CardListView.vue"

export default [
  {
    path: "/cards",
    component: DefaultLayout,
    children: [
      {
        path: "list",
        name: "cards-list",
        component: CardListView,
      },
    ],
  },
  {
    path: "/projects",
    component: DashboardView
  }
]
