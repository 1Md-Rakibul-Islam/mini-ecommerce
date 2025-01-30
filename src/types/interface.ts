export type Tid = string | number;

export type NavLinkProps = {
    id: number;
    url: string;
    label: string;
};

export type headerBannerType = {
    title: string;
    bgImgClasses?: string | null;
    details?: string | null;
    description?: string | null;
    navLinks?: NavLinkProps[];
};

export type customIconProps = {
    className?: string;
    width?: string;
    height?: string;
    size?: string;
    color?: string;
}
