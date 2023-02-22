import React from "react";
import { FormInput, FormSelect, ServiceForm, ServiceFormContainer } from "./styled";
import { StyledButtons } from "../carousel/styled";
const BookService = () => {
  return (
    <ServiceFormContainer>
        
      <ServiceForm>
      <h2>Book Service</h2>
        <FormInput type="text" placeholder="Your Name" />
        <FormInput type="text" placeholder="Your Phone" />
       <FormSelect name="service">
       <option value="" defaultValue={true}>Choose Service</option>
        <option value="1">Spa</option>
        <option value="1">Salon</option>
        <option value="1">Nail</option>
       </FormSelect>
       <FormSelect name="Day">
        <option value="" defaultValue={true}>Choose Day</option>
        <option value="1">Yesterday</option>
        <option value="1">Today</option>
        <option value="1">Tomorrow</option>
       </FormSelect>
       <StyledButtons type="form">APPOINTMENT</StyledButtons>

      </ServiceForm>
    </ServiceFormContainer>
  );
};

export default BookService;
