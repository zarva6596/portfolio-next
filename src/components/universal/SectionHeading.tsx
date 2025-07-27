export default function SectionHeading({ val }: { val: string }) {
    return (
        <h2 className="w-fit mx-auto bg-gray-200 rounded-xl py-2 px-5 m-0 mb-12">
            <span className="text-gray-600 text-sm/5 font-medium">
                {val}
            </span>
        </h2>
    )
}