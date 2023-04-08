import gql from 'graphql-tag';

// # query YuzuPlayer($slug: String!) {
// #   user(slug: $slug) {
const PLAYER_QUERY = gql`
query YuzuPlayer {
  user(slug: "d5ce37b2") {
    id
    slug
    player {
      id
      gamerTag
      recentStandings(limit:3) {
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
