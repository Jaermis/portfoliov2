import PropTypes from "prop-types";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import styles from "./GradesTable.module.css";

export const GradesTable = ({ semesterData }) => {
  const columns = [
    {
      accessorKey: "subjectCode",
      header: "Subject Code",
    },
    {
      accessorKey: "subjectName",
      header: "Subject Name",
    },
    {
      accessorKey: "units",
      header: "Units",
    },
    {
      accessorKey: "grade",
      header: "Grade",
    },
  ];

  const table = useReactTable({
    data: semesterData.subjects,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <h3>{semesterData.semester}</h3>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.bottomInfo}>
        <p>Total Units: {semesterData.totalUnits}</p>
        <p>GWA: {semesterData.gwa}</p>
      </div>
    </>
  );
};

GradesTable.propTypes = {
  semesterData: PropTypes.shape({
    semester: PropTypes.string.isRequired,
    subjects: PropTypes.arrayOf(
      PropTypes.shape({
        subjectCode: PropTypes.string.isRequired,
        subjectName: PropTypes.string.isRequired,
        units: PropTypes.string.isRequired,
        grade: PropTypes.string.isRequired,
      })
    ).isRequired,
    totalUnits: PropTypes.string.isRequired,
    gwa: PropTypes.string.isRequired,
  }).isRequired,
};
