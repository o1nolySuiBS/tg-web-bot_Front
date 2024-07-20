import React, {useCallback, useEffect, useState} from 'react';
import ProductItem from '../../ProductItem/ProductItem';
import './ProductList.css';
import { useTelegram } from "../../hooks/useTelegram";
import axios from 'axios';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
};

const products = [
    {
        id: 1,
        title: 'Nike Air Max',
        price: 120.00,
        description: 'Comfortable and stylish sneakers from Nike, perfect for everyday wear.'
    },
    {
        id: 2,
        title: 'Levi\'s 501 Original Fit Jeans',
        price: 89.99,
        description: 'Classic straight-leg jeans from Levi\'s, known for their durability and comfort.'
    },
    {
        id: 3,
        title: 'Adidas Performance T-Shirt',
        price: 25.00,
        description: 'Lightweight and breathable t-shirt from Adidas, ideal for sports and casual wear.'
    },
    {
        id: 4,
        title: 'Under Armour Hoodie',
        price: 55.00,
        description: 'Soft and warm hoodie from Under Armour, perfect for cooler weather.'
    },
    {
        id: 5,
        title: 'Puma Running Shorts',
        price: 30.00,
        description: 'Lightweight running shorts from Puma, designed for maximum comfort during workouts.'
    },
    {
        id: 6,
        title: 'Columbia Fleece Jacket',
        price: 70.00,
        description: 'Warm and cozy fleece jacket from Columbia, ideal for outdoor activities.'
    },
    {
        id: 7,
        title: 'New Balance Running Shoes',
        price: 100.00,
        description: 'High-performance running shoes from New Balance, designed for maximum comfort and support.'
    },
    {
        id: 8,
        title: 'The North Face Backpack',
        price: 90.00,
        description: 'Durable and spacious backpack from The North Face, perfect for travel and outdoor adventures.'
    },
    {
        id: 9,
        title: 'Patagonia Cap',
        price: 35.00,
        description: 'Stylish and functional cap from Patagonia, made from organic cotton.'
    },
    {
        id: 10,
        title: 'Ray-Ban Aviator Sunglasses',
        price: 150.00,
        description: 'Classic aviator sunglasses from Ray-Ban, providing 100% UV protection.'
    },
    {
        id: 11,
        title: 'H&M Cotton T-Shirt',
        price: 12.99,
        description: 'Affordable and comfortable cotton t-shirt from H&M, available in various colors.'
    },
    {
        id: 12,
        title: 'Uniqlo Ultra Light Down Jacket',
        price: 79.90,
        description: 'Ultra light down jacket from Uniqlo, providing warmth without bulk.'
    }
];

const getTotalPrice = (items: Product[] = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
}

const ProductList: React.FC = () => {
    const [addedItems, setAddedItems] = useState<Product[]>([]);
    const { tg, queryId } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products:addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        };
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, []);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    const onAdd = (product: Product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems: Product[];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купити ${getTotalPrice(newItems)}`
            });
        }
    };

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;