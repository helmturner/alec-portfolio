import { DetailedHTMLProps, HTMLAttributes, TableHTMLAttributes } from "react";

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Triplet = `${Digit}${Digit}${Digit}`;
interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    jobTitle: string;
    fullName: string;
    email: `${string}@${string}.${string}`;
    telephone?: `+${number} ${number}`;
    skills?: {
        [category: string]: string[]
    };
}

const Contact = ({fullName, jobTitle, email, telephone, skills, ...restProps}: Props) => {
    

    return (
        <address {...restProps}>
            <h2>{fullName}</h2>
            <h3>{jobTitle}</h3>
            <h4><a href={`tel:${telephone}`}>{telephone}</a></h4>
            <h4><a href={`mailto:${email}`}>{email}</a></h4>
            {Object.keys(skills ?? {}).map(category => (
                <ul key={category}>
                    <h4>{category}</h4>
                    {skills?.[category].map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            ))}
        </address>
    );
}

export default Contact

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