import React, { useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link, Head } from "@inertiajs/inertia-react";
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

    const ambildata = () => {
        Inertia.get("/newss");
    };

    useEffect(() => {
        if (!props.mynews) {
            ambildata();
        } else {
            console.log("data sudah ada");
        }
    }, []);

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
                    {props.mynews && (
                        <div className="flex justify-center">
                            <div className="grid laptop:grid-cols-3 grid-cols-1 gap-4">
                                {props.mynews.length > 0 ? (
                                    props.mynews.map((news, index) => (
                                        <div className="pt-6" key={index}>
                                            <div className="card w-96 bg-base-100 shadow-xl ">
                                                <div className="card-body">
                                                    <h2 className="card-title">
                                                        {news.title}
                                                        <div className="badge badge-secondary">
                                                            NEW
                                                        </div>
                                                    </h2>
                                                    <p>{news.deskripsi}</p>
                                                    <div className="card-actions justify-end">
                                                        <div className="badge badge-outline">
                                                            {news.category}
                                                        </div>
                                                        <div className="badge badge-outline">
                                                            <Link
                                                                href={route(
                                                                    "edit.news"
                                                                )}
                                                                as="button"
                                                                method="get"
                                                                data={{
                                                                    id: news.id,
                                                                }}
                                                            >
                                                                Edit
                                                            </Link>
                                                        </div>
                                                        <div className="badge badge-outline">
                                                            <Link
                                                                href={route(
                                                                    "delete.news"
                                                                )}
                                                                as="button"
                                                                method="get"
                                                                data={{
                                                                    id: news.id,
                                                                }}
                                                            >
                                                                Hapus
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="pt-4 laptop:pl-[10%] ">
                                        <div className="bg-white p-4 rounded-xl">
                                            <div className="text-center">
                                                Buat berita terdahulu
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
