import styled from 'styled-components';

export const title = styled.div `
  width: 955px;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const dateInfo = styled.div `
  display: flex;
  flex-direction: row;

  img {
    margin-right: 10px;
  }

`

export const mainImage = styled.div `
  display: flex;
  height: 302px;

  position: relative;

  img {
  width: 955px;
  height: 302px;
}

  button {
  width: 296px;
  height: 50px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #e41f27;

  border-radius: 5px;
  border: none;

  cursor: pointer;
  outline: #e41f27;

  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;

}
`