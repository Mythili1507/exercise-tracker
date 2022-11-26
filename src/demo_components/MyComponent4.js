function MyComponent4({firstName, lastName, children})
{
    return (
        <div>
            <h4>MyComponent 4</h4>
            <label>First name</label> : <label>{firstName}</label>
            <br/>
            <label>Last name</label> : <label>{lastName}</label>
            <br/>
            {children}
        </div>
    );
}

export default MyComponent4;