# Arcitecture

Top-level entity is scheduler. He has stack of agents and strategy. Strategy determines how scheduler assighns behaviors to agents. Each game tick scheduler makes decisions on which agents should change their current behavior.

Agents behaviors are just sets of actions. Actions are ordered by priority. Priority by default correspondes to order in wich actions were registered in behavior. Behavior algorithm of executions of actions is:
1. Get a _copy_ of set of actions (__A__) ordered by priority.
2. Take first element (__a__) of __A__ (it will be an action with highest priority).
3. Try to execute __a__. If successfully then finish behavior execution.
4. If __a__ can't be executed remove it from A and go to step 2.