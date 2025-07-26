import AppSection from "@/components/global/AppSection";
import AppIcon from "@/components/universal/AppIcon";
import Link from "next/link";
import ProfilePhoto from "@/assets/images/profilePhoto.png";
import Image from "next/image";

export default function HeroSection() {
    const heading = 'Hi, I’m Roman 👋';
    const description = 'I`m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.';

    const address = 'Lviv, Ukraine';
    const availableText = 'Available for new projects';

    const links = [
        {
            icon: 'hugeicons:github',
            route: ''
        },
        {
            icon: 'hugeicons:twitter',
            route: ''
        },
        {
            icon: 'hugeicons:figma',
            route: ''
        },
    ]

    return (
        <AppSection>
            <div className="flex gap-26">
                <div>
                    <h1 className="text-gray-900 text-6xl/tight font-bold">{ heading }</h1>

                    <p className="text-gray-600 text-base/6 mt-2">
                        { description }
                    </p>

                    <div className="flex flex-col gap-2 mt-12">
                        <div className="flex items-center gap-2">
                            <AppIcon name="hugeicons:location-01" />

                            <span className="text-gray-600 text-base/6">{ address }</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="size-6 flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                            </div>

                            <span className="text-gray-600 text-base/6">{ availableText }</span>
                        </div>

                        <div className="flex items-center gap-3 mt-12">
                            {
                                links.map((item, i) => 
                                    <Link
                                        key={i}
                                        href={item.route}
                                        className="text-gray-600"
                                    >
                                        <AppIcon name={item.icon} />
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <div className="shrink-0">
                    <div className="relative h-[314px] mr-10">
                        <div className="absolute bg-gray-200 left-10 top-10 size-full" />

                        <Image
                            src={ProfilePhoto}
                            alt="Pfofile photo"
                            className="border-10 border-white relative"
                        />
                    </div>
                </div>
            </div>
        </AppSection>
    )
}