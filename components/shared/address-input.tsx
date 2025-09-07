"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="3a87d8cce4b20c29aaddc6e1afd04b40b842ec1c"
      onChange={(data) => onChange?.(data?.value)}
      uid="333"
    />
  );
};
