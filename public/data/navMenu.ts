export const navMenu = [
    {
        id: 1,
        name: "Home",
        isSubMenu: false,
        link: "/"
    },
    {
        id: 2,
        name: "Products",
        isSubMenu: true,
        subMenu: [
            {
                id: 1.1,
                name: "Product",
                link: "products"
            },
            {
                id: 1.2,
                name: "Products",
                link: "products/1"
            },
        ]
    },
    {
        id: 3,
        name: "Cart",
        isSubMenu: false,
        link: "cart"
    },
];