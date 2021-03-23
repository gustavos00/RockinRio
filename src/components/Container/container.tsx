import { ReactNode } from "react";
import * as S from "./style";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <S.container>{children}</S.container>;
}

export default Container;
