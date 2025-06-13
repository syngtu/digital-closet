import type {ClothingItem, Outfit} from "./data/wardrobe.ts";
import type {Edge, Node} from "vis-network";

export type WardrobeData = {
    clothes: Node[];
    outfits: Edge[];
}

export const makeDataFromWardrobe = (clothes: ClothingItem[], outfits: Outfit[]): WardrobeData => {

    const frequencyMap: Record<number, number> = {};

    for (const outfit of outfits) {
        for (const itemId of outfit.items) {
            frequencyMap[itemId] = (frequencyMap[itemId] || 0) + 1;
        }
    }

    // Augment clothing items with `size` based on frequency
    const nodes: Node[] = clothes.map(item => ({
        ...item,
        label: undefined,
        size: frequencyMap[item.id]**1.5 + 10 || 0,
        shape: 'image',
    }));

    console.log(nodes)

    const edgeMap: Record<string, Edge> = {};
    let maxWidth = 1;

    for (const outfit of outfits) {
        const items = outfit.items;
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                const from = Math.min(items[i], items[j]);
                const to = Math.max(items[i], items[j]);
                const key = `${from}-${to}`;

                if (!edgeMap[key]) {
                    edgeMap[key] = { from, to, width: 1 };
                } else if (edgeMap[key].width) {
                    edgeMap[key].width += 1;
                    maxWidth = Math.max(maxWidth, edgeMap[key].width);
                }
            }
        }
    }



    const edges: Edge[] = Object.values(edgeMap).map(item => {
        const width = typeof item.width === 'number' ? item.width : 1;

        return {
            from: item.from,
            to: item.to,
            width: width**1.5,
            color: {
                color: '#000000',
                opacity: 0.15,
            }
        };
    });


    return {
        outfits: edges,
        clothes: nodes,
    };

}