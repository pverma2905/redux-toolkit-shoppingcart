import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../feature/CartSlice';

export default function ProductCard() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.allCart.items);
    console.log("xx", items)
    return (
        <div className="m-2">
            <MDBContainer>
                <MDBRow className='mb-3'>

                    {items.map((item) => (
                        <MDBCol size='md' key={item.id}>

                            <MDBCard>
                                <MDBCardImage src={item.img} position='top' alt={item.title} height={200} />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>
                                        {item.price}
                                    </MDBCardText>
                                    <MDBBtn onClick={() => dispatch(addToCart(item))}>Add To Cart</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    ))}



                </MDBRow>
            </MDBContainer>
        </div>

    );
}