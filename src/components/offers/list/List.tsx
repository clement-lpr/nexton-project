import { GridReadyEvent } from "ag-grid-community";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useState } from "react";

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
      priority: "",
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
      priority: "Urgent",
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
      priority: "",
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
      minWidth: 50,
      priority: "Urgent",
    },
  ];

  const [gridApi, setGridApi] = useState({});
  const [gridColumnApi, setGridColumnApi] = useState({});

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };

  return (
    <div className="ag-theme-alpine" style={{ paddingTop: 20 }}>
      <AgGridReact
        rowData={rowData}
        defaultColDef={{
          enableRowGroup: true,
          enablePivot: true,
          enableValue: true,
          sortable: true,
          filter: true,
          resizable: true,
        }}
        domLayout={"autoHeight"}
        onGridReady={onGridReady}
      >
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
        <AgGridColumn
          field="priority"
          headerName="Urgent"
          sortable={true}
          filter={true}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default NextOffersList;
