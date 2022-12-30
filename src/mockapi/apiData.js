import bracelet from "../assets/images/bracelet.png";
import chain from "../assets/images/chain.png";

const collection_data = {
  filters: [
    {
      title: "M or F",
      checkbox: ["Womens Band only", "Mens Band only", "Couple Rings", "Unisex Rings"],
    },
    {
      title: "PRICE",
      checkbox: ["0-10,000", "10,000-20,000", "20,000-50,000", "Over 50,000"],
    },
    {
      title: "PRODUCT TYPE",
      checkbox: ["Chain", "Neckless", "Bracelet", "Rings"],
    },
    // {
    //   title: "M or F",
    //   checkbox: ["Womens Platinum bracelet", "Mens Platinum Bracelet"],
    // },
    {
      title: "METERIAL",
      checkbox: ["Plain Platinum Rings", "Plain Platinum Bracelets", "Diamond Jewellery", "Platinum & Gold Fusion Jewellery", "Men's Plain & Women's Diamond Ring", "Ruby", "Emerald", "Sapphire"],
    },
    {
      title:"DIAMOND SHAPE",
      checkbox:["Round Brilliant Cut", "Princess Cut", "Baguette Cut", "Emerald Cut"]
    }
  ],
  sort: [
    { title: 'Best Selling' },
    { title: 'Alphabeticaly, A - Z' },
    { title: 'Alphabeticaly, Z - A' },
    { title: 'Price, low to high' },
    { title: 'Price, high to low' },
    { title: 'Date, old to new' },
    { title: 'Date, new to old' },
  ],
  category: "ALL COLLECTION",
  // category: "NECKLACE",
  // category: "RINGS",
  // category: "EARRINGS",
  // category: "BRACELETS",

  category_details:
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  category_image: bracelet,
  products: [
    {
      product_id: "2202",
      image: bracelet,
      product_name: "product 1",
      price: 2000,
    },
    {
      product_id: "2203",
      image: chain,
      product_name: "product 2",
      price: 23000,
    },
    {
      product_id: "2204",
      image: bracelet,
      product_name: "product 3",
      price: 5700,
    },
    {
      product_id: "2205",
      image: chain,
      product_name: "product 4",
      price: 9000,
    },
    {
      product_id: "2206",
      image: bracelet,
      product_name: "product 5",
      price: 16000,
    },
    {
      product_id: "2102",
      image: chain,
      product_name: "product 1",
      price: 2000,
    },
    {
      product_id: "2303",
      image: bracelet,
      product_name: "product 2",
      price: 23000,
    },
    {
      product_id: "2404",
      image: chain,
      product_name: "product 3",
      price: 5700,
    },
    {
      product_id: "2505",
      image: bracelet,
      product_name: "product 4",
      price: 9000,
    },
    {
      product_id: "2606",
      image: chain,
      product_name: "product 5",
      price: 16000,
    },
    {
      product_id: "2702",
      image: bracelet,
      product_name: "product 1",
      price: 2000,
    },
    {
      product_id: "2803",
      image: chain,
      product_name: "product 2",
      price: 23000,
    },
    {
      product_id: "2904",
      image: bracelet,
      product_name: "product 3",
      price: 5700,
    },
    {
      product_id: "2215",
      image: chain,
      product_name: "product 4",
      price: 9000,
    },
    {
      product_id: "2226",
      image: bracelet,
      product_name: "product 5",
      price: 16000,
    },
  ],

  // all_products: [
  //   {
  //     category: "ALL COLLECTIONS",
  //     id: "1001",
  //     category_details:
  //       "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     category_image: bracelet,
  //     products: [
  //       {
  //         product_id: "2202",
  //         image: bracelet,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2203",
  //         image: chain,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2204",
  //         image: bracelet,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2205",
  //         image: chain,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2206",
  //         image: bracelet,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //       {
  //         product_id: "2102",
  //         image: chain,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2303",
  //         image: bracelet,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2404",
  //         image: chain,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2505",
  //         image: bracelet,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2606",
  //         image: chain,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //       {
  //         product_id: "2702",
  //         image: bracelet,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2803",
  //         image: chain,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2904",
  //         image: bracelet,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2215",
  //         image: chain,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2226",
  //         image: bracelet,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //     ],
  //   },
  //   {
  //     category: "NECKLACE",
  //     id: "1002",
  //     category_details:
  //       "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     category_image: bracelet,
  //     products: [
  //       {
  //         product_id: "2202",
  //         image: bracelet,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2203",
  //         image: chain,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2204",
  //         image: bracelet,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2205",
  //         image: chain,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2206",
  //         image: bracelet,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //       {
  //         product_id: "2102",
  //         image: chain,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2303",
  //         image: bracelet,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2404",
  //         image: chain,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2505",
  //         image: bracelet,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2606",
  //         image: chain,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //       {
  //         product_id: "2702",
  //         image: bracelet,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2803",
  //         image: chain,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2904",
  //         image: bracelet,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2215",
  //         image: chain,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2226",
  //         image: bracelet,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //     ],
  //   },
  //   {
  //     category: "BRACELET",
  //     id: "1003",
  //     category_details:
  //       "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     category_image: bracelet,
  //     products: [
  //       {
  //         product_id: "2202",
  //         image: bracelet,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2203",
  //         image: chain,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2204",
  //         image: bracelet,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2205",
  //         image: chain,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2206",
  //         image: bracelet,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //       {
  //         product_id: "2102",
  //         image: chain,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2303",
  //         image: bracelet,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2404",
  //         image: chain,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2505",
  //         image: bracelet,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2606",
  //         image: chain,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //       {
  //         product_id: "2702",
  //         image: bracelet,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2803",
  //         image: chain,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2904",
  //         image: bracelet,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2215",
  //         image: chain,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2226",
  //         image: bracelet,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //     ],
  //   },
  //   {
  //     category: "RINGS",
  //     id: "1004",
  //     category_details:
  //       "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     category_image: bracelet,
  //     products: [
  //       {
  //         product_id: "2202",
  //         image: bracelet,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2203",
  //         image: chain,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2204",
  //         image: bracelet,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2205",
  //         image: chain,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2206",
  //         image: bracelet,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //       {
  //         product_id: "2102",
  //         image: chain,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2303",
  //         image: bracelet,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2404",
  //         image: chain,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2505",
  //         image: bracelet,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2606",
  //         image: chain,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //       {
  //         product_id: "2702",
  //         image: bracelet,
  //         product_name: "product 1",
  //         price: 2000,
  //       },
  //       {
  //         product_id: "2803",
  //         image: chain,
  //         product_name: "product 2",
  //         price: 23000,
  //       },
  //       {
  //         product_id: "2904",
  //         image: bracelet,
  //         product_name: "product 3",
  //         price: 5700,
  //       },
  //       {
  //         product_id: "2215",
  //         image: chain,
  //         product_name: "product 4",
  //         price: 9000,
  //       },
  //       {
  //         product_id: "2226",
  //         image: bracelet,
  //         product_name: "product 5",
  //         price: 16000,
  //       },
  //     ],
  //   },
  // ],
};

export default collection_data;


