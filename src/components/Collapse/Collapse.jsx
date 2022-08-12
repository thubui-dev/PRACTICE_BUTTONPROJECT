import React, { useState, useEffect } from 'react';
import './collapse.css';

function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        setIsCollapsed(props.isCollapsed);
    }, [props.isCollapsed]);

    const onToggle = () => {
        setIsCollapsed(!isCollapsed);
    }


    const styles = {
        popup:{
            display: isCollapsed ? "flex" : "none",
        },
        arrow: {
            transform: isCollapsed ? "rotateZ(90deg)" : "rotateZ(0deg)",
        }
    }

    return (
        <div>
            <button className="open_toggle" onClick={onToggle}>
                Button <div className="arrow" style={styles.arrow}>{">"} </div>
            </button>
            <div className="popup" style={styles.popup}>
                 {props.children}
            </div>            
        </div>
    )
}

export default Collapse;