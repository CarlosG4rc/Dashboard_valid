function myFunction() {
  //sheet.getRange("A6:H100").clearContent();
  var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1-S-e9_uWrQlgPUdZ8BT6KBlsO78HXgh9EJNwPfLeKRE/edit#gid=270138782');
  var sheet = ss.getSheetByName('Visualizar Reportes');
  var bdsheet = ss.getSheetByName('BDRep');
  var lastrow = bdsheet.getDataRange().getNumRows();
  var alumno = sheet.getRange('B4').getValue();
  var column = bdsheet.getDataRange();
  var reporte = column.getValues();
  var renglon = 5;

  for (var i = 0; i < lastrow; i++)
  {
      if(reporte[i][0] == alumno)
      {
        renglon = renglon + 1;
        sheet.getRange('D' + renglon).setValue(reporte[i][1]);
        sheet.getRange('C' + renglon).setValue(reporte[i][2]);
        sheet.getRange('B' + renglon).setValue(reporte[i][3]);
        sheet.getRange('E' + renglon).setValue(reporte[i][4]);
        sheet.getRange('F' + renglon).setValue(reporte[i][5]);
        sheet.getRange('G' + renglon).setValue(reporte[i][6]);
        sheet.getRange('H' + renglon).setValue(reporte[i][7]);
      }
  }
}
function validation(){
  var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1-S-e9_uWrQlgPUdZ8BT6KBlsO78HXgh9EJNwPfLeKRE/edit#gid=270138782');
  var sheet = ss.getSheetByName('Visualizar Reportes');
  sheet.getRange("A6:H100").clearContent();
  var bdsheet = ss.getSheetByName('BDRep');
  var lastrow = bdsheet.getDataRange().getNumRows();
  var bdRange = bdsheet.getRange('A1:A' + lastrow);
  var rule = SpreadsheetApp.newDataValidation().requireValueInRange(bdRange).build();
  sheet.getRange('B4').setDataValidation(rule);
  sheet.getRange("B5").setValue("Descripción");
  sheet.getRange("C5").setValue("Autoridad que reporta");
  sheet.getRange("D5").setValue("Grupo");
  sheet.getRange("E5").setValue("Tipo");
  sheet.getRange("F5").setValue("Fecha y hora");
  sheet.getRange("G5").setValue("Correo de quien reporta");
  sheet.getRange("H5").setValue("Vinculo de reporte");
}
