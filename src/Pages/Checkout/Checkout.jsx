import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData();
    const { title } = service;
    return (
        <div className="mb-28 p-24 bg-[#F3F3F3] rounded-xl">
            <h2 className="text-center text-3xl font-bold mb-6">Checkout: {title}</h2>
            <form>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="form-control">
                        <input type="text" placeholder="First Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Last Name" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="form-control">
                        <input type="text" placeholder="Your Phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mb-6">
                        <input type="text" placeholder="Your Message" className="input input-bordered" />
                    </div>
                <div className="form-control mt-6">
                    <button className="bg-[#FF3811] btn border-0 text-xl font-semibold">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;