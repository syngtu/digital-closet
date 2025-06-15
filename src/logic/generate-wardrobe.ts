import type {ClothingItem, Outfit} from "../data/wardrobe.ts";
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
        size: frequencyMap[item.id]*2 + 10 || 0,
        shape: 'image',
    }));

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
    console.log(edgeMap);

    const maxEdgeWidthMap: Record<number, number> = {};

    for (const edge of Object.values(edgeMap)) {
        maxEdgeWidthMap[edge.to] = Math.max(maxEdgeWidthMap[edge.to] || 0, edge.width);
        maxEdgeWidthMap[edge.from] = Math.max(maxEdgeWidthMap[edge.from] || 0, edge.width)
    }

    const edges: Edge[] = Object.values(edgeMap).map(item => {
        const width = typeof item.width === 'number' ? item.width : 1;
        const max_weight_of_bigger_node = Math.max(maxEdgeWidthMap[item.from], maxEdgeWidthMap[item.to]);

        return {
            from: item.from,
            to: item.to,
            value: width,
            color: {
                color: '#FFC0CB',
                opacity: 0.5,
            },
            scaling: {
                max: 40
            },
            // length: calcSpringLength(3, 50, max_weight_of_bigger_node, width)
        };
    });

    console.log(edges);

    return {
        outfits: edges,
        clothes: nodes,
    };

}

const calcSpringLength = (min: number, max: number, largestValue: number, value: number): number => {

    const scale = value / largestValue;
    return max - (max - min)*scale;

}