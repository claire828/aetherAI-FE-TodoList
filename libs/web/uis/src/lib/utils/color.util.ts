
import { Color, COLORS } from '../styles';

type ColorStyleMapperType = {
  [K in Color]: ColorStyle
};

export interface ColorStyle {
  borderColor: string;
  bg: string;
  hoverBg: string;
  hoverBorder: string;
}


const ColorStyleMapper: ColorStyleMapperType = COLORS.reduce((acc, key) => {
  acc[key as Color] = {
    borderColor: `border-${key}-500`,
    bg: `bg-${key}-500`,
    hoverBg: `hover:bg-${key}-700`,
    hoverBorder: `hover:border-${key}-500`,
  };
  return acc;
}, {} as ColorStyleMapperType);



export function colorTransform(color: Color): ColorStyle {
  return ColorStyleMapper[color];
};
