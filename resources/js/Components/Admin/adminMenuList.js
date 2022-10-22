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

export const ADMIN_SIDE_MENU_LIST = [
    {
        text: "Dashboard",
        icon: "collection",
        route: 'admin.dashboard',
    },
    {
        text: "Orders",
        icon: "shopping-cart",
        route: 'admin.order',
    },
    {
        text: "Categories",
        icon: "view-board",
        route: 'admin.category',
    },{
        text: "Offers",
        icon: "offer",
        route: 'admin.offer',
    },
    {
        text: "Products",
        icon: "template",
        route: 'admin.product',
    },
]
