export type ClothingItem = {
    id: number;
    label?: string;
    color?: string;
    image: string;
}

export type Outfit = {
    id: number;
    items: number[];
    timesWorn?: number;
};

export const clothes: ClothingItem[] = [
    { id: 1, label: 'PH Pink Skirt', color: 'pink', image: 'clothes-images/ph-pink-sk.png' },
    { id: 2, label: 'Brown Cardigan', color: 'brown', image: 'clothes-images/brown-cardi.png'  },
    { id: 3, label: 'PH Red JSK', color: 'red', image: 'clothes-images/ph-red-jsk.png'  },
    { id: 4, label: 'PH Pink Blouse', color: 'pink', image: 'clothes-images/ph-pink-bl.png'  },
    { id: 5, label: 'PH-style White Skirt', color: '#eeeeee', image: 'clothes-images/white-max-sk.png'  },
    { id: 6, label: 'Brown Boots', color: 'brown', image: 'clothes-images/brown-boots.png'  },
    { id: 7, label: 'Fossil Brown Bag', color: 'brown', image: 'clothes-images/fossil-brown-bag.png'  },
    { id: 8, label: 'White Turtleneck', color: '#eeeeee', image: 'clothes-images/turtleneck.png'  },
    { id: 9, label: 'PH Red & White Cardigan', color: 'pink', image: 'clothes-images/ph-red-white-cardi.png'  },
    { id: 10, label: 'PH Strawberry Blouse', color: '#eeeeee', image: 'clothes-images/ph-strawb-blouse.png'  },
    { id: 11, label: 'PH-Style Pink Checkered Vest', color: 'pink', image: 'clothes-images/pink-vest.png'  },
    { id: 12, label: 'Bally Brown Bag', color: 'brown', image: 'clothes-images/bally-bag.png'  },
    { id: 13, label: 'Laura Ashley Blouse', color: '#eeeeee', image: 'clothes-images/laura-ashley-blouse.png'  },
    { id: 14, label: 'Uniqlo Tan Cardigan', color: 'brown', image: 'clothes-images/uniqlo-tan-cardi.png'  },
    { id: 15, label: 'White T-Shirt', color: '#eeeeee', image: 'clothes-images/white-tshirt.png'  },
    { id: 16, label: 'Pink Converse', color: 'pink', image: 'clothes-images/pink-converse.png'  },
    { id: 17, label: 'White Camisole', color: '#eeeeee', image: 'clothes-images/white-cami.png'  },
    { id: 18, label: 'Small Black Bag', color: '#111111', image: 'clothes-images/black-bag-s.png'  },
    { id: 19, label: 'Black Boots', color: '#111111', image: 'clothes-images/black-boots.png'  },
    { id: 20, label: 'White Frilly Socks', color: '#eeeeee', image: 'clothes-images/frilly-socks.png' },
    { id: 21, label: 'White Mary Janes', color: '#eeeeee', image: 'clothes-images/white-mary-janes.png' },
    { id: 22, label: 'White Button-Down', color: '#eeeeee', image: 'clothes-images/uniqlo-wh-bl.png'  },
    { id: 23, label: 'White Sandals', color: '#eeeeee', image: 'clothes-images/white-sandals.png'  },
    { id: 24, image: 'clothes-images/ph-bl-sk.png'},
    { id: 25, image: 'clothes-images/grey-vest.png'},
    { id: 26, image: 'clothes-images/ingeborg-sk.png'},
    { id: 27, image: 'clothes-images/uniqlo-wh-sweater.png'},
    { id: 28, image: 'clothes-images/white-puffer.png'},
    { id: 29, image: 'clothes-images/red-sweater.png'},
    { id: 30, image: 'clothes-images/trench.png'},
    { id: 31, image: 'clothes-images/knitted-wh-sk.png'},
    { id: 32, image: 'clothes-images/wh-sweatshirt.png'},
    { id: 33, image: 'clothes-images/wh-belt.png'},
    { id: 34, image: 'clothes-images/bl-jeans.png'},
    { id: 35, image: 'clothes-images/bl-tights.png'},
    { id: 36, image: 'clothes-images/blu-earrings.png'},
    { id: 37, image: 'clothes-images/blu-dress.png'},
    { id: 38, image: 'clothes-images/leather-jk.png'},
    { id: 39, image: 'clothes-images/star-nckl.png'},
    { id: 40, image: 'clothes-images/white-lace-dress.png'},
    { id: 41, image: 'clothes-images/white-heels.png'},
    { id: 42, image: 'clothes-images/wisteria-earrings.png'},
    { id: 43, image: 'clothes-images/purp-floral-dr.png'},
    { id: 44, image: 'clothes-images/whi-cardi.png'},
    { id: 45, image: 'clothes-images/wh-tights.png'},
    { id: 46, image: 'clothes-images/ph-strawb-op.png'},
    { id: 47, image: 'clothes-images/bl-halter.png'},
    { id: 48, image: 'clothes-images/brown-cargos.png'},
    { id: 49, image: 'clothes-images/heart-earrings.png'},
    { id: 50, image: 'clothes-images/blu-sweater.png'},
    { id: 51, image: 'clothes-images/mofusand-tshirt.png'},
    { id: 52, image: 'clothes-images/blk-sneakers.png'},
    { id: 53, image: 'clothes-images/gr-sweater.png'},


]

export const outfits: Outfit[] = [
    {id: 1, items: [1, 2, 3, 4, 5, 6, 7]},
    {id: 2, items: [8, 9, 1, 5, 6]},
    {id: 3, items: [10, 11, 12, 1, 5, 6]},
    {id: 4, items: [13, 14, 1, 5, 6]},
    {id: 5, items: [1, 5, 6, 7, 13, 2]},
    {id: 6, items: [15, 16, 1, 14]},
    {id: 7, items: [17, 18, 19, 1, 11]},
    {id: 8, items: [20, 21, 1, 5, 10, 11]},
    {id: 9, items: [1, 3, 4, 6]},
    {id: 10, items: [1, 22, 23]},
    {id: 11, items: [24, 25, 10, 5, 6, 7]},
    {id: 12, items: [26, 27, 28, 22, 6]},
    {id: 13, items: [29, 30, 31, 6, 7]},
    {id: 14, items: [32, 33, 34, 28, 6, 7]},
    {id: 15, items: [35, 36, 37, 38, 39, 24, 18, 19]},
    // {id: 16, items: [40, 41]},
    {id: 17, items: [42, 43, 44, 45, 6, 12]},
    {id: 18, items: [46, 6, 5, 2], timesWorn: 2},
    {id: 19, items: [47, 48, 49, 18, 19, 38]},
    {id: 20, items: [5, 6, 7, 46, 2, 3]},
    {id: 21, items: [50, 6, 7, 33, 22, 34]},
    {id: 22, items: [51, 52, 2, 48]},
    {id: 23, items: [53, 6, 7, 31]},
    {id: 24, items: [31, 22, 27, 19]},
]
