import React from 'react';
import './announcement.css';

Announcement.propTypes = {
    
};

function Announcement(props) {
    return (
        <div id="shopify-section-announcement" className="shopify-section">
            <section id="section-announcement" ata-section-id="announcement"    data-section-type="announcement-bar">
                <div className="AnnouncementBar">
                    <div className="AnnouncementBar__Wrapper">
                        <p className="AnnouncementBar__Content Heading">
                            <span>FREE SHIPPING IRE WIDE (OVER €50) | E-GIFT CARDS AVAILABLE HERE.</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Announcement;