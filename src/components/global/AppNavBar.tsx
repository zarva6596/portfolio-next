import Link from "next/link"

export default function AppNavBar() {
    const navItems = [
        {
            title: 'About',
            route: '#about',
        },
        {
            title: 'Work',
            route: '#work',
        },
        {
            title: 'Testimonials',
            route: '#testimonials',
        },
        {
            title: 'Contact',
            route: '#contact',
        },
    ]

    return (
        <nav>
            <ul className="flex items-center gap-6">
                {navItems.map((item, i) => (
                    <li key={i}>
                        <Link
                            className="text-gray-600 text-base/6 font-medium
                                hover:text-gray-900 transition-all duration-500"
                            href={item.route}
                        >
                            { item.title }
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}