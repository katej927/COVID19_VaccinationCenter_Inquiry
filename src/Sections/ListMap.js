import React from "react";
import styled from "styled-components";

export default function ListMap({ allDatas, setfocusedCenter }) {
  return (
    <ListMapWrap>
      {allDatas?.map(center => {
        const basicCenter = { lat: 36.5, lng: 128 };
        return (
          <ListWrap
            onClick={() =>
              setfocusedCenter({
                id: center.id,
                center: { lat: Number(center.lng), lng: Number(center.lat) },
                zoom: 9,
              })
            }
            onMouseEnter={() =>
              setfocusedCenter({
                id: center.id,
                center: basicCenter,
                zoom: 7.5,
              })
            }
          >
            <NameTypeWrap>
              <CenterName>{center.centerName}</CenterName>
              <CenterType>({center.centerType})</CenterType>
            </NameTypeWrap>
            <FacilityName>{center.facilityName}</FacilityName>
            <Address>위치: {center.address}</Address>
          </ListWrap>
        );
      })}
    </ListMapWrap>
  );
}

const ListMapWrap = styled.article`
  border: 1px solid green;
  width: 40%;
  min-width: fit-content;
  height: inherit;
  overflow: auto;
`;

const ListWrap = styled.section`
  border: 1px solid #ddd;
  height: 230px;
  padding: 37px;
`;

const NameTypeWrap = styled.div`
  border: 1px solid;
  display: flex;
  align-items: center;
`;

const CenterName = styled.div`
  font-size: 35px;
`;

const CenterType = styled.div``;

const FacilityName = styled.div`
  font-size: 28px;
  margin-top: 30px;
`;

const Address = styled.div`
  font-size: 19px;
  margin-top: 30px;
`;
