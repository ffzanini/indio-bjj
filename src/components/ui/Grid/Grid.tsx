import { cn } from "@/libs/cn";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[21rem] md:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  Icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header: string;
  Icon?: React.ElementType;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-3 transition duration-200 hover:shadow-xl dark:border-white/20 dark:bg-black dark:shadow-none",
        className
      )}
    >
      <Image src={header} width={1280} height={800} alt={header} />
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="flex flex-row gap-2 items-center justify-start mt-2 mb-2 font-sans text-xl font-bold text-neutral-600 dark:text-neutral-200">
          {Icon && <Icon />}
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
