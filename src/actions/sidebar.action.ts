

export const SIDEBAR_STATUS = "sidebar/open";
export const sidebarOpen = (status: boolean) => ({
  type: SIDEBAR_STATUS,
  payload: status,
});


