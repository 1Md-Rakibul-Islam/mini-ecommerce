(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_73c3e5._.js", {

"[project]/src/components/ui/RatingStars.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStarFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStarFilled$3e$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs [app-client] (ecmascript) <export default as IconStarFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStarHalfFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStarHalfFilled$3e$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconStarHalfFilled.mjs [app-client] (ecmascript) <export default as IconStarHalfFilled>");
;
;
const RatingStars = ({ rating })=>{
    // Calculate full stars, half stars, and empty stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 icon-24 text-primary",
        children: [
            Array.from({
                length: fullStars
            }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStarFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStarFilled$3e$__["IconStarFilled"], {
                    className: "ti ti-star-filled"
                }, `full-${idx}`, false, {
                    fileName: "[project]/src/components/ui/RatingStars.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)),
            hasHalfStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStarHalfFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStarHalfFilled$3e$__["IconStarHalfFilled"], {
                className: "ti ti-star-half-filled"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/RatingStars.tsx",
                lineNumber: 18,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/RatingStars.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = RatingStars;
const __TURBOPACK__default__export__ = RatingStars;
var _c;
__turbopack_refresh__.register(_c, "RatingStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/hooks/useCart.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/slices/cartSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const useCart = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "useCart.useSelector[cart]": (state)=>state.cart
    }["useCart.useSelector[cart]"]);
    return {
        cart,
        addToCart: (item)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])(item)),
        removeFromCart: (id)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCart"])(id)),
        increaseQuantity: (id)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increaseQuantity"])(id)),
        decreaseQuantity: (id)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decreaseQuantity"])(id)),
        clearCart: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCart"])())
    };
};
_s(useCart, "aiyLQC3w2loFGIOtPgvi9u4lMcI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/cards/ProductCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$RatingStars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/RatingStars.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/hooks/useCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShoppingCartPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShoppingCartPlus$3e$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconShoppingCartPlus.mjs [app-client] (ecmascript) <export default as IconShoppingCartPlus>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const ProductCard = ({ product })=>{
    _s();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-30p px-20p rounded-20 border border-shap group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-col-c overflow-hidden rounded-xl mb-30p",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "w-full h-[240px] object-cover object-top group-hover:scale-105 transition-1",
                    width: 320,
                    height: 240,
                    src: product?.image,
                    alt: product?.title
                }, void 0, false, {
                    fileName: "[project]/src/components/cards/ProductCard.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cards/ProductCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-24p border-t border-shap pt-30p",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/products/${product?.id?.toString()}`,
                        className: "heading-4 text-w-neutral-1 line-clamp-1 group-hover:text-secondary transition-1 mb-20p ",
                        children: product?.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards/ProductCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-y flex-wrap gap-x-24p gap-y-3 mb-20p",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl-medium text-w-neutral-1",
                                children: [
                                    "$",
                                    product?.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cards/ProductCard.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-y gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$RatingStars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        rating: product?.rating?.rate
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cards/ProductCard.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl-medium text-w-neutral-1",
                                        children: [
                                            "( ",
                                            product?.rating?.count,
                                            " )"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cards/ProductCard.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cards/ProductCard.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cards/ProductCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-y justify-between 4xl:gap-6 gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>addToCart(product),
                            className: "btn btn-md btn-neutral-3 group-hover:bg-primary group-hover:text-b-neutral-4 rounded-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-c icon-24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShoppingCartPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShoppingCartPlus$3e$__["IconShoppingCartPlus"], {}, void 0, false, {
                                        fileName: "[project]/src/components/cards/ProductCard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cards/ProductCard.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                "Add To Cart"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cards/ProductCard.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards/ProductCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cards/ProductCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cards/ProductCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_s(ProductCard, "YPx5musMedcmtt2OkzMtHcKllYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_refresh__.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_73c3e5._.js.map