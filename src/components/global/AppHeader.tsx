import Link from "next/link"
import Image from "next/image"
import AppNavBar from "./AppNavBar"
import LightIcon from "@/assets/icons/light-theme-icon.svg"

export default function AppHeader() {
    return (
        <header className="py-4 px-8 flex items-center justify-between">
            <Link
                className="text-gray-900 text-3xl/9 font-bold tracking-tight"
                href="/"
            >
                {'<SS />'}
            </Link>

            <div className="flex gap-6 items-center">
                <AppNavBar />

                <div className="h-6 w-[1px] bg-gray-100" />

                <div className="flex items-center gap-4">
                    <div>
                        <Image
                            className="cursor-pointer"
                            src={LightIcon}
                            alt="Light theme icon"
                        />
                    </div>

                    <button
                        className="py-1.5 px-4 bg-gray-900 border-none rounded-xl cursor-pointer
                            hover:bg-gray-700 transition-all duration-500"
                    >
                        <span className="text-gray-50 font-medium text-base/6">
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}