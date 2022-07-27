import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";

export default function Homepage(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <NewsList kirim={props.news} />
        </>
    );
}
