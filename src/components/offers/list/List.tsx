import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";

const NextOffersList = () => {
  const rowData = [
    {
      company: "France TV",
      jobName: "UI designer",
      jobType: "Temps plein",
      businessEngineer: "Manon Wehrle",
      creationDate: "02/12/2021",
      experience: "Confirmé",
      location: "IDF",
      businessUnit: "Telecom/Media",
    },
    {
      company: "BNP",
      jobName: "PO",
      jobType: "Temps plein",
      businessEngineer: "Léo Lebouc",
      creationDate: "02/12/2021",
      experience: "Confirmé",
      location: "IDF",
      businessUnit: "Banque",
    },
    {
      company: "Orange",
      jobName: "Scrum master",
      jobType: "Temps plein",
      businessEngineer: "William Meunier",
      creationDate: "02/12/2021",
      experience: "Sénior",
      location: "IDF",
      businessUnit: "Telecom/Media",
    },
    {
      company: "Canal+",
      jobName: "Développeur full stack",
      jobType: "Temps plein",
      businessEngineer: "Manon Wehrle",
      creationDate: "02/12/2021",
      experience: "Junior",
      location: "IDF",
      businessUnit: "Telecom/Media",
    },
  ];

  return (
    <div
      className="ag-theme-alpine"
      style={{ padding: 20, height: 400, width: "100%" }}
    >
      <AgGridReact rowData={rowData}>
        <AgGridColumn
          field="company"
          headerName="Entreprise"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="jobType"
          headerName="Type de contrat"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="businessUnit"
          headerName="Business unit"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="location"
          headerName="Localisation"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="experience"
          headerName="Ancienneté"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="creationDate"
          headerName="Type de contrat"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="businessEngineer"
          headerName="Type de contrat"
          sortable={true}
          filter={true}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default NextOffersList;
