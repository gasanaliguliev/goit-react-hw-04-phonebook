import React, { useState } from 'react';
import { FormContainer, Label, Input, SubmitButton } from './Form.styled';

const Form = ({ onAddContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isContactExists(name)) {
      alert(`Contact with name "${name}" already exists!`);
      return;
    }

    onAddContact(name, number);

    setName('');
    setNumber('');
  };

  const isContactExists = (name) => {
    return contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          value={number}
          onChange={handleNumberChange}
        />
      </Label>
      <SubmitButton type="submit">Add Contact</SubmitButton>
    </FormContainer>
  );
};

export default Form;
