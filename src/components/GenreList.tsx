import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getOptimizedImage from "../services/img-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
                <Image boxSize="32px" borderRadius={8} src={getOptimizedImage(genre.image_background)}/>
                <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
