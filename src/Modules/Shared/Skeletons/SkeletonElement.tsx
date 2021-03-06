import React from "react";
import styled from "styled-components/macro";

export const SkeletonElement = ({ type }: skeletonElementProps) => {
  return <StyledSkeleton type={type}></StyledSkeleton>;
};

type skeletonTypeEnum = "Text" | "Title" | "Avatar" | "Thumbnail" | "Box";

type skeletonElementProps = {
  type: skeletonTypeEnum;
};

const StyledSkeleton = styled.div<{ type: skeletonTypeEnum }>`
  background-color: ${({ theme }) => theme.colors?.foreground};
  margin: 10px 0;
  border-radius: 1rem;
  overflow: hidden;

  ${({ type }) =>
    type === "Text"
      ? `width: 100%;
         height: 12px;`
      : null}

  ${({ type }) =>
    type === "Title"
      ? `width: 50%;
         height: 20px;
         margin-bottom: 15px;`
      : null}

${({ type }) =>
    type === "Avatar"
      ? `width: 100px;
         height: 100px;
         border-radius: 50%;`
      : null}

${({ type }) =>
    type === "Thumbnail"
      ? `width: 100px;
         height: 100px;`
      : null}

${({ type }) =>
    type === "Box"
      ? `width: 100%;
         height: 100%;`
      : null}
`;
