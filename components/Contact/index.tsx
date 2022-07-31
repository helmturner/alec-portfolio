import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./style.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  jobTitle: string;
  fullName: string;
  email: `${string}@${string}.${string}`;
  telephone?: `+${string}`;
  skills?: {
    [category: string]: string[];
  };
}

const Contact: (props: Props) => JSX.Element = ({
  fullName,
  jobTitle,
  email,
  telephone,
  skills,
  ...restProps
}) => (
  <address className={styles.container} {...restProps}>
    <h1>{fullName}</h1>
    <hr />
    <h2>{jobTitle}</h2>
    <hr />
    <span className={styles.contactInfo}>
      <h4>
        <a href={`tel:${telephone}`}>{telephone}</a>
      </h4>
      <h4>
        <a href={`mailto:${email}`}>{email}</a>
      </h4>
    </span>
    {Object.keys(skills ?? {}).map((category) => (
      <ul className={styles.list} key={category}>
        <h4>{category.toUpperCase()}</h4>
        <hr />
        {skills?.[category].map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    ))}
  </address>
);

export default Contact;

/*
const iterable = Object.entries(skills ?? {})
    const table = iterable.reduce((tableData, [category, skills]) => {
        table.headerRow.push(category);
        table.columns.push(skills)
        return tableData
    }, {headerRow: [], columns: []} as {headerRow: string[], columns: string[][]});
    const longestRowLength = table.columns.reduce((longest, row) => Math.max(longest, row.length), 0);

<table>
                <thead>
                    <tr>{table.headerRow.map((str, key) => (<th key={key}>{str}</th>))}</tr>
                </thead>
                <tbody>
                    {
                        new Array(longestRowLength).fill(new Array(table.columns.length)).map((row, rowIndex) => {})
                    }
                </tbody>
                </table>
*/
