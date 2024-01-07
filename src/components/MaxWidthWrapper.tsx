import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
    classname?: string,
    children: ReactNode,
}

const MaxWidthWrapper = ({classname, children}:MaxWidthWrapperProps) => {
    return (
        <div className={cn(classname, "mx-auto w-full max-w-screen-xl px-2.5 md:px-20")}>{children}</div>
    )
}

export default MaxWidthWrapper;