import * as XLSX from 'xlsx'

export function readExcelData(filePath: string, sheetName: string) {

    const workbook = XLSX.readFile(filePath)

    const worksheet = workbook.Sheets[sheetName]

    if (!worksheet) {
        throw new Error(`No ${sheetName} found in Excel file`)
    }

    const data = XLSX.utils.sheet_to_json(worksheet)
    // const data = XLSX.utils.sheet_to_json(worksheet, {raw : false})

    return data;

}