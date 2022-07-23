import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    return <>
        <Head title={props.title} />
        <div className='px-[10%] py-[5%]  bg-slate-800 text-white'>
            <div className='flex justify-center font-bold text-4xl '>
            <h1 className='py-[5%] text-center' >{props.message}</h1>
            </div>
            <div className='grid laptop:grid-cols-4 gap-4'>
            {
                props.news ? props.news.map((data, i) =>
                {
                    return<>

                    <div className='p-3'>

                        <div key={i} className=" p-3 rounded-xl bg-white text-black shadow-slate-600 shadow-xl">
                            <p>
                                {data.title}
                            </p>
                            <p>
                                {data.deskripsi}
                            </p>
                            <p>
                                {data.category}
                            </p>
                            <p>
                                {data.author}
                            </p>
                        </div>
                        </div>
                        </>
                })
                :
                <p>tiada berita nich</p>
            }
            </div>
        </div>
    </>
}
