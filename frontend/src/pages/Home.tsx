import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [presentations, setPresentations] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);
    const [search, setSearch] = useState('');

    useEffect(() => {
        (async () => {
            const {data} = await axios.get(`/presentations/?search=${search}&page=${page}`);

            setPresentations(page === 1 ? data.data : [...presentations, ...data.data]);
            setLastPage(data.last_page);
        })();
    }, [page, search])

    return <>
        <section className="py-5 text-center container">
            <div className="row py-lg-2">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <div className="d-flex align-items-center">
                        <form className="w-100 me-3" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"
                                   onChange={e => {
                                       setSearch(e.target.value);
                                       setPage(1);
                                   }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {presentations.map((p: any) => {
                return <div className="col" key={p}>
                    <div className="card shadow-sm">
                        <img src={`${p.thumbnail}?${p.id}`} className="bd-placeholder-img card-img-top" alt={p.thumbnail}/>
                        <div className="card-body">
                            <p className="card-text">{p.title}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <a href="#" className="d-block link-body-emphasis text-decoration-none">
                                    <img src={p.creator?.profileUrl} alt={p.creator?.profileUrl} width="32" height="32" className="rounded-circle"/>
                                    <span className="px-2">{p.creator?.name}</span>
                                </a>
                                <small className="text-body-secondary">{p.createdAt}</small>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>

        {(lastPage !== page) && <div className="d-grid gap-2 col-6 mx-auto mt-4">
            <button className="btn btn-primary" type="button" onClick={() => setPage(page + 1)}>Load More</button>
        </div>}
    </>
};

export default Home;