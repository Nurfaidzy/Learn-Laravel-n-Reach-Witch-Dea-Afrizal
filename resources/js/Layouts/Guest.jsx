import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
    return (
        <>
            <div className="flex justify-center laptop:pt-[10%] pt-10">
                <div className="w-[400px] laptop:h-[400px] ">
                    <div
                        className=" flex flex-col rounded-lg sm:justify-center items-center py-6 sm:pt-0
                     bg-gray-100 shadow-sm shadow-white"
                    >
                        <div>
                            <Link href="/">
                                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                            </Link>
                        </div>

                        <div className=" sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
