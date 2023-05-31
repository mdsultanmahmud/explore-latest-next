import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';


const Movie = async() => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const res = await fetch(url)
    const data = await res.json()
    return (
        <>
            <h1 className='my-12 font-bold uppercase text-xl text-green-800 text-center'>Our All Movie</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12'>
                {
                    data.map(movie => <MovieCard movieProvider={movie} key={movie.id}/> )
                }
            </div>
        </>
    );
};

export default Movie;