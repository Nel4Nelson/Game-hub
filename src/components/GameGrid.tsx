import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
    selectedGenre: Genres | null;
    selectedPlaform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlaform}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlaform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Box mt={4}>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3}} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
