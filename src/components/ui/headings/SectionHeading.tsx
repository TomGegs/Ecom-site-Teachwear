type SectionHeadingProps = {
    heading: string;
    link: string;
};

export function SectionHeading({ heading, link }: SectionHeadingProps) {
    return (
        <div className="flex w-full items-center justify-between">
            <h2 className="my-6 text-2xl font-black uppercase text-gray-900 dark:text-white">
                {heading}
            </h2>
            <a
                className="text-sm font-normal uppercase text-gray-900 transition-all duration-200 ease-in-out hover:text-orange-500 hover:underline dark:text-white"
                href={link}
            >
                VIEW MORE &rarr;
            </a>
        </div>
    );
}
