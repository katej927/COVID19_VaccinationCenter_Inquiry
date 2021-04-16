import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListMap from "./ListMap";
import GoogleMap from "./GoogleMap";
import Pdf from "react-to-pdf";

export default function Main() {
  const [allDatas, setAllDatas] = useState();
  const [focusedCenter, setfocusedCenter] = useState({
    id: 0,
    center: { lat: 36.5, lng: 128 },
    zoom: 7.5,
  });

  useEffect(() => {
    fetch(
      "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=rPjR1k5RX59RTpH3qcOa%2BH8aYFP%2BDRhMTvcdOm1j4Zi7ovY2nYj0wngbU7GangJsLpH3xHAlBn8Jdx50qZRKKw%3D%3D"
    )
      .then(res => res.json())
      .then(res => setAllDatas(res.data));
  }, []);

  // const ref = React.createRef();
  // const options = {
  //   orientation: "landscape",
  // };

  return (
    <MainWrap>
      {/* <Pdf targetRef={ref} filname="test.pdf" options={options} x={0.5} y={0.5}>
        {({ toPdf }) => <button onClick={toPdf}>pdf 만들기</button>}
      </Pdf> */}
      {/* <div ref={ref}> */}
      <Header>코로나19 예방접종센터 조회</Header>
      <ListGoogleMapWrap>
        <ListMap allDatas={allDatas} setfocusedCenter={setfocusedCenter} />
        <GoogleMap wholeData={allDatas} focusedCenter={focusedCenter} />
      </ListGoogleMapWrap>
      {/* </div> */}
    </MainWrap>
  );
}

const MainWrap = styled.div`
  border: 1px solid red;
  height: 100vh;
`;

const Header = styled.header`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
  font-size: 35px;
  font-weight: 400;
`;

const ListGoogleMapWrap = styled.main`
  border: 1px solid purple;
  display: flex;
  height: 90vh;
`;
