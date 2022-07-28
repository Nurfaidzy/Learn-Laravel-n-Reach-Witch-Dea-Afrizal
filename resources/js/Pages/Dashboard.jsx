import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
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
            <form action="/news" method="post">
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200 grid grid-cols-1 gap-4">
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        props.kirim("title", e.target.value)
                                    }
                                    placeholder="Judul"
                                    className="input input-bordered w-full max-w-xs bg-white"
                                />
                                <input
                                    type="text"
                                    name="deskripsi"
                                    placeholder="Deskripsi"
                                    className="input input-bordered w-full max-w-xs bg-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Kategori"
                                    name="category"
                                    className="input input-bordered w-full max-w-xs bg-white"
                                />
                                <button className="p-2 border-2 w-[20%] hover:border-sky-600 rounded ">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Authenticated>
    );
}
