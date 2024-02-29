import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getOptimizedImage from "../services/img-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
    onSelectedGenre: (genre: Genres) => void;
    selectedGenre: Genres | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton}/>)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
                <Image boxSize="32px" borderRadius={8} src={getOptimizedImage(genre.image_background)}/>
                <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize="lg" variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
