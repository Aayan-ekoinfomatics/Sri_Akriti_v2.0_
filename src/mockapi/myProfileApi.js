import img1 from '../assets/images/chain.png'

const profile_data = {
    my_profile: {
        header: {heading: 'My Profile', sub_heading: 'Edit'},
        content: [
            {label: 'Name', type: 'text'},
            {label: 'Gender', type: 'text'},
            {label: 'Date Od Birth', type: 'date'},
            {label: 'Email ID', type: 'email'},
            {label: 'Phone Number', type: 'number'},
        ],
    },
    my_orders: {
        header: {heading: 'My Orders', sub_heading: 'All Orders'},
        content : [
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
        ]
    },
    wishlist: {
        header: {heading: 'My Wishlist', sub_heading: 'Edit'},
        content: [
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
        ],
    },
    address: {
        header: {heading: 'Address', sub_heading: 'Add', edit: 'edit'},
        content: [
            {area: '1, 1 Ashish Shopping Centre, C G Road, Navrangpura', city: 'Ahmedabad, Gujrat', pincode: '380009'},
            {area: 'TV Complex, 2, 60 Feet Rd, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka', city: 'Bangaluru, Karnataka', pincode: '560034'},
            {area: '40, 80 Feet Rd, Hal, HAL 3rd Stage, Indiranagar, Bengaluru, Karnataka', city: 'Bangaluru, Karnataka', pincode: '560038'},
        ]
    },
    card: {
        header: {heading: 'Cards', sub_heading: 'Add'},
        content: [
            {card_number: '4454-0213-4594-4523', name: 'Vicky Waelchi', cvv: '623', expiry: '12/2023' },
            {card_number: '4454-0213-4594-4523', name: 'Vicky Waelchi', cvv: '623', expiry: '12/2023' },
            {card_number: '4454-0213-4594-4523', name: 'Vicky Waelchi', cvv: '623', expiry: '12/2023' },
            {card_number: '4454-0213-4594-4523', name: 'Vicky Waelchi', cvv: '623', expiry: '12/2023' },
        ],
    },
};

export default profile_data;