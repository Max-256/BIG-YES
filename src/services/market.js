
import image from '../images/good.jpg';

const goods = [
    {
        _id: 1,
        image: image,
        good: "good one",
        price: "11000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 2,
        image: image,
        good: "good two",
        price: "9000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 3,
        image: image,
        good: "good three",
        price: "13000 ",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 4,
        image: image,
        good: "good four",
        price: "56000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 5,
        image: image,
        good: "good five",
        price: "78000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 6,
        image: image,
        good: "good six",
        price: "89000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 7,
        image: image,
        good: "good seven",
        price: "60000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 8,
        image: image,
        good: "good eight",
        price: "1000000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 9,
        image: image,
        good: "good nine",
        price: "67000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 10,
        image: image,
        good: "good ten",
        price: "200000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 11,
        image: image,
        good: "good eleven",
        price: "19000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 12,
        image: image,
        good: "good twelve",
        price: "12000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 13,
        image: image,
        good: "good thirteen",
        price: "17000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 14,
        image: image,
        good: "good forteen",
        price: "50000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    },
    {
        _id: 15,
        image: image,
        good: "good fifteen",
        price: "1000000",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi est molestiae repellendus id adipisci odio.",
        condition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        seller: "sit amet consectetur",
        contact: "0777856982"
    }   
]

export function getGoods(){
    return goods;
}

export function getGood(id){
    const good = goods.filter(g => g._id == id);
    return good[0];
}