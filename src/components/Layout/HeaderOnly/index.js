import Header from "./Header/index.js"

function HeaderOnly({children}) {
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </div>
    )
}

export default HeaderOnly