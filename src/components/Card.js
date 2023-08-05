import React, { useEffect, useState } from "react";
// Chakra-ui
import { Box, Image, Input, Grid, Button } from "@chakra-ui/react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { buy, sell, inputBuy, inputBuyReset } from "../redux/receiptSlice";

function Card({ id, title, price, img, stock }) {
  const money = useSelector((state) => state.receipt.money);
  const [piece, setPiece] = useState(0);
  const dispatch = useDispatch();

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const buyButtonIsDisabled = stock <= piece || money < price;

  const buyClick = () => {
    dispatch(buy({ id, title, price, piece: 1 }));
    setPiece(piece + 1);
  };

  const handleChange = (e) => {
    dispatch(inputBuyReset({ id }));
    const value = Number(e.target.value);
    const maxPiece = Math.floor(money / price + piece);
    if (value > maxPiece) {
      if (value > stock) {
        setPiece(stock);
        dispatch(inputBuy({ id, title, price, piece: stock }));
      } else {
        setPiece(maxPiece);
        dispatch(inputBuy({ id, title, price, piece: maxPiece }));
      }
    } else {
      if (value > stock) {
        setPiece(stock);
        dispatch(inputBuy({ id, title, price, piece: stock }));
      } else {
        setPiece(value);
        dispatch(inputBuy({ id, title, price, piece: value }));
      }
    }
  };

  const sellClick = () => {
    dispatch(sell({ id, title, price }));
    setPiece(piece - 1);
  };

  return (
    <Box bg="#fff">
      <Box padding="20px 15px" textAlign="center">
        <Image src={img} m="15px auto" height="120px" />
        <Box fontSize="22px" fontWeight={700}>
          {title}
        </Box>
        <Box fontSize="20px" fontWeight={500} color="#24c486" mb="25px">
          ${numberWithCommas(price)}
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap="10px">
          <Button
            bgGradient="linear-gradient(180deg,#f53b82,#f53b57)"
            color="white"
            colorScheme="none"
            isDisabled={piece === 0}
            _disabled={{
              bg: "#f1f2f6",
              color: "#333",
              cursor: "auto",
            }}
            onClick={sellClick}
          >
            Sell
          </Button>
          <Input
            textAlign="center"
            type="number"
            focusBorderColor="#333"
            border="1px"
            borderColor="#b2bec3"
            value={piece.toString()}
            onChange={handleChange}
          />
          <Button
            bgGradient="linear-gradient(180deg,#2ecc71,#1abc9c)"
            color="white"
            colorScheme="none"
            isDisabled={buyButtonIsDisabled}
            _disabled={{
              bg: "#f1f2f6",
              color: "#333",
              cursor: "auto",
            }}
            onClick={buyClick}
          >
            Buy
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default Card;
