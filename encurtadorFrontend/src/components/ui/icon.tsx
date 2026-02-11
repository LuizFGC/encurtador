import type { LucideIcon, LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
    iconNode?: LucideIcon | null;
}

export default function Icon({ iconNode: IconComponent, ...props }: IconProps) {
    if (!IconComponent) return null;

    return <IconComponent {...props} />;
}
