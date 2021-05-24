import { Box, Typography } from "@material-ui/core";
import { Flex } from "@ohfinance/oh-ui";
import React from "react";

interface AboutFeatureProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}

export const AboutFeature: React.FC<AboutFeatureProps> = ({
  img,
  alt,
  title,
  subtitle,
}) => {
  return (
    <Flex center column>
      <Box mb={2}>
        <img src={img} alt={alt} width="100px" height="auto" />
      </Box>
      <Typography variant="h6" gutterBottom>
        <b>{title}</b>
      </Typography>
      <Typography align="center">{subtitle}</Typography>
    </Flex>
  );
};
