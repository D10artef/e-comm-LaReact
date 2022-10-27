export const ADMIN_USER_MENU_LIST = [
    {
        text: "My profile",
        icon: "user",
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
        route: "admin.dashboard",
    },
    {
        text: "Orders",
        icon: "shopping-cart",
        route: "admin.order",
    },
    {
        text: "Offers",
        icon: "offer",
        route: "admin.offer",
    },
    {
        text: "Categories",
        icon: "view-board",
        route: "admin.category",
    },
    {
        text: "Products",
        icon: "template",
        route: "admin.product",
    },
];

export const ADMIN_SIDE_MENU = [
    {
        text: "Dashboard",
        route: "admin.dashboard",
    },
    {
        text: "Orders",
        route: "admin.order",
    },
    {
        text: "Categories",
        submenu: [
            {
                text: "Manage",
                route: "admin.category",
            },
            {
                text: "New category",
                route: "admin.category.create",
            },
        ],
    },
    {
        text: "Offers",
        submenu: [
            {
                text: "Manage",
                route: "admin.offer",
            },
            {
                text: "New offer",
                route: "admin.offer.create",
            },
        ],
    },
    {
        text: "Products",
        submenu: [
            {
                text: "Manage",
                route: "admin.products",
            },
            {
                text: "New offer",
                route: "admin.products.create",
            },
        ],
    },
];
