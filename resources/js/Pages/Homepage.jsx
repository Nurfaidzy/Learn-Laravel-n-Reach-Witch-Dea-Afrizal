import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";

export default function Homepage(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <div className="justify-center items-center flex pt-6">
                <div className="grid grid-cols-3 items-stretch gap-6">
                    <NewsList kirim={props.news} />
                </div>
            </div>
        </>
    );
}
