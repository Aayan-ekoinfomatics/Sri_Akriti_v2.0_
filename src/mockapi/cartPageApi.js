import img from '../assets/images/chain.png'

const card_data = {
    products: [
        {id: 9072, image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000' , quantity: '1'},
        {id: 9072, image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000' , quantity: '1'},
        {id: 9072, image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000' , quantity: '1'},
        {id: 9072, image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000' , quantity: '1'},
        {id: 9072, image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000' , quantity: '1'},
        {id: 9072, image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000' , quantity: '1'},
    ],
    checkout_data: {
        coupon: {title:'Coupon Code', button: 'Add',},
        packaging: {title:'Gift Packaging', button: 'Add',},
        sub_total: {title:'Sub Total', amount: '21,000a',},  
        making_charges: {title:'Making Charges', amount: '21',},  
        shipping: {title: 'Shipping', charges: '100'},
        tax: {title: 'Estimated Tax', amount: '1.8%',},
        total: {title:'Estimated Total', amount: '21000',},
        checkout_button: 'CHECKOUT',
    },
}

export default card_data;

