import React from "react";
import '../../App.css'
import PropTypes from "prop-types";


const Item  = ({href, title}) => (
    <a href={href} className="link">{title}</a>
)


function Box(props){
    const {title, items} = props;

    return(
        <div className="foot__links-box">
            <div class="foot__links-title foot__links-title__link">{title}</div>
            <div class="foot__links-form__links d-flex flex-column">
                {items}
            </div>
        </div>
    )
}

Item.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string.isRequired,
};

Item.defaultProps = {
};

Box.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};

Box.defaultProps = {
    title: 'Список ссылок',
    items: []
};

export const BoxLinks = {Box, Item};
