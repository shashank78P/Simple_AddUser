import React from "react"

const Card = (props) => {
    return (
        <>
            {
                props.users.map(ele => {
                    return (
                        <div className="frame box">
                            <div className="content" >{ele.userName}</div>
                            <div className="content" >{ele.userYear} (Years)</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card;