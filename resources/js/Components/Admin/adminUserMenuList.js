export const ADMIN_USER_MENU_LIST = [
    {
        text: "My profile",
        icon: "user",
        link: route("admin.dashboard"),
    },
    {
        text: "Manage user",
        icon: "setting",
        link: route("admin.dashboard"),
    },
    {
        text: "Logout",
        icon: "logout",
        link: route('admin.logout'),
    },
];
