import React from "react";
import styled from "styled-components";

export default function List({
  allDatas,
  focusedCenterId,
  setfocusedCenter,
  pdfBtn,
}) {
  const basicCenter = { lat: 36.5, lng: 128 };

  return (
    <ListWrapper>
      {allDatas?.map(center => {
        const isClicked = focusedCenterId === center.id;
        return (
          <ListWrap
            onClick={() =>
              setfocusedCenter({
                id: center.id,
                center: { lat: Number(center.lng), lng: Number(center.lat) },
                zoom: 10,
              })
            }
            onMouseEnter={() =>
              setfocusedCenter({
                id: center.id,
                center: basicCenter,
                zoom: 7.5,
              })
            }
            onMouseLeave={() =>
              setfocusedCenter({
                id: 0,
                center: basicCenter,
                zoom: 7.5,
              })
            }
          >
            <NameTypeWrap>
              <CenterName isClicked={isClicked}>{center.centerName}</CenterName>
              <CenterType>&nbsp;({center.centerType})</CenterType>
            </NameTypeWrap>
            <FacilityName isClicked={isClicked}>
              {center.facilityName}
            </FacilityName>
            <Address isClicked={isClicked}>위치: {center.address}</Address>
            {pdfBtn}
          </ListWrap>
        );
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.article`
  width: 40%;
  min-width: fit-content;
  height: inherit;
  overflow: auto;
`;

const ListWrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  padding: 30px 37px;
  border-top: 1px solid #ddd;
  &:first-child {
    border-top: 0px;
  }
  cursor: pointer;
  &:hover {
    box-shadow: 5px 4px 34px -10px grey;
  }
`;

const NameTypeWrap = styled.div`
  display: flex;
  align-items: center;
`;

const CenterName = styled.div`
  color: ${props => (props.isClicked ? "#0a6da6" : "#414141")};
  font-size: 30px;
  font-weight: bold;
`;

const CenterType = styled.div`
  font-size: 18px;
  color: #717171;
`;

const FacilityName = styled.div`
  width: fit-content;
  ${props => (props.isClicked ? "border-bottom: 1px solid #414141" : "")};
  font-size: 27px;
`;

const Address = styled(FacilityName)`
  font-size: 19px;
`;
