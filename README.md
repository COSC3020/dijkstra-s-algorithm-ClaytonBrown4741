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
The first thing that must be taken into account is the loop at the very beginning which  
initializes the distance of each vertex to infinity. This will take |V| amount of time  
since it must do this for each node.  
Next up, I have to check if all my nodes have already been visited, which will take |V| amount  
of time since it has to go through each node. In addition to this, this loop repeats for every  
node, which makes its total runtime actually $|V|^2$  
Finally, there's the loop that actually goes through the graph and finds the distances between  
them. First off, this is guarunteed to cover every edge at least once over the course of the runtime  
which means that it's at least |E| time in length. In addition to this, the loop itself will repeat  
$|V|^2$ amount of times, as each node will have to iterate over all other nodes in order to come to  
the correct answer.  
So in the end, the runtime will be $\Theta(|V| + |V|^2 + |V|^2 +|E|)$. After simplifying it, this comes  
to a final answer of $\Theta(|V|^2 +|E|)$. 
Please let me know if any of my reasoning is off, and I will readily fix it. Thank you!
