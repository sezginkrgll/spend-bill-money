import React from "react";
// chakra-ui
import { SimpleGrid, Box } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import products from "../Data/Products";

function Container() {
  return (
    <Box maxW="1000px" ml="auto" mr="auto" color="#333">
      <Header />
      <SimpleGrid columns={[1, null, 3]} spacing="10px">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            piece={0}
            stock={product.stock}
          />
        ))}
      </SimpleGrid>
      <Footer />
    </Box>
  );
}

export default Container;
