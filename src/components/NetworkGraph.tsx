import { useEffect, useRef } from 'react';
import {Network, type Node, type Edge} from 'vis-network';
import { DataSet } from "vis-data";
import {makeDataFromWardrobe, type WardrobeData} from "../logic/generate-wardrobe.ts";
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
        solver: 'forceAtlas2Based',
        forceAtlas2Based: {
          // theta: 0.8, // accuracy vs speed
          // gravitationalConstant: -20,
          // damping: 0.8,
          avoidOverlap: 1,
          // centralGravity: 0.005, // smaller = spread out more, default 0.01
          // springConstant: 0.06, // lower = looser
        },
      },
      interaction: {
        multiselect: true,
        navigationButtons: true
      },
    };

    const network = new Network(containerRef.current, data, options);

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
            opacity: 0.8
          }
        });
      });

    });

  // Handle node deselection
    network.on('deselectNode', function () {
      // Reset opacity of all edges to 0.3
      edges.forEach(function (edge) {
        data.edges.update({
          id: edge.id,
          color: {
            color: '#FFC0CB',
            opacity: 0.5
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
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          }}
      />
  );};