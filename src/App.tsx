import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="blueviolet">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="gold">
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
