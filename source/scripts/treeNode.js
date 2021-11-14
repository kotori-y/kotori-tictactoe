/**
 * @author Kotori Y
 */


class TreeNode {
  constructor(state, parent) {
    this.state = state
    this.parent = parent
    this.children = {}

    this.isTermianal = state.isTerminal()
    this.isFullyExpanded = false
    this.n_visited = 0
    this.total_reward = 0

  }
}

export default TreeNode