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
        "grid max-w-7xl grid-cols-1 gap-6 auto-rows-[19rem] md:grid-cols-4",
        className,
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
        "group/bento shadow-input row-span-1 flex h-full min-h-52 flex-col rounded-xl border border-foreground/20 bg-card p-3 transition duration-200 hover:shadow-xl dark:border-white/20 dark:bg-[#1f1f23] dark:shadow-none",
        className,
      )}
    >
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg">
        <Image
          src={header}
          width={1280}
          height={800}
          alt={header}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col pt-2 transition duration-200 group-hover/bento:translate-x-2 text-left">
        <div className="flex flex-row gap-2 items-center justify-start font-sans text-xl font-bold text-neutral-600 dark:text-neutral-200 shrink-0">
          {Icon && <Icon className="shrink-0" />}
          <span className="line-clamp-2">{title}</span>
        </div>
        <div className="flex flex-1 min-h-0 flex-col justify-center">
          <p className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300 line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
