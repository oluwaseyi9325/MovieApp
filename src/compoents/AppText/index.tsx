import React from "react";
import { Text } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import { AppTextProps } from "./interface";
import { COLORS } from "../../lib/constants/color";

const AppText: React.FC<AppTextProps> = ({
  text,
  color,
  weight,
  size,
  align,
  mb,
  mt,
  font_type,
  italic,
  ...props
}: any) => {
  return (
    <Text
      style={[
        { fontFamily: font_type ? font_type : "font" },
        { color: color ? color : COLORS.GRAY },
        { fontWeight: weight ? weight : "500" },
        {
          fontSize: size
            ? moderateVerticalScale(size)
            : moderateVerticalScale(18),
        },
        { textAlign: align ? align : "left" },
        {
          marginBottom: mb
            ? moderateVerticalScale(mb)
            : moderateVerticalScale(20),
        },
        {
          marginTop: mt ? moderateVerticalScale(mt) : moderateVerticalScale(20),
        },
        {
          fontStyle:italic?"italic":"normal"
        }
      ]}
    >
      {text}
    </Text>
  );
};

export default AppText;
