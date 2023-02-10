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
                            <a href="https://www.amurelle.com/collections/cotton-bedding-bundles/products/hero-cotton-bedding-bundle-1">
                                <span>FREE SHIPPING IRE WIDE (OVER €50) | NO TAXES OR DUTIES ON INT ORDERS.</span>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Announcement;