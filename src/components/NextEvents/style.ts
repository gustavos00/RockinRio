import styled from "styled-components";

export const nextEventsTitle = styled.div `
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const events = styled.div `
  height: 250px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .eventData {

  }
`

export const eventData = styled.div `
  height: 240px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
  background: black;
  height: 150px;
  width: 150px;

  border-radius: 10px;
  box-shadow: 0px 0px 14px 7px rgba(0, 0, 0, 0.25);
  }

  h1 {
  font-size: 20px;
  }

  button {
  width: 80px;
  height: 22px;

  background: #e41f27;
  border-radius: 2px;

  border: none;
  outline: #e41f27;

  color: white;
  }
`
export const dateInfo = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 13px;
    height: 13px;
    margin-right: 5px;
  }

  h3 {
    font-size: 18px;
  }
`











