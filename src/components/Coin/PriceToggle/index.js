import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css';

export default function PriceToggle({ priceToggle }) {
    const [priceType, setPriceType] = useState("prices");

    const handlePriceToggle = (event, newPriceType) => {
        setPriceType(newPriceType);
        priceToggle(newPriceType);
    };

    return (
        <div className='toggle-prices'>
            <ToggleButtonGroup
                value={priceType}
                exclusive
                onChange={handlePriceToggle}
                aria-label="price type"
                sx={{
                    "&.Mui-selected": {
                        color: "var(--blue) !important",
                    },
                    borderColor: "var(--blue)",
                    border: "unset !important",
                    "& .MuiToggleButtonGroup-grouped": {
                        border: "1px solid var(--blue)!important",
                        borderColor: "unset",
                        color: "var(--blue) !important ",
                    },
                    "& .MuiToggleButton-standard": {
                        color: "var(--blue) !important",
                    },
                }}
            >
                <ToggleButton value="prices">PRICE</ToggleButton>
                <ToggleButton value="market_caps">MKT CAP</ToggleButton>
                <ToggleButton value="total_volumes">VOLUME</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
