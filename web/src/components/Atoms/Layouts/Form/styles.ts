import styled from 'styled-components';

export const FormSection = styled.form`
  border-radius: var(--border-radius);
  width: 100%;
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 1rem;
  }

  > footer {
    width: 100%;
    > div {
      width: 100%;
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:first-of-type {
    margin-top: 0;
  }

  > div {
    width: 100% !important;
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const FormBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  padding: 2rem;
  border-radius: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
