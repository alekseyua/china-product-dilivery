export interface WithRouterProps {
    location?: ReturnType<typeof useLocation>;
    params?: Record<string, string>;
    navigate?: ReturnType<typeof useNavigate>;
  }