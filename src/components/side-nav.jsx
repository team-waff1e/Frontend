import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 20%;
`;

const FixedBox = styled.div`
  position: fixed;
`;

const Container = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default function SideNav() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Wrapper>
      <FixedBox>
        <Container>
          <Img
            onClick={() => navigate("/")}
            src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
          />
          <Img
            onClick={() => navigate("/waffles")}
            src="https://cdn-icons-png.flaticon.com/512/7606/7606136.png"
          />
          <Img
            onClick={() => navigate("/waffles")}
            src="https://static.vecteezy.com/system/resources/thumbnails/001/504/972/small/search-icon-free-vector.jpg"
          />
          <Img
            onClick={() => navigate("/waffles")}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5jhkxwkNqni1JexiCUd4_PfQec-nxCEeNw&usqp=CAU"
          />
          <Img
            onClick={() => navigate("/waffles")}
            src="https://cdn.icon-icons.com/icons2/1993/PNG/512/alarm_alert_attention_bell_clock_notification_ring_icon_123203.png"
          />
          <Img
            onClick={() => navigate("/members/{member.id}")}
            src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"
          />
          <Img
            onClick={() => setShowDropdown(!showDropdown)}
            src="https://cdn.icon-icons.com/icons2/2717/PNG/512/dots_three_icon_173865.png"
          />
        </Container>
      </FixedBox>
    </Wrapper>
  );
}
