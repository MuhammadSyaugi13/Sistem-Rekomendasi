// Data Structure - Graph

function createNode(key) {
    const neightbors = [];
    return {
        key,
        neightbors,

        addNeightbor: function (node) {
            neightbors.push(node);

        }
    };
}

function createGraph(directed = false) {
    const nodes = [];
    const edges = [];

    return {
        directed,
        nodes,
        edges,

        addNode: function (key) {
            const newNode = createNode(key);
            this.nodes.push(newNode);
        },
        getNode: function (key) {
            return nodes.find(function (node) {
                return node.key === key;
            });
        },
        addEdge: function (nodeKey1, nodeKey2) {
            const node1 = this.getNode(nodeKey1);
            const node2 = this.getNode(nodeKey2);

            node1.addNeightbor(node2);

            if (!directed) {
                node2.addNeightbor(node1);
            }
        },
        print: function () {
            return nodes.map(function ({ key, neightbors }) {
                let result = key;

                if (neightbors.length) {
                    result += ` => ${neightbors.map(function (neightbor) {
                        return neightbor.key;
                    }).join(' ')}`;
                }

                return result;
            }).join(`\n`);
        }
    }; //akhir return
}
