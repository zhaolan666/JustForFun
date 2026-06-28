# Tree

Display a set of grouped data with hierarchical relationships.

## Basic Usage

::: demo tree/basic :::

## Enhanced Examples

::: demo tree/enhanced :::

## Tree Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| data | array | [] | Tree data |
| empty-text | string | — | Text displayed when data is null |
| node-key | string | — | Unique identity key name for each tree node, its value should be unique across the whole tree |
| props | object | { children: 'children', label: 'label' } | Configuration options |
| render-after-expand | boolean | true | Whether to render child nodes only after a parent node is expanded for the first time |
| load | function(node, resolve) | — | Method for loading subtree data lazily |
| render-content | function(h, { node, data, store } ) | — | Render function for tree node |
| highlight-current | boolean | false | Whether current node is highlighted |
| default-expand-all | boolean | false | Whether to expand all nodes by default |
| default-expanded-keys | array | [] | Array of keys of initially expanded nodes |
| auto-expand-parent | boolean | true | Whether to auto expand parent node when current node is expanded |
| default-checked-keys | array | [] | Array of keys of initially checked nodes (show-checkbox required) |
| show-checkbox | boolean | false | Whether node is selectable |
| check-strictly | boolean | false | In check-strictly mode, parent and child nodes are not associated |
| default-checked-keys | array | [] | Array of keys of initially checked nodes |
| accordion | boolean | false | Whether only one node of the same level can be expanded at one time |
| indent | number | 16 | Horizontal indentation of nodes in pixels |
| icon-class | string | — | Custom icon class name for tree node |
| draggable | boolean | false | Whether to enable drag and drop nodes |
| allow-drag | function(draggingNode) | — | Function to be executed before dragging a node. Return false to cancel drag operation |
| allow-drop | function(draggingNode, dropNode, type) | — | Function to be executed before dropping a node. Return false to cancel drop operation |

## Tree Methods

| Method | Description | Parameters |
|--------|------|------|
| filter | Filter all tree nodes, filtered results will be shown | Accept a parameter which will be used as first argument for filter-method |
| updateKeyChildren | Set new data to a node by key, only works when node-key is assigned | (key, data) where key is the key of target node and data is the new data |
| getCheckedNodes | If using lazy loading, in case the node hasn't been loaded yet, you cannot get its checked status by this method | Accept a boolean parameter whose default value is false. If the parameter is true, it only returns the currently selected array of half-selected nodes |
| setCheckedNodes | Set certain nodes to be checked, only works when node-key is assigned | An array of nodes to be checked |
| getCheckedKeys | If using lazy loading, in case the node hasn't been loaded yet, you cannot get its checked status by this method | (leafOnly) Accept a boolean type parameter whose default value is true. If set to false, the method returns an array containing keys of both half-checked and fully checked nodes |
| setCheckedKeys | Set certain nodes to be checked, only works when node-key is assigned | An array of node keys to be checked |
| setCurrentNode | Set specified node as selected by instance, only works when node-key is assigned | Node to be selected |
| getCurrentNode | Get currently selected node | — |
| setCurrentKey | Set selected node by key, only works when node-key is assigned | Key of the node to be selected |
| getCurrentKey | Get key of currently selected node (must have node-key) | — |
| getNode | Get node by data or key | Data or key of the node to get |
| remove | Remove node and its sub-nodes | Data or key of the node to remove |
| append | Append a child node to specified tree node | (data, parentNode) where data is the data of appended child node and parentNode is the parent node's data or key |
| insertBefore | Insert a sibling node before existing node | (data, refData) where data is the data of the node to insert and refData is the reference node's data or key |
| insertAfter | Insert a sibling node after existing node | (data, refData) where data is the data of the node to insert and refData is the reference node's data or key |

## Tree Events

| Event Name | Parameters | Description |
|--------|------|------|
| node-click | (data, node, componentInstance) | Callback triggered when a node is clicked |
| node-contextmenu | (event, data, node, componentInstance) | Callback triggered when right-click on a node |
| check-change | (data, checkedInfo) | Callback triggered when the selected state of the node changes |
| check | (data, { checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys }) | Callback triggered after clicking the checkbox of node |
| current-change | (data, node) | Callback triggered when current node changes |
| node-expand | (data, node, componentInstance) | Callback triggered when current node expands |
| node-collapse | (data, node, componentInstance) | Callback triggered when current node collapses |
| node-drag-start | (draggingNode, event) | Callback triggered when starting to drag a node |
| node-drag-enter | (draggingNode, dropNode, event) | Callback triggered when dragging a node into another node |
| node-drag-leave | (draggingNode, dropNode, event) | Callback triggered when leaving a node while dragging |
| node-drag-over | (draggingNode, dropNode, event) | Callback triggered when dragging over a node (like mouseover event) |
| node-drag-end | (draggingNode, dropNode, dropType, event) | Callback triggered when drag ends (may not trigger successfully) |
| node-drop | (draggingNode, dropNode, dropType, event) | Callback triggered after successful drag-and-drop of a tree node |

## Tree Slots

| Slot Name | Description |
|--------|------|
| default | Custom content for tree nodes. The scope parameters are: { node, data } |
| empty | Content displayed when data is null |
