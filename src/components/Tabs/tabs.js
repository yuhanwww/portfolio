import React, { useState } from 'react';

const Tabs = () => {

    const tabs = ['Intro','Academic','Other'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <ul className="tab">
            {tabs.map((tab, index) => (
                <li
                    key={index}
                    className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </li>
            ))}
            </ul>
            <div className="tabcontent">
                <p>{`This is the content for ${activeTab}.`}</p>
            </div>
        </div>
    )
}

export default Tabs;