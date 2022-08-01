import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [deskripsi, setdeskripsi] = useState("");
    const [kategori, setkategori] = useState("");
    const [peringatan, setperingatan] = useState(false);
    const kiyim = () => {
        const data = {
            title: title,
            deskripsi: deskripsi,
            category: kategori,
            author: props.auth.user.email,
        };
        Inertia.post("/news", data);
        setTitle("");
        setdeskripsi("");
        setkategori("");
        setperingatan(true);
    };

    console.log(props.flash.messages);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Berita dari saya
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 grid grid-cols-1 gap-4">
                            <div>
                                {peringatan && (
                                    <div className="alert alert-success shadow-lg">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="stroke-current flex-shrink-0 h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{props.flash.messages}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                placeholder="Judul"
                                className="input input-bordered w-full max-w-xs bg-white"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <input
                                type="text"
                                name="deskripsi"
                                placeholder="Deskripsi"
                                className="input input-bordered w-full max-w-xs bg-white"
                                onChange={(e) => setdeskripsi(e.target.value)}
                                value={deskripsi}
                            />
                            <input
                                type="text"
                                placeholder="Kategori"
                                name="category"
                                className="input input-bordered w-full max-w-xs bg-white"
                                onChange={(e) => setkategori(e.target.value)}
                                value={kategori}
                            />
                            <button
                                className="p-2 border-2 w-[20%] hover:border-sky-600 rounded "
                                onClick={kiyim}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
