function initializeDAlgorithm(graph){
	keyValues=Object.keys(graph);
	source=keyValues[0]
	for (var i=0; i<Object.keys(graph).length; i++){
		visitedNodes[keyValues[i]]= Infinity
	}
	visitedNodes[source]=0
	dAlgorithm(graph, 0, source);
	return visitedNodes
}

function dAlgorithm(graph, currentDistance, currentNode){
	allVisited=true;
	visitedKeys=Object.keys(visitedNodes)
	for (var i=0; i<visitedKeys.length; i++){
		if (visitedNodes[visitedKeys[i]]===Infinity)
			allVisited=false;
	}
	if (allVisited==true){
		return visitedNodes
	}
	smallestWeight=Infinity;
	smallestEdge=null
	keyValues=Object.keys(graph);
        for (var j=0; j < graph[currentNode].length; j++){
		if (visitedNodes[graph[currentNode][j].node]===Infinity){
			if (currentDistance+graph[currentNode][j].weight < visitedNodes[graph[currentNode][j].node]){
				visitedNodes[graph[currentNode][j].node] = currentDistance+graph[currentNode][j].weight
			}
			dAlgorithm(graph, visitedNodes[graph[currentNode][j].node], graph[currentNode][j].node)
		}
		else{
			if (currentDistance+graph[currentNode][j].weight < visitedNodes[graph[currentNode][j].node]){
                        	visitedNodes[graph[currentNode][j].node] = currentDistance+graph[currentNode][j].weight
                        }
		}
                        //if (graph[keyValues[i]][j].weight < smallestWeight){
				//if (visitedNodes[keyValuse[i]] == Infinity)
				//smallestWeight=graph[keyValues[i]][j].weight;
				//smallestEdge=keyValues[i]
			//}
        }
	
}

var visitedNodes=[];

let graph = {
	"a": [{ "node": "b", "weight": 10}, { "node": "c", "weight": 1},{ "node": "e", "weight": 30}],
	"b": [{ "node": "c", "weight": 10}],
	"c": [{ "node": "d", "weight": 10}],
	"d": [{ "node": "e", "weight": 10}],
	"e": [{ "node": "a", "weight": 10}]}

console.log(initializeDAlgorithm(graph))
