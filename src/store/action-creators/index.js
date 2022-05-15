import * as votesActionCreators from "./votesActions"
import * as asyncVotesActionCreators from "./asyncVotesActions"
import * as uiActionsCreators from "./uiActions"

export default {
    ...votesActionCreators,
    ...asyncVotesActionCreators,
    ...uiActionsCreators,
}
