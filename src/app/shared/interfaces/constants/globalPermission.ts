export type GlobalPermission =
  | 'VIEW_COMPANIES'
  | 'CREATE_COMPANIES'
  | 'EDIT_COMPANIES'
  | 'ACTIVATE_DEACTIVATE_COMPANIES'
  | 'DELETE_COMPANIES'
  // Dashboard Roles
  | 'VIEW_DASHBOARD_ROLES'
  | 'ASSIGN_DASHBOARD_ROLES'
  // Users
  | 'VIEW_USERS'
  | 'INVITE_USERS'
  | 'ACTIVATE_DEACTIVATE_USERS'
  | 'DELETE_USERS'
  // Dashboards
  | 'VIEW_DASHBOARDS'
  | 'EDIT_DASHBOARDS'
  | 'ACTIVATE_DEACTIVATE_DASHBOARDS'
  | 'DELETE_DASHBOARDS';
