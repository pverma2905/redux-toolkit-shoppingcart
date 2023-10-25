import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem } from '../feature/CartSlice';
export default function CartPage() {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);
    // console.log("cart", cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart])

    const inputChangedHandler = (e) => {
        console.log(e)
    }



    return (
        <div>
            <section className="h-100 gradient-custom" >
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                                </div>
                                <div className="card-body">
                                    {cart.map((data) => (
                                        <div className="row" key={data.id}>
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

                                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                    <img src={data.img} width={100} height={120} />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">

                                                <p><strong>{data.title}</strong></p>
                                                <p>Price:<strong>{data.price}</strong></p>
                                                {/* <p>Color: blue</p>
                                            <p>Size: M</p> */}
                                                <button type="button" className="btn btn-primary btn-sm me-1 mb-2"
                                                    onClick={() => dispatch(removeItem(data.id))}
                                                    data-mdb-toggle="tooltip" title="Remove item">
                                                    <i className="fas fa-trash" />
                                                </button>
                                                {/* <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                                                <i className="fas fa-heart" />
                                            </button> */}

                                            </div>
                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                {/* Quantity */}
                                                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                    <button
                                                        className="btn btn-primary px-3 me-2"
                                                        onClick={() =>
                                                            dispatch(decreaseItemQuantity(data.id))
                                                        }
                                                    >
                                                        <i className="fas fa-minus" />
                                                    </button>

                                                    <div className="form-outline">
                                                        <input
                                                            id="form1" min={0}
                                                            name="quantity"
                                                            value={data.quantity} type="number"
                                                            onChange={(event) => inputChangedHandler(event)}
                                                            className="form-control" />

                                                        <label className="form-label" htmlFor="form1">Quantity</label>
                                                    </div>
                                                    <button className="btn btn-primary px-3 ms-2"
                                                        onClick={() =>
                                                            dispatch(increaseItemQuantity(data.id))
                                                        }
                                                    >
                                                        <i className="fas fa-plus" />
                                                    </button>
                                                </div>

                                                <p className="text-start text-md-center">
                                                    <strong>{data.price}</strong>
                                                </p>

                                            </div>
                                            <hr className="my-4" />
                                        </div>

                                    ))}




                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total Quantity
                                            <span>{totalQuantity}</span>
                                        </li>
                                        {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Gratis</span>
                                    </li> */}
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                {/* <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong> */}
                                            </div>
                                            <span><strong>{totalPrice}</strong></span>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>

    )
}
