import gql from 'graphql-tag';

const STANDING_QUERY = gql`
  query LeagueStandings {
    league(slug: "classement-parisienne-fighting-ligue-ggst-road-to-evo-2k23") {
      standings (query: {
        page: 1,
        perPage: 8
      }) {
        pageInfo {
          totalPages
          total
        }
        nodes {
          id
          placement
          entrant {
            id
            name
          }
        }
      }
    }
  }
`;

const PLAYER_QUERY = gql`
query YuzuPlayer {
  user(slug: "d5ce37b2") {
    id
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

export { STANDING_QUERY, PLAYER_QUERY };
