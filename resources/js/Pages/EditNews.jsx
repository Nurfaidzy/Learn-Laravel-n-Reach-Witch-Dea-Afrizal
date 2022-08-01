import React from "react";
import { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

const EditNews = (props) => {
    const [title, setTitle] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [category, setCategory] = useState("");
    const datas = props.newse;

    const kiyim = () => {
        const data = {
            id: datas.id,
            title: title,
            deskripsi: deskripsi,
            category: category,
            author: props.auth.user.email,
        };
        Inertia.post("/newss/update", data);
        setTitle("");
        setDeskripsi("");
        setCategory("");
    };

    return (
        <>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex laptop:justify-center">
                <div className="p-4 grid grid-cols-1 gap-4 laptop:w-[25%]">
                    <input
                        type="text"
                        placeholder={"Tittle Terdahulu : " + datas.title}
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={"Deskripsi Terdahulu : " + datas.deskripsi}
                        className="input input-bordered w-full max-w-xs "
                        onChange={(e) => setDeskripsi(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={"Kategori Terdahulu : " + datas.category}
                        className="input input-bordered w-full max-w-xs "
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button className="btn" type="submit" onClick={kiyim}>
                        Button
                    </button>
                </div>
            </div>
        </>
    );
};

export default EditNews;
