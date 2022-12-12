
import React from 'react'
import { Link } from 'react-router-dom';

function Pagination(props) {

    const pageNumbers = [];
    let count = 0;
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <>
            {
                <nav >


                    <ul className="nav justify-content-center isotope-options mb-60 pb-30">
                        {pageNumbers.map(number => (


                            <li key={number} className="page-item">
                                <Link onClick={() => props.paginate(number)} to="#!" className="btn btn-light btn-circle btn-xs page-item page-link">
                                    {number}
                                </Link>
                            </li>


                        ))}
                    </ul>
                </nav>

            }


        </>
    );
}

export default Pagination;