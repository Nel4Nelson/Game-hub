import { HStack, List, ListItem, Image, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getOptimizedImage from "../services/img-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
    onSelectedGenre: (genre: Genres) => void;
    selectedGenre: Genres | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
  const { data, error ,isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;
  
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genre</Heading>
      {isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton}/>)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
                <Image objectFit="cover" boxSize="32px" borderRadius={8} src={getOptimizedImage(genre.image_background)}/>
                <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize="lg" variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
