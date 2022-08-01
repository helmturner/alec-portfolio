import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./style.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  jobTitle: string;
  fullName: string;
  email: `${string}@${string}.${string}`;
  telephone: `+${string}`;
  skills: string[];
}

const Contact: (props: Props) => JSX.Element = ({
  fullName,
  jobTitle,
  email,
  telephone,
  skills,
}) => (
  <section className={styles.bizcard}>
        <address>
          <h2>
            {fullName}
          </h2>
          <h3>{jobTitle}</h3>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${telephone}`}>{telephone}</a>
        </address>
        <ul>
        <small>

          {skills.map((skill, index) => {
            if (index === skills.length - 1) {
              return  <li key={index}>{skill}</li>
            }
            return (
              <li key={index}>{'#'}{skill}</li>
            )
          })}
        </small>

        </ul>

      </section>
);

export default Contact;