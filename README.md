[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12547926&assignment_repo_type=AssignmentRepo)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function. I have not provided any test code, but you can base
yours on test code from other exercises.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one!

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

**ANSWER**  
The first major thing we do is take initialize the distances for each of the nodes to default to Infinity.  
Because the code must iterate over every node in order to accomplish this, it takes |V| amount of time.  
Next up, the code moves onto the big while loop where a majority of the calculations will take place.  
This while loop will iterate over every node once again, so it has a runtime of |V| on its own. However, we  
must also account for the loops *within* the while loop as well. As a result, some of loops (namely the last  
one) will be multiplied by |V| in order to reflect how often they truly repeat.  
The first big loop we encounter will be one that goes over the edges for each node in order to check their  
current distances. This loop will go over every existing edge one time over the course of the whole program  
which gives it a time of |E|.  
After this, there's the loop which will choose which nodes to focus on in the next iteration of the while loop.  
Because this loop will check every existing node, it will take |V| amount of time to complete. However, because  
this loop is repeated for every node (thanks to the while loop), it ultimately gives us a runtime of $|V|^2$.  
So in the end, the runtime will be $\Theta(|V| + |E| + |V|^2)$. After simplifying it, this comes  
to a final answer of $\Theta(|E|+|V|^2)$.  
Please let me know if any of my reasoning is off, and I will readily fix it. Thank you!
