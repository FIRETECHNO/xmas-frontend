export default defineNuxtRouteMiddleware((to, from) => {
  const { isAdmin, isCustomer } = useRole();

  if (isAdmin.value) {
    return setPageLayout("admin")
  }

  if (isCustomer.value) {
    return setPageLayout("user")
  }

  return setPageLayout("default")
});