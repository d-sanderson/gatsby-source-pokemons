<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
</p>
<h1 align="center">
  Gatsby Source Pokemons Plugin
</h1>

Source plugin for pulling pokemon data into Gatsby. 

## How to install

### Within the root of your Gatsby Project:

1.  `npm install gatsby-source-pokemons`

2. add `gatsby-source-pokemons` to your plugin array in `gatsby-config.js`

3. Navigate to `localhost:8000/__graphql` to view `allPokemons` query type.


## Examples of usage

see [example repo](https://github.com/dsanderson90/pokemon-source-example)
```{
  allPokemons {
    nodes {
      name
      id
      total
      hp
      sp_def
      sp_atk
      defense
      attack
      type
      speed
      national_number
      natl_num(as int)
      sprites {
        normal
        large (not available on pokemon after national_number 721)
      }
    }
  }
}
```