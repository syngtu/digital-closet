import { useEffect, useRef } from 'react';
import {Network, type Node, type Edge} from 'vis-network';
import { DataSet } from "vis-data";
import {makeDataFromWardrobe, type WardrobeData} from "../processing.ts";
import {clothes, outfits} from "../data/wardrobe.ts";

const wardrobe: WardrobeData = makeDataFromWardrobe(clothes, outfits);
const nodes: Node[] = wardrobe.clothes;
const edges: Edge[] = wardrobe.outfits;

export const NetworkGraph = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const data = {
      nodes: new DataSet(nodes),
      edges: new DataSet(edges),
    };

    const options = {
      nodes: {
        shape: 'dot',
        size: 8,
      },
      physics: {
        enabled: true,
      },
    };

    const network = new Network(containerRef.current, data, options);

    console.log(data.nodes)

    // Handle node selection
    network.on('selectNode', function (params) {
      const selectedNodeId = params.nodes[0];
      const connectedEdges = network.getConnectedEdges(selectedNodeId);

      // Set opacity of connected edges to 1.0
      connectedEdges.forEach(function (edgeId) {
        data.edges.update({
          id: edgeId,
          color: {
            color: '#000000',
            opacity: 1.5
          }
        });
      });

      console.log('data edges')
      console.log(data.edges)
    });

  // Handle node deselection
    network.on('deselectNode', function () {
      // Reset opacity of all edges to 0.3
      edges.forEach(function (edge) {
        data.edges.update({
          id: edge.id,
          color: {
            color: '#000000',
            opacity: 0.1
          }
        });
      });
    });

    return () => {
      network.destroy();
    };
  }, []);

  return (
      <div
          ref={containerRef}
          style={{
            height: '100vh',
            width: '100vw',
            border: '1px solid #ccc',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          }}
      />
  );};