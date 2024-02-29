import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton width="32px" height="32px" />

          <SkeletonText
            noOfLines={1}
            mt="12px"
            height="30px"
            width="100px"
            skeletonHeight="5"
          />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
