import React from "react";
// Chackra-ui
import { Box, Grid, HStack, Text, Spacer } from "@chakra-ui/react";
// Redux
import { useSelector } from "react-redux";

function Footer() {
  const receipt = useSelector((state) => state.receipt.items);
  const sortReceipt = [...receipt];
  sortReceipt.sort((a, b) =>
    a.price > b.price ? 1 : a.price < b.price ? -1 : 0
  );

  const total = receipt.reduce((acc, obj) => acc + obj.price * obj.piece, 0);

  const numberWithCommas = (x, y) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, y);
  };

  const shortHand = (x) => {
    const sNumber = numberWithCommas(x, ".");
    const myArray = sNumber.split(".");
    const newNumber =
      Math.floor(Number(myArray[0] + "." + myArray[1]) * 10) / 10;
    const y = x.toString().length;
    if (y > 3 && y < 7) {
      return newNumber + "k";
    }
    if (y > 6 && y < 10) {
      return newNumber + "m";
    }
    if (y > 9) {
      return newNumber + "b";
    }
    return x;
  };

  return (
    <Box mt="10px" pb="20px">
      <Box backgroundColor="#fff" padding="15px 15px 30px 15px">
        <Box
          textAlign="center"
          fontSize="28px"
          fontWeight={700}
          padding="15px 15px 25px 15px"
        >
          Your Receipt
        </Box>
        {sortReceipt.map((item) => (
          <Grid
            key={item.id}
            templateColumns="170px 45px 75px"
            maxW="290px"
            ml="auto"
            mr="auto"
            gridGap="10px 0"
            textAlign="center"
            fontSize="18px"
            fontWeight={500}
          >
            <Box textAlign="left">{item.title}</Box>
            <Box textAlign="left">x{shortHand(item.piece)}</Box>
            <Box textAlign="right" color="#24c486">
              ${shortHand(item.price * item.piece)}
            </Box>
          </Grid>
        ))}
        <HStack
          maxW="300px"
          ml="auto"
          mr="auto"
          fontSize="18px"
          fontWeight={700}
          borderTop="1px"
          mt="10px"
        >
          <Text as="span">Total</Text>
          <Spacer />
          <Text textAlign="right" color="#24c486" as="span">
            ${numberWithCommas(total, ",")}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default Footer;
