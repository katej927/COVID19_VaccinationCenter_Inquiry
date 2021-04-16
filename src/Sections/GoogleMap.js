import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

export default function GoogleMap(props) {
  const { wholeData, focusedCenter } = props;

  return (
    <GoogleMapWrap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAm5x1jxqJG63lUSRNp3sV7pYoo0N9CP8M" }}
        defaultCenter={{ lat: 36.5, lng: 128 }}
        defaultZoom={7.5}
        center={focusedCenter?.center}
        zoom={focusedCenter?.zoom}
      >
        {wholeData?.map(center => {
          return (
            <Marker
              lat={center.lng}
              lng={center.lat}
              isHovered={focusedCenter.id === center.id}
            />
          );
        })}
      </GoogleMapReact>
    </GoogleMapWrap>
  );
}

const GoogleMapWrap = styled.section`
  border: 1px solid blue;
  width: 60%;
  height: inherit;
`;

const Marker = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50% 50% 50% 0;
  background: ${props => (props.isHovered ? "#D4293F" : "#00cae9")};
  position: absolute;
  transform: rotate(-45deg);
  cursor: "pointer";
  z-index: ${props => (props.isHovered ? 1 : 0)};
  &:hover {
    z-index: 1;
  }
`;
