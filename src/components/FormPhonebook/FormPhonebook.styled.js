import styled from 'styled-components';
// import { Form, ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: green;
  
`;

export const FormPhB = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  width: 400px;
  background-color: #e9967a;
`;

export const LabelStyle = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #4682b4;
`;



export const BtnStyle = styled.button`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  color: #faf0e6;
  background-color: #4682b4;
  border: none;
  border-radius: 8px;
  width: 128px;
  padding: 12px;
  margin-top: 12px;
`;

export const InputSt = styled.input`
  padding: 8px 12px;
  background-color: #faf0e6;
  border: none;
  border-radius: 8px;
  width: 300px;
  color: green;
  font-size: 16px;
  font-weight: 500;
`;

export const MainHeading = styled.h1`
  color: #e9967a;
`;
