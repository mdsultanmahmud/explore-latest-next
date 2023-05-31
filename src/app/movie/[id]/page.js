import React from 'react';

const page = async ({ params }) => {
    const id = params.id
    console.log(id)
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    const res = await fetch(url)
    const data = await res.json()
    const {name, username, email, phone, address, website, company} = data 
    return (
        <div className='md:w-[70%] lg:w-[50%] mx-auto my-20 p-4'>
            <div className="card bg-base-500 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><strong>Name: </strong> {name}</h2>
                    <h2 className="card-title"><strong>Username: </strong> {username}</h2>
                    <h2 className="card-title"><strong>Email: </strong> {email}</h2>
                    <h2 className="card-title"><strong>Phone: </strong> {phone}</h2>
                    <h2 className="card-title"><strong>Website: </strong> {website}</h2>
                    <h2 className="card-title"><strong>Comapny: </strong> {company.name}</h2>
                    <h2 className="card-title mt-12 mb-2">Address....</h2>
                    <address>
                        <p>{address.street}</p>
                        <p>{address.suite}</p>
                        <p>{address.city}</p>
                        <p>{address.zipcode}</p>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default page;