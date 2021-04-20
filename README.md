# 오픈 API를 활용한 코로나19 예방접종센터 조회
<img src="https://im6.ezgif.com/tmp/ezgif-6-03f389a628b8.gif" width="838" height="458.094" />

## Table of Contents
1. [Goals](#goals)
2. [My Plan](#my-plan)
3. [About](#about)
4. [Techs](#techs)
5. [Folder Structure](#folder-structure)
6. [Trouble shooting](#trouble-shooting)
7. [Takeaway](#takeaway)

## Goals
### 공공 데이터 API를 활용해 코로나 예방접종센터 조회 페이지 구현
        
- 하나의 웹페이지로 구성 (화면 리스트 페이징)

     → centerName : 센터명, centerType : 센터유형, facilityName : 시설명, address : 주소

- 구글 맵 센터 정보 표시

     → 리스트 클릭 시 구글 맵 활용 지도 표현

- 선택한 예방 접종 센터 PDF 다운로드 (지도 포함)
- AWS 배포

## My Plan
- 센터 hover 시, 리스트와 지도에서 해당 센터 강조 (색, 그림자 등)
- 센터 click 시, 해당 센터 위치를 중심으로 지도 확대
- MouseLeave가 되면 center와 zoom이 기본 값으로 돌아오기
- 다운로드 버튼 클릭 시, 선택한 센터에 대한 pdf 다운로드
- AWS 배포로 URL 입력 시, 접근 가능

## About
- 개발자: 정선미
- 기간: 2021.4.15 ~ 4.18

## Techs
- React Hooks
- google-map-react
- react-to-pdf
- styled-components
- styled-icons
- node express

## Folder Structure
```jsx
┌-----------------------------Main.js----------------------------┐
| ┌--------List.js---------┐ ┌-----------GoogleMap.js-----------┐|
| |                        | |                                  ||
| |                        | |                                  ||
| |                        | |                                  ||
| |                        | |                                  ||
| |                        | |                                  ||
| |                        | |                                  ||
| |                        | |                                  ||
| |                        | |                                  ||
| |                        | |                                  ||
| |                        | |                                  ||
| └------------------------┘ └----------------------------------┘|
└----------------------------------------------------------------┘
```

## Trouble Shooting
아래 나열된 기능들은 모두 처음 사용 및 경험

> **직접 기획 및 디자인**

- 처음 하는 거라서 고민이 많이 됐으나 점점 아이디어가 생각났다.

- 초기 설계와 클린 코드를 위한 노력

    모 회사 대표님의 전략대로 처음부터 설계를 잘 하려고 했지만, 기능 외 모든 제작을 스스로 해야 되서 고민 많이 됨

    → 설계 & 진행 동시 시작

    → 최대한 `효율적인 코드`, 한 코드도 허투루 쓰지 않기 위해 노력
    
    
> **공공 데이터 오픈 API 사용**

- 구글링 해도 나오지 않아서 전화해서 찾은 사용법
- 활용법: 활용 신청→ 마이페이지 → 개발계정→ 해당 서비스 클릭 → Schemes에 HTTPS 클릭 → 인증키 설정의 ApiKeyAuth2 (apiKey)에 일반 인증키(Decoding) 입력 → API 목록의 GET → OPEN API 실행 준비 → OPEN API 호출 → Curl 의 GET 옆의 주소 사용하기

> **구글 맵**

- 자료가 많은 google-map-react를 찾아 코드 수정

    → 기존 react-hook-google-maps 사용 시, 자료 부족 & 센터 마킹 색이 변경하면 계속 새로운 마커 생성

- 줌 & 마커 색 변경

    → 마커 색: 기본 마커 색 변경 불가. img로 변경하면 뷰가 안 예뻐서 div로 제작 후, 스타일드 컴포넌트 props에 따라 변경

    → 줌: defaultzoom/center와 zoom/center를 따로 둬서 조절 가능

- 위/경도 불일치

    처음에 자꾸 지도 밖에 마커가 찍혔다. → 위/경도 바꾸면 사용 가능
    
> **PDF**
<img src="https://im6.ezgif.com/tmp/ezgif-6-008ea5b4d9b7.gif" width="838" height="458.094" />

- ref는 부모에서 버튼은 자식에서

    → 선택한 센터에 대한 pdf 다운로드를 위해 각 센터마다 버튼을 주고자 함

    → 화면 전체를 참조하는 ref를 props로 내리고자 했으나 실패

- 해결: PDF를 변수에 담아 자식 컴포넌트에 내려주기

> **front에서의 첫 aws 배포**

- 프리티어 한도 초과

    서버만 배포했고 프론트 단의 배포는 처음이어서 구글링, 커뮤니티, 백엔드 동기 찬스까지 활용했으나 답을 얻지 못하고 ec2,/s3 (CLI) 생성까지 하며 프리티어 한도 초과 발생

- 포기 하지 않고 ec2에서 node express를 사용해 로컬 서버 로 바꿔주는 방법 찾아 적용

## Takeaway
- 포기하지 않고 기획한 구현 기능 모두 구현해서 뿌듯
- 프론트는 역시 재밌다는 생각
- 대부분 처음 시도하는 것이 많아 시간이 좀 걸렸기에 활용 경험이 있었더라면 훨씬 빠르지 않았을까 하는 아쉬움
