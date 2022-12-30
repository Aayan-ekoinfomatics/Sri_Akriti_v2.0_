import necklace from "../assets/images/dawn-necklace.png";

const product_details = {
  product: [
    {
      route:'', 
      id: 'AJ 123 ABC',
      title: "A Quiet Dawn Necklace in Platinum",
      original_price: 1700,
      discount_price: 1530,
      offer: "10% OFF",
      discription:
        "We specialize in Pt950 and Pt/K18 men's chains, bracelets and kada's. We use your Diamonds to create your dream designs into to live piece. A PGI authorized manufacturer.",
      description_list: ['Metal : Platinum', 'Platinum Purity : 95%', 'Purity Mark : Pt 950', 'Width : 1 mm', 'Thickness : 0.5 mm', 'Length : 16, 18 20, 22 inches (Length can be custom made on order)', 'Estimated Weight : 1.70 grams ( 16 inches )', 'Certificate of Authenticity : Platinum Guild International',
          ],
      images: [necklace, necklace, necklace, necklace],
      delivery_date: "12/03/2023",
      breadcrumbs: [
        { link_name: "Home", path: "/" },
        { link_name: "Necklace",  },
        { link_name: "Type | Necklace Platinum" },
      ],
    },
  ],
  images: [
    {
      img: necklace,
    },
    {
      img: necklace,
    },
    {
      img: necklace,
    },
    {
      img: necklace,
    },
  ],
};

export default product_details;
