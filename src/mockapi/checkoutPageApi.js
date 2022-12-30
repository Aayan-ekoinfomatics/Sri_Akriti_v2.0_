import img from '../assets/images/chain.png'


const checkout = {
    path: {first:'Delivery /', second:'Payment /', third:'Summary'},
    form: {
        header:{heading: 'Delivery Details', sub_heading: 'Edit'},
        content:[
            {label: 'First Name', input: 'text'},
            {label: 'Last Name', input: 'text'},
            {label: 'Email ID', input: 'email'},
            {label: 'Phone Number', input: 'number'},
        ]
    },
    address: {
        header:{heading: 'Address', sub_heading: 'Edit'},
        content:[
            {locality: '1, 1 Ashish Shopping Centre, C G Road, Navrangpura', city: 'Ahmedabad, Gujrat', pincode: '380009'},
        ]
    },
    card: {
        header:{heading: 'Card', sub_heading: 'Edit'},
        content:[
            {number: '4454-0213-4594-4523', cvv: '623', name: 'Vicky Waelchi', expiry: '12/2023',},
        ]
    },
    item: {
        header:{heading: 'Item Details', sub_heading: 'Edit'},
        content: [
            {id: 'SJ PTB 307', image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000', discount_price: '18000', qty: '1'},
            {id: 'SJ PTB 307', image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000', discount_price: '18000', qty: '1'},
            {id: 'SJ PTB 307', image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000', discount_price: '18000', qty: '1'},
            {id: 'SJ PTB 307', image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000', discount_price: '18000', qty: '1'},
            {id: 'SJ PTB 307', image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000', discount_price: '18000', qty: '1'},
            {id: 'SJ PTB 307', image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000', discount_price: '18000', qty: '1'},
            {id: 'SJ PTB 307', image: img, title:'A Quiet Dawn Necklace in Platinum', price: '21000', discount_price: '18000', qty: '1'},
        ]
    },
    checkout_data: {
        coupon: {title:'Coupon Code', button: 'Add',},
        packaging: {title:'Gift Packaging', button: 'Add',},
        sub_total: {title:'Sub Total', amount: '21,000',},
        shipping: {title: 'Shipping', charges: '100'},
        tax: {title: 'Estimated Tax', amount: '1.8%',},
        total: {title:'Estimated Total', amount: '21000',},
        checkout_button: 'CONTINUE',
    },
}

export default checkout;