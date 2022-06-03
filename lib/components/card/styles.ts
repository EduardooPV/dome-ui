import styled from "styled-components";
import { ContainerProps, HeaderProps } from "./types";
import { typograph as f } from "@lib/theme/typograph/typograph";

export const Container = styled.div<ContainerProps>`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;

    button {
      cursor: pointer;
    }
  }

  width: fit-content;
  max-width: 380px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  transition: all 2s;

  img {
    display: block;
    max-height: 190px;
    width: 100%;
  }

  ${(props) => props.props.styles};
`;

export const Header = styled.div<HeaderProps>`
  padding: 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
  }

  a:first-child {
    width: 50px;
    height: 50px;
  }

  a:last-child {
    background-color: transparent;
    border: none;
  }

  p {
    width: 100%;
    font-size: ${f.paragraphSmall.fontSize};
    font-weight: ${f.paragraphSmall.fontWeight.bold};

    text-align: ${(props) => props.props.textAlign};
  }
`;

export const Footer = styled.div`
  padding: 20px;

  span {
    display: block;
    margin-bottom: 40px;

    font-size: ${f.caption.fontSize};
    line-height: ${f.caption.lineHeight};
  }

  > div {
    display: flex;
    justify-content: space-between;

    > button {
      display: flex;
      align-items: center;
      gap: 12px;

      line-height: ${f.paragraphSmall.fontSize};
      font-weight: ${f.paragraphSmall.fontWeight.bold};

      background: transparent;
      border: none;
    }

    > div {
      display: flex;
      gap: 12px;

      > a {
        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
      }
    }
  }
`;
