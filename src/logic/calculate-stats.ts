/**
 * Returns a number 0-1 that indicates how dense the graph is. 1 is most dense (complete graph) 0 is least (no edges).
 * @param numEdges number of edges in the graph
 * @param numNodes number of edges/vertices in the graph
 */
export const calculateGraphDensity = (numEdges: number, numNodes: number): number => {
    return (2 * numEdges) / (numNodes * (numNodes - 1));
}