export const useRole = () => {
  const authStore = useAuth();
  const config = useRuntimeConfig();

  const isAdmin = computed(() => {
    if (!authStore.user) {
      return false;
    }

    const hasAdminRole = authStore.user.roles.includes('admin');
    if (!hasAdminRole) {
      return false;
    }
    return true;
  });

  const isCustomer = computed(() => {
    return !!authStore.user?.roles.includes('customer')
  })
  
  return {
    isAdmin, isCustomer
  };
};