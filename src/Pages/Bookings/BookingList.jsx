

const BookingList = ({ booking, deleteHandler, updateHandler }) => {
    const { img, service, date, duePrice, customerName, _id, status } = booking;


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <th>
                                <button onClick={()=>deleteHandler(_id)} className="btn btn-circle btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="rounded w-24 h-24">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service}</div>
                                        <div className="text-sm opacity-50">{customerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>Date: {date}</td>
                            <td>Price: ${duePrice}</td>
                            <th>
                                {
                                    status === 'confirm' ? <span className="text-[#FF3811] font-bold">Confirmed</span>
                                    : <button onClick={()=> updateHandler(_id)} className="btn mr-5 bg-[#FF3811] outline-none border-opacity-0">Confirm</button>
                                }
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;