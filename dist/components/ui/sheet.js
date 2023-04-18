"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SheetDescription = exports.SheetTitle = exports.SheetFooter = exports.SheetHeader = exports.SheetContent = exports.SheetTrigger = exports.Sheet = void 0;
const React = __importStar(require("react"));
const SheetPrimitive = __importStar(require("@radix-ui/react-dialog"));
const class_variance_authority_1 = require("class-variance-authority");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
const Sheet = SheetPrimitive.Root;
exports.Sheet = Sheet;
const SheetTrigger = SheetPrimitive.Trigger;
exports.SheetTrigger = SheetTrigger;
const portalVariants = (0, class_variance_authority_1.cva)("fixed inset-0 z-50 flex", {
    variants: {
        position: {
            top: "items-start",
            bottom: "items-end",
            left: "justify-start",
            right: "justify-end",
        },
    },
    defaultVariants: { position: "right" },
});
const SheetPortal = (_a) => {
    var { position, className, children } = _a, props = __rest(_a, ["position", "className", "children"]);
    return (React.createElement(SheetPrimitive.Portal, Object.assign({ className: (0, utils_1.cn)(className) }, props),
        React.createElement("div", { className: portalVariants({ position }) }, children)));
};
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
const SheetOverlay = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(SheetPrimitive.Overlay, Object.assign({ className: (0, utils_1.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in", className) }, props, { ref: ref })));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = (0, class_variance_authority_1.cva)("fixed z-50 scale-100 gap-4 bg-background p-6 opacity-100 shadow-lg border", {
    variants: {
        position: {
            top: "animate-in slide-in-from-top w-full duration-300",
            bottom: "animate-in slide-in-from-bottom w-full duration-300",
            left: "animate-in slide-in-from-left h-full duration-300",
            right: "animate-in slide-in-from-right h-full duration-300",
        },
        size: {
            content: "",
            default: "",
            sm: "",
            lg: "",
            xl: "",
            full: "",
        },
    },
    compoundVariants: [
        {
            position: ["top", "bottom"],
            size: "content",
            class: "max-h-screen",
        },
        {
            position: ["top", "bottom"],
            size: "default",
            class: "h-1/3",
        },
        {
            position: ["top", "bottom"],
            size: "sm",
            class: "h-1/4",
        },
        {
            position: ["top", "bottom"],
            size: "lg",
            class: "h-1/2",
        },
        {
            position: ["top", "bottom"],
            size: "xl",
            class: "h-5/6",
        },
        {
            position: ["top", "bottom"],
            size: "full",
            class: "h-screen",
        },
        {
            position: ["right", "left"],
            size: "content",
            class: "max-w-screen",
        },
        {
            position: ["right", "left"],
            size: "default",
            class: "w-1/3",
        },
        {
            position: ["right", "left"],
            size: "sm",
            class: "w-1/4",
        },
        {
            position: ["right", "left"],
            size: "lg",
            class: "w-1/2",
        },
        {
            position: ["right", "left"],
            size: "xl",
            class: "w-5/6",
        },
        {
            position: ["right", "left"],
            size: "full",
            class: "w-screen",
        },
    ],
    defaultVariants: {
        position: "right",
        size: "default",
    },
});
const SheetContent = React.forwardRef((_a, ref) => {
    var { position, size, className, children } = _a, props = __rest(_a, ["position", "size", "className", "children"]);
    return (React.createElement(SheetPortal, { position: position },
        React.createElement(SheetOverlay, null),
        React.createElement(SheetPrimitive.Content, Object.assign({ ref: ref, className: (0, utils_1.cn)(sheetVariants({ position, size }), className) }, props),
            children,
            React.createElement(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" },
                React.createElement(lucide_react_1.X, { className: "h-4 w-4" }),
                React.createElement("span", { className: "sr-only" }, "Close")))));
});
exports.SheetContent = SheetContent;
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: (0, utils_1.cn)("flex flex-col space-y-2 text-center sm:text-left", className) }, props)));
};
exports.SheetHeader = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: (0, utils_1.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
};
exports.SheetFooter = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(SheetPrimitive.Title, Object.assign({ ref: ref, className: (0, utils_1.cn)("text-lg font-semibold text-foreground", className) }, props)));
});
exports.SheetTitle = SheetTitle;
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(SheetPrimitive.Description, Object.assign({ ref: ref, className: (0, utils_1.cn)("text-sm text-muted-foreground", className) }, props)));
});
exports.SheetDescription = SheetDescription;
SheetDescription.displayName = SheetPrimitive.Description.displayName;
//# sourceMappingURL=sheet.js.map