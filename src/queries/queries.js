import gql from 'graphql-tag';

// query YuzuPlayer {
//   user(slug: "d5ce37b2") {
const PLAYER_QUERY = gql`
query YuzuPlayer($slug: String!) {
  user(slug: $slug) {
    
    id
    slug
    player {
      id
      gamerTag
      recentStandings(limit:10) {
        id
        entrant {
          id
          name
          event {
            id
            name
            videogame {
              name
              displayName
            }
            tournament {
              id
              name
            }
          }
        }
        placement
      }
    }
  }
}
`;

export { PLAYER_QUERY };
