import { connect } from "react-redux";

import BlockedMutedUsers from "../components/blocked_muted_users";
import {
  blockUser,
  muteUser,
  unblockUser,
  unmuteUser
} from "../ducks/relationships";

function mapStateToProps( state ) {
  return {
    profile: state.profile,
    blockedUsers: state.relationships.blockedUsers
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    blockOrMute: ( item, id ) => {
      if ( id === "blocked_users" ) {
        dispatch( blockUser( item.user_id ) );
      } else {
        dispatch( muteUser( item.user_id ) );
      }
    },
    unblockOrUnmute: ( userId, id ) => {
      if ( id === "blocked_users" ) {
        dispatch( unblockUser( userId ) );
      } else {
        dispatch( unmuteUser( userId ) );
      }
    }
  };
}

const BlockedMutedUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( BlockedMutedUsers );

export default BlockedMutedUsersContainer;