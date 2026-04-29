import React from "react";
import "../../data/contacts";
import "../../sass/index.scss";
import { contacts } from "../../data/contacts";

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>
        &copy; {currentYear} {contacts.organizationName}
      </p>
    </div>
  );
}
