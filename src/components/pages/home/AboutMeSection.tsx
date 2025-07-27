import AppSection from "@/components/global/AppSection";
import Image from "next/image";
import ProfilePhoto from '@/assets/images/aboutMe.png';
import SectionHeading from "@/components/universal/SectionHeading";

export default function AboutMeSection () {
    const heading = 'About';
    const contentTitle = 'Curious about me? Here you have it:';
    // const description = [
    //     {
    //         tag: '',
    //         content: '',
    //     },
    // ];

    return (
        <AppSection fullBg id="about">
            <div>
                <SectionHeading val={heading} />

                <div className="flex gap-48">
                <div className="shrink-0">
                    <div className="relative w-[400px] ml-10">
                        <div className="absolute bg-gray-200 right-10 top-10 size-full" />

                        <Image
                            src={ProfilePhoto}
                            alt="Pfofile photo"
                            className="border-10 border-white relative"
                        />
                    </div>
                </div>

                    <div>
                        <h3 className="mb-6 text-3xl/9 font-semibold tracking-tight">
                            {contentTitle}
                        </h3>

                        <p>
                            I`m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                            I began my journey as a web developer in 2015, and since then, I`ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I`m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                            When I`m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                            Finally, some quick bits about me.
                            B.E. in Computer Engineering
                            Avid learner
                            Full time freelancer
                            Aspiring indie hacker
                            One last thing, I`m available for freelance work, so feel free to reach out and say hello! I promise I don`t bite 😉</p>
                    </div>
                </div>
            </div>
        </AppSection>
    )
}