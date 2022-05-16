import "./styles.css";

import React from "react";
import "@grapecity/spread-sheets-designer-resources-en";
import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-designer";
import { Designer } from "@grapecity/spread-sheets-designer-react";
import * as ExcelIO from "@grapecity/spread-excelio";
import { Spreadsheets } from "@grapecity/spread-sheets-react";
import "@grapecity/spread-sheets-charts";
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-pdf";

import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";

var sjsLicense =
  "E962957517414525#B0rIE5b6h7dPRkNMlFeFBXbwZlRKN4Nr8ka6E7VSpHSyY5dDpXe4BFR8gDUNZzbppUdu34R5s4T4BXUZBXbZRVcSh5SuZmQLlXTqhzcQRFTPJ5Z4UEOUBnWqtya8FUcrFkVqJnTpdERCFDNrNHT6YERGpmTnV6UNZDWWR7UFlzNBdHZrNHNTl4VjlnRTVEaktCUYRUZrgUTFdjV6tUOrZFbwEmR0Z5UXF6VvEnMM3yaURDeThkYvJUM4lDbIRzaXVjcIhHWSdTVY36Q58ERK3CMOBFSXlzKzQDepFGVrsSezIUT6sUS7MEZ5NHMYZkTOB5QoBzLpJ4Q0pmI0IyUiwiIEdTQEVEM4QjI0ICSiwSMzgDM6cTOyEjM0IicfJye&Qf35VfiUURJZlI0IyQiwiI4EjL6BCITpEIkFWZyB7UiojIOJyebpjIkJHUiwiI9ADM5IDMgQjMxETMyAjMiojI4J7QiwiIwIzNwIjMwIjI0ICc8VkIsISeltGIzVGbw5WYzBSRDJiOiEmTDJCLlVnc4pjIsZXRiwiI5ITN4EDN7ETN7UTOyYTOiojIklkIs4XXiUGbiFGV43mdpBlIbpjInxmZiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zZ6EEbVNnWlZHMHVlUOFVNaNldG5GMBJmVzMUWKRWMIVjbz3UeCNXQrAnb4olarMkT4UjcrwEOhVUSGdHWwd7QQZUexNmWLVFOUhzakJTOIBXOXZ5TRJFUIF5jvkT";
GC.Spread.Sheets.LicenseKey = sjsLicense;
ExcelIO.LicenseKey = sjsLicense;

GC.Spread.Sheets.Designer.LicenseKey =
  "CE Designer testing,E516755165687949#B0nOnnUyRnayRHTjREeuF5Yhl7SmhnNLtUVpZVZC9UYwYHS6ZzVmNUS8dmYCJnRpFXT5cEOpNkY9YVYXZjNuJnSGJHTz26Nxdmc6pHb9BjQ6Ije6sESLBXZsRFaHRHMnd6VUVWepxmTOplTnd4K0BlbpZVTsh5VaZ4d4cXbwYXYOFlR6QFeiFGc7E7NodUWwgzMklXdIJ4LhBDS8l4SDtmVrMVUvklSzITOVp5Q9k5RrImUSlDattSR6kGbzQXYPhzQh3SNyUnaoVkdGdUQ8Z7SLZjepBjMrIXOqp7dYlWbBhVd5sCWNJHUMdmI0IyUiwiIFVjR5I4MGJjI0ICSiwyN4UTO5MDN4AjM0IicfJye&Qf35VfiklNFdjI0IyQiwiI4EjL6BibvRGZB5icl96ZpNXZE5yUKRWYlJHcTJiOi8kI1tlOiQmcQJCLiYjM5MjNwASMwkDMxIDMyIiOiQncDJCLigjM6AjMyAjMiojIwhXRiwiI9RXajVGchJ7ZgU4QiojIh94QiwSZ5JHd0ICb6VkIsISO4kzN8YTN6ETN5cjNxUjI0ICZJJye0ICRiwiI34zdwl4YThFbHx6cJ5WRxUneXN7dhpkWQhVWDJFSqJXMvNlWTpHVpZzTsNDTERlbDlHa6AFWZtWWy4GdyM4UqFHU8ITMsdlSDRjdDtCOrh5VSVGb6NTUQlzbOF5MxJjclpGW9AHUIZlbOZ5y6DV";

function App() {
  return (
    <Designer
      designerInitialized={(designer) => {
        getDesigner(designer);
      }}
      styleInfo={{ width: "1500px", height: "90vh" }}
    ></Designer>
  );
}
// Function to get designer
function getDesigner(designer) {
  //this is hosted spread instance
  var workbook = designer.getWorkbook();
  var sheet = workbook.getActiveSheet();
  sheet.setValue(1, 1, "Test");
}
export default App;
