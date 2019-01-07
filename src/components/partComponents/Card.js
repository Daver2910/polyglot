import React from 'react';

const Card = (props) => {
    return (
        <div className="ui card no-mt-mb">
            <div className="content">
                <div className="header">{ props.title }</div>
            </div>
            <div className="content">
                <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                { props.summary }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <button className="ui button">{ props.button }</button>
            </div>
        </div>
    );
};

export default Card
