import React, {useState, useEffect} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial))

    const decremento = () => {
        setCount(count - 1)
    }

    const incremento = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    return(
        <div>
            <button type='button' className='resta' disabled={count <= 1} onClick={decremento}>-</button>
            <span className='valor'>{count}</span>
            <button type='button' className='suma' disabled={count >= stock} onClick={incremento}>+</button>
            <button type="button" className="btn btn-danger" disabled={count <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount