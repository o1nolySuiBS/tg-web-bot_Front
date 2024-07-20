import React from 'react';
import Button from '../components/Button/Button';

import '../ProductItem.css';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
};

type ProductItemProps = {
    product: Product;
    className?: string;
    onAdd: (product: Product) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, className = '', onAdd }) => {

    const onAddHandler = () => {
        onAdd(product);
    };

    return (
        <div className={'product ' + className}>
            <div className={'img'} />
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Вартість:<b>{product.price}</b></span>
                <div>
                    <Button className={'add-btn'} onClick={onAddHandler}>
                        Добавити в корзину
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
