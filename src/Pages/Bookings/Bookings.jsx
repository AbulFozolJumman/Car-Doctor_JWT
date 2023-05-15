import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingList from "./BookingList";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate();

    const deleteHandler = (id) => {
        const proceed = confirm("Are you sure you want to delete?")
        if (proceed) {
            fetch(`https://car-doctor-server-silk-xi.vercel.app/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Deleted successfully");
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
        }
    }

    
    const updateHandler = (id) => {
            fetch(`https://car-doctor-server-silk-xi.vercel.app/bookings/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({status: "confirm"})
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = "confirm"
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
                }
            })
    }

    const url = `https://car-doctor-server-silk-xi.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("car-access-token")}`
            },
            // body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else{
                    navigate('/')
                }
            })
    }, [url, navigate])

    return (
        <div className="mb-28">
            {
                bookings?.map(booking => 
                <BookingList key={booking._id} booking={booking} deleteHandler={deleteHandler} updateHandler={updateHandler}>
                </BookingList>)
            }
        </div>
    );
};

export default Bookings;