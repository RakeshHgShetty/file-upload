import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  filename: any = "";
  isImportButtonDeActive: boolean = false;
  fileData: File = null
  fileArray = null
  tablePreview: any = "";

  constructor() { }

  ngOnInit(): void {
  }



  selectFile(event) {
    var file = event.target.files[0];
    this.filename = file.name
    let fileExtension = this.filename.replace(/^.*\./, '');
    if (fileExtension != "csv") {
      this.isImportButtonDeActive = true;
      this.filename = "Please select only csv file";
      this.fileArray = null      
      
    } else {
      this.fileData = <File>event.target.files[0];
      this.isImportButtonDeActive = true;      
    }
  }

 displayData(results){
  var table = "<div class='table-responsive  theme_scroll'><table class='table table-borderless'>";
  var data = results.data;
  var limit = (data.length > 10) ? 10 : data.length;

  for (let i = 0; i < limit; i++) {

    var row = data[i];
    var cells = row.join(results.meta.delimiter).split(results.meta.delimiter);
    if (i == 0) {
      table += "<thead><tr>";
      for (let j = 0; j < cells.length; j++) {
        table += "<th>";
        table += cells[j];
        table += "</th>";
      }
      table += "</thead>";
    } else {
      if (i == 1) {
        table += "<tbody><tr>";
      } else {
        table += "<tr>";
      }

      for (let j = 0; j < cells.length; j++) {
        table += "<td>";
        table += cells[j];
        table += "</td>";
      }
      if (i == limit - 1) {
        table += "</tr></tbody>";
      } else {
        table += "</tr>";
      }
    }
  }
  table += "</table></div>";

  this.tablePreview = table
 }

  parseFile() {
    if (this.fileData) {
      Papa.parse(this.fileData, {
        header: false,
        skipEmptyLines: true,
        complete: (result, file) => {
          console.log(result);
          this.isImportButtonDeActive = false;
          this.displayData(result)
        }
      });
    }

  }

  resetCSVParamas() {
    this.fileArray = null
    this.isImportButtonDeActive = false;
    this.fileData = null
    this.filename = null
    this.tablePreview= "";
  }
}
