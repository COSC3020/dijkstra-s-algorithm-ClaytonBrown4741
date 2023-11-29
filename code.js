function initializeDAlgorithm(graph){
	visitedNodes={}
	keyValues=Object.keys(graph);
	//console.log(keyValues.length)
	if (keyValues.length == 0)
		return {}
	if (keyValues.length == 1){
		visitedNodes[keyValues[0]] = 0
		//console.log(visitedNodes)
		return visitedNodes
	}
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
        }
}

var visitedNodes={};

let graph = {
	"a": [{ "node": "b", "weight": 10}, { "node": "c", "weight": 1},{ "node": "e", "weight": 30}],
	"b": [{ "node": "c", "weight": 10}],
	"c": [{ "node": "d", "weight": 10}],
	"d": [{ "node": "e", "weight": 10}],
	"e": [{ "node": "a", "weight": 10}]}

var graph1= { "a": 0 }
//console.log(Object.keys(graph).length)
//console.log(initializeDAlgorithm(graph))
//console.log(JSON.stringify(initializeDAlgorithm({"a": []})) == JSON.stringify(graph1))
//console.log(graph1)
