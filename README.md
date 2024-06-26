# Tree Traversal and Graphs

- Breath First Search
- Depth First Search

* When looking for shortest path you work with the BFS algorithms
* DFS is also really good for solving maze puzzle problems by going to the deepest and furthest node to find the node it needs.

There are directed graphs and weighted graphs that also determine how fast the algorithm will traverse through the graph. You need to explore:

## Djikstra and Bellman Ford

Dijkstra's algorithm is commonly used on graphs where the edge weights are positive integers or real numbers. It can be generalized to any graph where the edge weights are partially ordered, provided the subsequent labels (a subsequent label is produced when traversing an edge) are monotonically non-decreasing. This algorithm cannot accomodate negative weights.

Imagine you have a map with different cities connected by roads, each road having a certain distance. The Bellman–Ford algorithm is like a guide that helps you find the shortest path from one city to all other cities, even if some roads have negative lengths. It’s like a GPS for computers, useful for figuring out the quickest way to get from one point to another in a network. In this article, we’ll take a closer look at how this algorithm works and why it’s so handy in solving everyday problems.

A Bellman-Ford algorithm is also guaranteed to find the shortest path in a graph, similar to Dijkstra’s algorithm. Although Bellman-Ford is slower than Dijkstra’s algorithm, it is capable of handling graphs with negative edge weights, which makes it more versatile. The shortest path cannot be found if there exists a negative cycle in the graph.

## Conclusion

In the worst-case scenario, a shortest path between two vertices can have at most N-1 edges, where N is the number of vertices. This is because a simple path in a graph with N vertices can have at most N-1 edges, as it’s impossible to form a closed loop without revisiting a vertex. *Bellman Ford

The time complexity of Dijkstra’s Algorithm is typically O(V2) when using a simple array implementation or O((V + E) log V) with a priority queue, where V represents the number of vertices and E represents the number of edges in the graph. The space complexity of the algorithm is O(V) for storing the distances and predecessors for each node, along with additional space for data structures like priority queues or arrays.
