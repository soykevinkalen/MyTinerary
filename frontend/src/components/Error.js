import Header from "./Header"

const Error = () => {
    return (
        <div className="serverError">
            <Header />
            <h1>Sorry for the inconvenience, our servers were down</h1>
            <div className='servidor' style={{backgroundImage:'url("/assets/server.jpg")'}}></div>
        </div>
    )
}

export default Error