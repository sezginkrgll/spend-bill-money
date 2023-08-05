import React from "react";
// Chakra-ui
import { Image, Box, Button } from "@chakra-ui/react";
// react-animated-number
import AnimatedNumber from "react-animated-number";
// Redux
import { useSelector } from "react-redux";

function Header() {
  const money = useSelector((state) => state.receipt.money);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <Box
        textAlign="center"
        bg="#fff"
        p="30px 20px"
        mb="10px"
        fontSize="32px"
        fontWeight={700}
      >
        <Image
          src="https://neal.fun/spend/billgates.jpg"
          alt="Image of Bill Gates"
          borderRadius="full"
          boxSize="125px"
          m="10px auto 25px"
        />
        Spend Bill Gates' Money
      </Box>
      <Box
        bg="#2ecc71"
        bgGradient="linear-gradient(180deg,#2ecc71,#1abc9c)"
        color="#fff"
        p="20px"
        m="10px 0"
        fontSize="32px"
        fontWeight={700}
        textAlign="center"
        position="sticky"
        top={0}
        zIndex={9999}
      >
        $
        <AnimatedNumber
          initialValue={money}
          value={money}
          formatValue={(n) => numberWithCommas(n.toFixed(0))}
          duration={500}
        />
      </Box>
    </>
  );
}

export default Header;
