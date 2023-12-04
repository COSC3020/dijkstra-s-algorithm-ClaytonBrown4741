function initializeDAlgorithm(graph) {
	var keyValues=Object.keys(graph)
	distances={}
	if (keyValues.length == 0)
		return {}
	if (keyValues.length == 1){
		distances[keyValues[0]] = 0
		return distances
	}
	source=keyValues[0]
    	visitedNodes = []
	for (var i=0; i<Object.keys(graph).length; i++){
		distances[keyValues[i]]= Infinity
	}
	distances[source]=0
    	return DA(graph, source)
}

function DA(graph, currentNode){
	 var keyValues=Object.keys(graph)
	 var allEdges=[]
   	 while(visitedNodes.length < keyValues.length) {
	 	//console.log(currentNode)
		var currentCost=0
		var currentSmallest=Infinity
                var smallestIndex=-1
		visitedNodes.push(currentNode)
        	for (var edge in graph[currentNode]) {
            		allEdges.push(edge)
            		currentCost = distances[currentNode] + graph[currentNode][edge]
			if (currentCost < distances[edge]){
				distances[edge]=currentCost
			}
        	}

        	for(var i = 0; i < allEdges.length; i++) {
            		if( (distances[allEdges[i]] < currentSmallest) && (!visitedNodes.includes(allEdges[i])) ) {
				smallestIndex=i
				currentSmallest = distances[allEdges[i]] 
			}
        	}
		//console.log(currentSmallest)
		currentNode=allEdges[smallestIndex]
    	}
//console.log(distances)
    return distances
}

var unvisited = []
var distances = {}

//graph = {'foo': {'boo': 10},
//    'boo': {'d': 10},
//    'd': {'e': 10},
//    'e': {'bar': 10},
//    'bar': {'foo': 2}};

//graph2 = {'foo': {}}
//console.log(initializeDAlgorithm(graph2))
