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
   	 while(visitedNodes.length < keyValues.length) {
	 	//console.log(currentNode)
		var currentCost=0
		var currentSmallest=Infinity
                var smallestIndex=-1
		visitedNodes.push(currentNode)
        	for (var edge in graph[currentNode]) {
            		currentCost = distances[currentNode] + graph[currentNode][edge]
			if (currentCost < distances[edge]){
				distances[edge]=currentCost
			}
        	}

		var distanceKeys=Object.keys(distances)
		 //console.log(distanceKeys)
		for (var i = 0; i < distanceKeys.length; i++){
			if ((distances[distanceKeys[i]] < currentSmallest) && (!visitedNodes.includes(distanceKeys[i]))){
				smallestIndex=i
				currentSmallest = distances[distanceKeys[i]]
			}
        	}
		currentNode=distanceKeys[smallestIndex]
		//console.log(currentNode)
    	}
//console.log(distances)
    return distances
}

var unvisited = []
var distances = {}
