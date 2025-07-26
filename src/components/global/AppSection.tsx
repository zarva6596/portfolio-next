export default function AppSection({ fullBg, children }: Readonly<{
    fullBg?: boolean,
    children: React.ReactNode;
}>) {
    return (
        <section className='px-8 py-24 relative'>
            {
                fullBg && <div className="absolute left-1/2 top-0 h-full w-screen -translate-x-1/2 bg-gray-500" /> 
            }

            <div className="relative">
                { children }
            </div>
        </section>
    )
}