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
    if (!authStore.user?.roles.includes('user')) return false;
    return true;
  })
  
  return {
    isAdmin, isCustomer
  };
};