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

**QUESTION**:
Hello Professor. I am very sorry to bother you with this question, but I was looking through many  
of these graphing problems and realized that I didn't know how to code most of them. The reason for  
this isn't due to me misunderstanding the concepts or pseudocode, but rather because I do not know how  
to properly define and access many of the graph datastructures that we've discussed. For instance, with  
the code up above, how does one go about making an adjacency list in java script that also includes the  
distance between the nodes? And on a related note, how does one access particular elements in that data  
structure once it has been defined? I know we went over it a bit in class, but that was a bit simpler of  
an example than what we're handling here. If you could give me any help with this, whether that be through  
providing me with a block of code as an example yourself or if you simply give me an online resource to  
use, then I would be very grateful. Thank you.
