import { FC, useState } from "react";
import './_Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />

interface CollapseProps {
    title: string;
    content: string;
}

const Collapse: FC<CollapseProps> = ({title, content}) => {
    const [ openTab, setOpenTab ] = useState(false);

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab); 
    };

    return (
        <div onClick={openTabHandler} className={openTab ? "collapse collapse-open" : "collapse"}>
            <h2 className="collapse-title">{title}</h2>
            <i className="collapse-icon">{angleDown}</i>
            <div className="collapse-content">{content}</div>
        </div>
    )
}

export default Collapse;