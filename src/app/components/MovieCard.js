import Link from 'next/link';
import React from 'react';

const MovieCard = ({movieProvider}) => {
    const {name, username, email, phone, id} = movieProvider
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><strong>Name: </strong> {name}</h2>
                    <h2 className="card-title"><strong>Username: </strong> {username}</h2>
                    <h2 className="card-title"><strong>Email: </strong> {email}</h2>
                    <h2 className="card-title"><strong>Phone: </strong> {phone}</h2>
                    <div className="card-actions justify-end">
                        <Link href={`/movie/${id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;