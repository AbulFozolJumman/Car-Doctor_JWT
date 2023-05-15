import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const BookService = () => {
    const {user} = useContext(AuthContext);

    const service = useLoaderData();
    const { title, price, img, _id } = service;

    const handleBookService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value; 
        const date = form.date.value;
        const booking = {
            service_id: _id,
            customerName: name,
            service: title,
            email,
            img: img,
            date,
            duePrice: price,
        }
        console.log(booking);

        fetch("https://car-doctor-server-silk-xi.vercel.app/bookings", {
            method: "POST",
            headers: {
              'content-type': 'application/json'  
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            {
                if (data.insertedId) {
                    alert("Service Booking Successful")
                }
            }
        })
    }

    return (
        <div className="mb-28 p-24 bg-[#F3F3F3] rounded-xl">
            <h2 className="text-center text-3xl font-bold mb-6">Book Service: {title}</h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="form-control">
                        <input type="text" name="price" defaultValue={'$' + price} placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                </div> 
                <div className="form-control mt-6">
                    <button className="bg-[#FF3811] btn border-0 text-xl font-semibold">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default BookService;