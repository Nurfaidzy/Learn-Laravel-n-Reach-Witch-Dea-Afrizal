import { Link } from "@inertiajs/inertia-react";
const Pagination = ({ kirim }) => {
    const sebelum = kirim.links[0].url;
    const sesudah = kirim.links[kirim.links.length - 1].url;
    const sekarang = kirim.current_page;

    return (
        <>
            <div className="btn-group">
                {sebelum && (
                    <Link href={sebelum} className="btn">
                        «
                    </Link>
                )}
                <button className="btn">{sekarang}</button>
                {sesudah && (
                    <Link href={sesudah} className="btn">
                        »
                    </Link>
                )}
            </div>
        </>
    );
};

export default Pagination;
