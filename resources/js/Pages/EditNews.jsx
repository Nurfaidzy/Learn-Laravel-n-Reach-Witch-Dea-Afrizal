import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

const EditNews = (props) => {
    const datas = props.newse;
    console.log(datas);
    return (
        <>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div></div>
        </>
    );
};

export default EditNews;
