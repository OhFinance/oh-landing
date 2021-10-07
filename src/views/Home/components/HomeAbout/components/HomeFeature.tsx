import { Box, Typography } from "@material-ui/core";
import { Flex, Text } from "@ohfinance/oh-ui";

export interface HomeFeatureProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}

export const HomeFeature: React.FC<HomeFeatureProps> = ({
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
      <Text align="center">{subtitle}</Text>
    </Flex>
  );
};
