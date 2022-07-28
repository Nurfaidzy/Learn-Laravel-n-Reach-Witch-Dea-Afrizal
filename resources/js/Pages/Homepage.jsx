import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Pagination from "@/Components/Homepage/Pagination";

export default function Homepage(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="justify-center items-center flex pt-6">
                <div className="grid laptop:grid-cols-3 grid-cols-1 items-stretch gap-6">
                    <NewsList kirim={props.news.data} />
                </div>
            </div>
            <div className="flex justify-center items-center py-6">
                <Pagination kirim={props.news.meta} />
            </div>
        </>
    );
}
