import * as votesActionCreators from './votesActions';
import * as asyncVotesActionCreators from './asyncVotesActions';

export default {
    ...votesActionCreators,
    ...asyncVotesActionCreators
}
