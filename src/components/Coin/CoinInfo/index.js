import React, { useState } from "react";
import "./styles.css";

const CoinInfo = ({ heading, desc }) => {
    const shortDesc = desc.slice(0, 400) + "...";
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="grey-wrapper coin-info-container">
            <h2 className="coin-info-heading">{heading}</h2>
            {desc.length > 400 ?
                (
                    <>
                        <p className="coin-info-desc"
                            onClick={() => setIsExpanded(!isExpanded)}
                            dangerouslySetInnerHTML={{ __html: isExpanded ? desc : shortDesc }}
                        />
                        <span className="read-span" onClick={() => setIsExpanded(!isExpanded)}>
                            Read {isExpanded ? "Less" : "More"}
                        </span>
                    </>
                ) :
                (
                    <p className="coin-info-desc" dangerouslySetInnerHTML={{ __html: desc }} />
                )
            }
        </div>
    )
}

export default CoinInfo;