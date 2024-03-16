import * as React from "react";
import styled from "styled-components";

function Dashboard() {
  const [isGroupsDropdownOpen, setIsGroupsDropdownOpen] = React.useState(false);

  const toggleGroupsDropdown = () => {
    setIsGroupsDropdownOpen(!isGroupsDropdownOpen);
  };

  return (
    <Div>
      <Div2>
        <Div3>
          <Column>
            <Div4>
              <Img loading="lazy" src="{{ext_8}}" />
              <Div5>
                <Div6>Dashboard</Div6>
                <Div7>Edit Profile</Div7>
                <GroupsDropdown>
                  <GroupsDropdownToggle onClick={toggleGroupsDropdown}>
                    Groups
                  </GroupsDropdownToggle>
                  {isGroupsDropdownOpen && (
                    <GroupsDropdownMenu>
                      <GroupsDropdownMenuItem>Add Group</GroupsDropdownMenuItem>
                      <GroupsDropdownMenuItem>Join Group</GroupsDropdownMenuItem>
                    </GroupsDropdownMenu>
                  )}
                </GroupsDropdown>
                <Div9>Scheduled Meetings</Div9>
              </Div5>
            </Div4>
          </Column>
          <Column2>
            <Div10>
              <Div11>
                <Div12>
                  <Img2 loading="lazy" src="{{ext_9}}" />
                </Div12>
                <Img3 loading="lazy" src="{{ext_10}}" />
              </Div11>
              <Div13>
                <Img4 loading="lazy" src="{{ext_11}}" />
                <Div14>Hello Maharshi, </Div14>
                <Div15>
                  &quot;Ignite learning synergies with personalized <br /> study
                  buddies for academic excellence!&quot;
                </Div15>
              </Div13>
              <Div16>Recommendations</Div16>
            </Div10>
          </Column2>
        </Div3>
      </Div2>
      <Div17>
        <Div18>
          <Div19>More</Div19>
          <Div20>Settings</Div20>
        </Div18>
        <Div21>
          <Div22>
            <Column3>
              <Div23 />
            </Column3>
            <Column4>
              <Div24 />
            </Column4>
            <Column5>
              <Div25 />
            </Column5>
            <Column6>
              <Div26>
                <Div27>Global Chat</Div27>
                <Div28 />
              </Div26>
            </Column6>
          </Div22>
        </Div21>
      </Div17>
    </Div>
  );
}

const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  padding: 0 6px 11px 0;
`;

const Div2 = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 21%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div4 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 33px;
  }
`;

const Img = styled.img`
  aspect-ratio: 2.22;
  object-fit: auto;
  object-position: center;
  width: 100%;
`;

const Div5 = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  padding: 0 80px 0 23px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div6 = styled.div`
  font-family: Inika, sans-serif;
  @media (max-width: 991px) {
    margin-right: 5px;
  }
`;

const Div7 = styled.div`
  font-family: Inika, sans-serif;
  margin-top: 81px;
  @media (max-width: 991px) {
    margin: 40px 5px 0 0;
  }
`;

const GroupsDropdown = styled.div`
  position: relative;
  font-family: Inika, sans-serif;
  margin-top: 63px;
  @media (max-width: 991px) {
    margin: 40px 5px 0 0;
  }
`;

const GroupsDropdownToggle = styled.div`
  cursor: pointer;
`;

const GroupsDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const GroupsDropdownMenuItem = styled.div`
  cursor: pointer;
  padding: 5px 0;
  &:hover {
    color: #5d61c4;
  }
`;

const Div9 = styled.div`
  font-family: Inika, sans-serif;
  margin-top: 59px;
  @media (max-width: 991px) {
    margin: 40px 5px 0 0;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 79%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div10 = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div11 = styled.div`
  align-self: end;
  display: flex;
  width: 752px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div12 = styled.div`
  border-radius: 174px;
  background-color: #fff;
  display: flex;
  padding-left: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin: auto 0;
`;

const Img2 = styled.img`
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 44px;
  mix-blend-mode: darken;
  z-index: 10;
`;

const Img3 = styled.img`
  aspect-ratio: 1.04;
  object-fit: auto;
  object-position: center;
  width: 50px;
`;

const Div13 = styled.div`
  disply: flex;
  flex-direction: column;
  fill: url(<path-to-image>) lightgray 50% / cover no-repeat;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 239px;
  width: 762px;
  max-width: 100%;
  align-items: start;
  font-size: 20px;
  color: #000;
  font-weight: 400;
  margin: 41px 0 0 14px;
  padding: 31px 80px 80px 17px;
  @media (max-width: 991px) {
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const Img4 = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div14 = styled.div`
  position: relative;
  font-family: Outfit, sans-serif;
`;

const Div15 = styled.div`
  position: relative;
  font-family: Outfit, sans-serif;
  margin-top: 44px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div16 = styled.div`
  color: #fff;
  margin-top: 69px;
  font: 400 32px Outfit, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div17 = styled.div`
  display: flex;
  margin-top: 19px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div18 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 33px;
  flex-direction: column;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  flex-basis: 0%;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div19 = styled.div`
  font-family: Inika, sans-serif;
`;

const Div20 = styled.div`
  font-family: Inika, sans-serif;
  margin-top: 48px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div21 = styled.div`
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div22 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div23 = styled.div`
  border-radius: 45px;
  background: linear-gradient(270deg, #5d61c4 0%, #2d2f5e 100%);
  width: 230px;
  height: 139px;
  margin: 0 auto;
  @media (max-width: 991px) {
    margin-top: 31px;
  }
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div24 = styled.div`
  border-radius: 45px;
  background: linear-gradient(90deg, #5d61c4 0.02%, #2d2f5e 99.98%);
  width: 229px;
  height: 139px;
  margin: 0 auto;
  @media (max-width: 991px) {
    margin-top: 31px;
  }
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div25 = styled.div`
  border-radius: 45px;
  width: 230px;
  height: 139px;
  @media (max-width: 991px) {
    margin-top: 31px;
  }
`;

const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div26 = styled.div`
  display: flex;
  margin-top: 36px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 32px;
  color: #fff;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div27 = styled.div`
  font-family: Outfit, sans-serif;
`;

const Div28 = styled.div`
  background-color: rgba(217, 217, 217, 1);
  margin-top: 30px;
  height: 452px;
`;

export default Dashboard;