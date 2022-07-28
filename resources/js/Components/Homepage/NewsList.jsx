const Datatampil = ({ kirim }) => {
    return kirim.map((item, index) => {
        return (
            <>
                <div key={item.id}>
                    <div className="card w-96 bg-base-100 shadow-xl ">
                        <figure>
                            <img
                                src="https://placeimg.com/400/225/arch"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{item.deskripsi}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    {item.category}
                                </div>
                                <div className="badge badge-outline">
                                    {item.author}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    });
};

const DataKosong = () => {
    return (
        <>
            <div className="text-center font-bold text-4xl py-5">
                <h1>Maaf tidak ada data</h1>
            </div>
        </>
    );
};

const NewsList = ({ kirim }) => {
    return !kirim && !kirim.length ? DataKosong() : Datatampil({ kirim });
};

export default NewsList;
