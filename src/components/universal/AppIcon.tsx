import { Icon } from "@iconify/react"

export default function AppIcon({ name, size = 24, color = 'currentColor'}: {
    name: string
    size?: number
    color?: string
}) {
    return (
        <Icon
            icon={name}
            width={size}
            height={size}
            color={color}
        />
    )
}