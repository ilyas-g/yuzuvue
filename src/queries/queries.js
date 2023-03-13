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

export { STANDING_QUERY };
