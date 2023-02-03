import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)

    const {addProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addProduct({...detail, quantity: cantidad})
    }

    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.img} alt="detail" />
            <aside className="detail-aside">
                <h4>{detail.titulo}</h4>
                <p>Stock: {detail.stock}</p>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={detail.stock} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn btn-primary p-2">
                        <Link to="/cart" style={{color: "black", textDecoration: "none"}}>
                            Ir al carrito
                        </Link>
                    </button>
                }
            </aside>
        </div>
    );
};

export default ItemDetail;
